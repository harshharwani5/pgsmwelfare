<?php
/**
 * Automated Section 80G Tax Exemption Receipt Generator
 * Pandit Shree Gyasi Lal Mishra Educational & Social Welfare Society
 * 
 * Features:
 * 1. Generates official branded high-resolution PDF certificate using FPDF.
 * 2. Instant on-screen download (via Base64 payload + direct download link).
 * 3. Sends email with PDF attachment to Donor and psgmwelfare@gmail.com.
 * 4. Logs receipt details to receipts_80g.csv for annual Form 10BD filing.
 * 5. Syncs with Google Sheets webhook for real-time tracking.
 */

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
    exit(0);
}

require_once __DIR__ . '/fpdf.php';

// Parse incoming payload (JSON or POST)
$rawBody = file_get_contents('php://input');
$data = json_decode($rawBody, true);
if (!$data) {
    $data = $_POST;
}

$fullName      = isset($data['fullName']) ? trim(strip_tags($data['fullName'])) : '';
$panNumber     = isset($data['panNumber']) ? strtoupper(trim(strip_tags($data['panNumber']))) : '';
$email         = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$whatsapp      = isset($data['whatsapp']) ? trim(strip_tags($data['whatsapp'])) : '';
$transactionId = isset($data['transactionId']) ? trim(strip_tags($data['transactionId'])) : '';
$amount        = isset($data['amount']) ? floatval($data['amount']) : 0;

// Validation
if (empty($fullName)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Full Name (as per PAN) is required.']);
    exit(0);
}

if (empty($panNumber) || !preg_match('/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/', $panNumber)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'A valid 10-digit PAN number is mandatory for Section 80G tax receipts.']);
    exit(0);
}

if (empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Valid Email Address is required to receive the tax certificate.']);
    exit(0);
}

if ($amount < 50) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Donation amount must be at least Rs. 50.']);
    exit(0);
}

if (empty($transactionId)) {
    $transactionId = 'TXN_' . strtoupper(substr(md5(uniqid(mt_rand(), true)), 0, 10));
}

date_default_timezone_set('Asia/Kolkata');
$issueDate = date('d-M-Y');
$issueDateTime = date('d-M-Y H:i:s') . ' IST';
$currentYear = (int)date('Y');
$currentMonth = (int)date('m');

// Calculate Indian Financial Year & Assessment Year
if ($currentMonth >= 4) {
    $finYear = $currentYear . '-' . substr($currentYear + 1, 2);
    $ayYear  = ($currentYear + 1) . '-' . substr($currentYear + 2, 2);
} else {
    $finYear = ($currentYear - 1) . '-' . substr($currentYear, 2);
    $ayYear  = $currentYear . '-' . substr($currentYear + 1, 2);
}

// Generate Sequential Receipt Number
$counterFile = __DIR__ . '/receipt_counter.txt';
$receiptSeq = 101;
if (file_exists($counterFile)) {
    $fp = fopen($counterFile, 'c+');
    if ($fp && flock($fp, LOCK_EX)) {
        $curr = (int)trim(fread($fp, 32));
        $receiptSeq = ($curr > 0) ? $curr + 1 : 101;
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, (string)$receiptSeq);
        fflush($fp);
        flock($fp, LOCK_UN);
        fclose($fp);
    }
} else {
    @file_put_contents($counterFile, '102');
    $receiptSeq = 101;
}

$receiptNumber = 'PGSM/80G/' . $finYear . '/' . str_pad($receiptSeq, 4, '0', STR_PAD_LEFT);
$safeReceiptId = str_replace('/', '_', $receiptNumber);

// Number to Words in Indian Currency System
function indianNumberToWords($num) {
    $ones = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
    $tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
    $inWords = function($n) use (&$inWords, $ones, $tens) {
        if ($n == 0) return '';
        if ($n < 20) return $ones[$n];
        if ($n < 100) return $tens[(int)($n / 10)] . ($n % 10 != 0 ? ' ' . $ones[$n % 10] : ' ');
        if ($n < 1000) return $ones[(int)($n / 100)] . 'Hundred ' . $inWords($n % 100);
        if ($n < 100000) return $inWords((int)($n / 1000)) . 'Thousand ' . $inWords($n % 1000);
        if ($n < 10000000) return $inWords((int)($n / 100000)) . 'Lakh ' . $inWords($n % 100000);
        return $inWords((int)($n / 10000000)) . 'Crore ' . $inWords($n % 10000000);
    };
    
    $intPart = floor($num);
    $words = trim($inWords($intPart));
    return 'Rupees ' . ($words ?: 'Zero') . ' Only';
}

$amountInWords = indianNumberToWords($amount);
$formattedAmount = 'INR ' . number_format($amount, 2);

// ==========================================
// BUILD OFFICIAL 80G RECEIPT PDF VIA FPDF
// ==========================================

class PDF80G extends FPDF {
    function Header() {
        // Outer decorative double border
        $this->SetDrawColor(243, 111, 33); // PGSM Saffron
        $this->SetLineWidth(0.8);
        $this->Rect(8, 8, 194, 281);
        
        $this->SetDrawColor(31, 31, 31); // Dark Charcoal
        $this->SetLineWidth(0.3);
        $this->Rect(10, 10, 190, 277);
    }
}

$pdf = new PDF80G('P', 'mm', 'A4');
$pdf->SetAutoPageBreak(false);
$pdf->AddPage();

// 1. Top Organization Letterhead
$pdf->SetY(14);
$pdf->SetFont('Arial', 'B', 14);
$pdf->SetTextColor(160, 65, 0); // Deep PGSM Orange
$pdf->Cell(190, 7, 'PANDIT SHREE GYASI LAL MISHRA', 0, 1, 'C');

$pdf->SetFont('Arial', 'B', 12);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(190, 6, 'EDUCATIONAL & SOCIAL WELFARE SOCIETY', 0, 1, 'C');

$pdf->SetFont('Arial', '', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(190, 4.5, 'Registered under M.P. Societies Registration Act, 1973 | Reg. No: 06/12/03/11718/16', 0, 1, 'C');
$pdf->Cell(190, 4.5, 'Registered Secretariat: Mishra Clinic Campus, Nowgong, District Chhatarpur, Madhya Pradesh - 471201', 0, 1, 'C');
$pdf->Cell(190, 4.5, 'Helpline: +91 94067 62912  |  Email: psgmwelfare@gmail.com  |  Web: https://pgsmwelfare.org', 0, 1, 'C');

// 2. Accreditations & Statutory Compliance Ribbon
$pdf->Ln(2);
$pdf->SetFillColor(255, 242, 235); // Soft Saffron Tint
$pdf->SetDrawColor(243, 111, 33);
$pdf->SetTextColor(83, 30, 0);
$pdf->SetFont('Arial', 'B', 7.5);
$pdf->Cell(182, 6, 'PAN: AAATP8891J   |   80G URN: AAEAP1466C24BP02   |   12A URN: AAEAP1466C25BP01   |   CSR: CSR00007144   |   NITI Aayog: MP/2021/0299785', 1, 1, 'C', true);

// 3. Document Title
$pdf->Ln(4);
$pdf->SetFont('Arial', 'B', 12);
$pdf->SetTextColor(243, 111, 33);
$pdf->Cell(182, 6, 'DONATION RECEIPT & SECTION 80G TAX EXEMPTION CERTIFICATE', 0, 1, 'C');

$pdf->SetFont('Arial', 'I', 8);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(182, 4, '(Issued for Tax Deduction under Section 80G(5)(vi) of the Income Tax Act, 1961)', 0, 1, 'C');

// 4. Receipt Metadata Bar
$pdf->Ln(3);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(31, 31, 31);

// Metadata Box
$pdf->SetFillColor(248, 249, 250);
$pdf->SetDrawColor(220, 220, 220);
$pdf->Rect(14, $pdf->GetY(), 182, 14, 'DF');

$metaY = $pdf->GetY() + 2;
$pdf->SetXY(16, $metaY);
$pdf->Cell(45, 5, 'Receipt No: ' . $receiptNumber, 0, 0, 'L');
$pdf->Cell(45, 5, 'Date of Issue: ' . $issueDate, 0, 0, 'L');
$pdf->Cell(45, 5, 'Financial Year: ' . $finYear, 0, 0, 'L');
$pdf->Cell(45, 5, 'Assessment Year: ' . $ayYear, 0, 1, 'L');

$pdf->SetXY(16, $metaY + 5.5);
$pdf->SetFont('Arial', '', 8);
$pdf->SetTextColor(100, 100, 100);
$pdf->Cell(90, 5, 'Section 80G Approval Order: AAEAP1466C24BP02', 0, 0, 'L');
$pdf->Cell(90, 5, 'Validity: In Perpetuity (Sub-clause (vi) of clause (a) of Section 80G(5))', 0, 1, 'L');

// 5. Donor Information Section
$pdf->SetY($metaY + 14);
$pdf->SetFont('Arial', 'B', 9.5);
$pdf->SetTextColor(243, 111, 33);
$pdf->Cell(182, 6, 'I. PARTICULARS OF THE DONOR (As Reported for Form 10BD)', 0, 1, 'L');

$donorStartY = $pdf->GetY();
$pdf->SetFillColor(255, 255, 255);
$pdf->SetDrawColor(220, 220, 220);
$pdf->Rect(14, $donorStartY, 182, 26, 'D');

$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->SetXY(16, $donorStartY + 2);
$pdf->Cell(45, 6, 'Donor Full Name:', 0, 0, 'L');
$pdf->SetFont('Arial', 'B', 9);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(130, 6, $fullName, 0, 1, 'L');

$pdf->SetXY(16, $donorStartY + 8);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(45, 6, 'Permanent Account Number (PAN):', 0, 0, 'L');
$pdf->SetFont('Arial', 'B', 10);
$pdf->SetTextColor(160, 65, 0); // Highlighted PAN
$pdf->Cell(130, 6, $panNumber . '   (Mandatory for Section 80G Tax Deduction Claim)', 0, 1, 'L');

$pdf->SetXY(16, $donorStartY + 14);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(45, 6, 'Email Address:', 0, 0, 'L');
$pdf->SetFont('Arial', '', 8.5);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(130, 6, $email, 0, 1, 'L');

$pdf->SetXY(16, $donorStartY + 20);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(45, 5, 'Contact / WhatsApp:', 0, 0, 'L');
$pdf->SetFont('Arial', '', 8.5);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(130, 5, $whatsapp ?: 'Not Provided', 0, 1, 'L');

// 6. Contribution & Transaction Particulars
$pdf->SetY($donorStartY + 29);
$pdf->SetFont('Arial', 'B', 9.5);
$pdf->SetTextColor(243, 111, 33);
$pdf->Cell(182, 6, 'II. CONTRIBUTION & TRANSACTION DETAILS', 0, 1, 'L');

$txnStartY = $pdf->GetY();
$pdf->Rect(14, $txnStartY, 182, 32, 'D');

$pdf->SetXY(16, $txnStartY + 2);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(45, 6, 'Donation Amount (in Figures):', 0, 0, 'L');
$pdf->SetFont('Arial', 'B', 11);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(130, 6, $formattedAmount, 0, 1, 'L');

$pdf->SetXY(16, $txnStartY + 8);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(45, 6, 'Amount in Words:', 0, 0, 'L');
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(130, 6, $amountInWords, 0, 1, 'L');

$pdf->SetXY(16, $txnStartY + 14);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(45, 6, 'Mode of Contribution:', 0, 0, 'L');
$pdf->SetFont('Arial', '', 8.5);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(130, 6, 'Electronic Funds Transfer (Razorpay / UPI / NetBanking / Cards)', 0, 1, 'L');

$pdf->SetXY(16, $txnStartY + 20);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(45, 6, 'Transaction Ref / UTR No:', 0, 0, 'L');
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(160, 65, 0);
$pdf->Cell(130, 6, $transactionId, 0, 1, 'L');

$pdf->SetXY(16, $txnStartY + 26);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(45, 5, 'Charitable Cause / Purpose:', 0, 0, 'L');
$pdf->SetFont('Arial', '', 8.5);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(130, 5, 'Grassroots Rural Education, Youth Livelihoods & Free Community Healthcare', 0, 1, 'L');

// 7. Statutory Certification & Legal Declaration
$pdf->SetY($txnStartY + 35);
$certBoxY = $pdf->GetY();
$pdf->SetFillColor(255, 252, 250);
$pdf->SetDrawColor(243, 111, 33);
$pdf->Rect(14, $certBoxY, 182, 34, 'DF');

$pdf->SetXY(16, $certBoxY + 2);
$pdf->SetFont('Arial', 'B', 8);
$pdf->SetTextColor(160, 65, 0);
$pdf->Cell(178, 4.5, 'STATUTORY UNDERTAKING & CERTIFICATION UNDER SECTION 80G OF THE INCOME TAX ACT, 1961:', 0, 1, 'L');

$pdf->SetFont('Arial', '', 7.5);
$pdf->SetTextColor(50, 50, 50);
$pdf->SetXY(16, $certBoxY + 7);
$pdf->MultiCell(178, 3.8, "1. Received with sincere gratitude from the donor as a voluntary charitable contribution to Pandit Shree Gyasi Lal Mishra Educational & Social Welfare Society.\n2. Certified that the Society is approved under Section 80G(5)(vi) of the Income Tax Act, 1961 vide Order URN AAEAP1466C24BP02 and Section 12A URN AAEAP1466C25BP01.\n3. Donations to the Society are entitled to 50% deduction in calculating the total taxable income of the donor under Section 80G.\n4. In accordance with CBDT Notification No. 19/2021, the details of this donation shall be electronically filed in the Annual Statement of Donations (Form 10BD) on the Income Tax Department e-Filing Portal.");

// 8. Signatures & Digital Seal Block
$pdf->SetY($certBoxY + 38);
$signY = $pdf->GetY();

// Seal Box on Left
$pdf->SetDrawColor(200, 200, 200);
$pdf->Rect(14, $signY, 80, 28, 'D');
$pdf->SetXY(16, $signY + 2);
$pdf->SetFont('Arial', 'B', 7.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(76, 4, 'OFFICIAL SEAL / STAMP', 0, 1, 'C');

$pdf->SetFont('Arial', 'I', 7);
$pdf->SetTextColor(120, 120, 120);
$pdf->SetXY(16, $signY + 8);
$pdf->MultiCell(76, 3.5, "PANDIT SHREE GYASI LAL MISHRA\nEDUCATION & SOCIAL WELFARE SOCIETY\nReg. 06/12/03/11718/16 * NOWGONG (M.P.)\n[Digitally Verified Seal]", 0, 'C');

// Signatory on Right
$pdf->Rect(102, $signY, 94, 28, 'D');
$pdf->SetXY(104, $signY + 2);
$pdf->SetFont('Arial', 'B', 7.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(90, 4, 'FOR PANDIT SHREE GYASI LAL MISHRA WELFARE SOCIETY', 0, 1, 'C');

$pdf->SetXY(104, $signY + 12);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(90, 4, 'Authorized Signatory / Secretary', 0, 1, 'C');

$pdf->SetXY(104, $signY + 17);
$pdf->SetFont('Arial', 'I', 6.5);
$pdf->SetTextColor(120, 120, 120);
$pdf->Cell(90, 3.5, 'Digitally Issued e-Receipt (Authenticated Electronic Certificate)', 0, 1, 'C');
$pdf->Cell(90, 3.5, 'Generated on ' . $issueDateTime, 0, 1, 'C');

// 9. Bottom Footer Notice
$pdf->SetY(274);
$pdf->SetFont('Arial', '', 7);
$pdf->SetTextColor(120, 120, 120);
$pdf->Cell(182, 4, 'This electronic receipt is issued under the Information Technology Act, 2000. It is valid for Income Tax deduction claims under Section 80G.', 0, 1, 'C');

// Generate PDF binary
$pdfContent = $pdf->Output('S');
$pdfBase64 = base64_encode($pdfContent);

// Save copy on Hostinger server
$receiptsDir = __DIR__ . '/receipts_80g';
if (!file_exists($receiptsDir)) {
    @mkdir($receiptsDir, 0755, true);
}
$pdfFilePath = $receiptsDir . '/' . $safeReceiptId . '.pdf';
@file_put_contents($pdfFilePath, $pdfContent);

// Log to CSV for Annual Form 10BD Filing
$csvFile = __DIR__ . '/receipts_80g.csv';
$isNewCsv = !file_exists($csvFile);
$csvFp = @fopen($csvFile, 'a');
if ($csvFp) {
    if ($isNewCsv) {
        fwrite($csvFp, "\xEF\xBB\xBF"); // UTF-8 BOM
        fputcsv($csvFp, ['Receipt No', 'Date', 'Full Name', 'PAN', 'Amount', 'Payment Mode', 'Transaction ID', 'Email', 'WhatsApp', 'Fin Year', 'Assessment Year']);
    }
    fputcsv($csvFp, [$receiptNumber, $issueDate, $fullName, $panNumber, $amount, 'Online / UPI', $transactionId, $email, $whatsapp, $finYear, $ayYear]);
    fclose($csvFp);
}

// Sync to Google Sheet Webhook if configured
$googleSheetWebhook = getenv('GOOGLE_SHEET_VOLUNTEER_URL') ?: 'https://script.google.com/macros/s/AKfycbyvWa96qnpB88Savv16-nfVHYF1Ro1UFoY2SDTo-NGGsmwgLTYH8kd-jY6n6qJvF6cdPA/exec';
if (!empty($googleSheetWebhook)) {
    $sheetPayload = json_encode([
        'timestamp'  => $issueDateTime,
        'fullName'   => $fullName . ' (80G Receipt: ' . $receiptNumber . ')',
        'whatsapp'   => $whatsapp,
        'email'      => $email,
        'status'     => '80G Tax Donor (PAN: ' . $panNumber . ')',
        'interest'   => 'Donation: ' . $formattedAmount . ' (' . $transactionId . ')',
        'motivation' => '80G Tax Exemption Certificate issued. Eligible for 50% deduction.'
    ]);
    $ch = curl_init($googleSheetWebhook);
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $sheetPayload,
        CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_TIMEOUT        => 5,
        CURLOPT_SSL_VERIFYPEER => true
    ]);
    @curl_exec($ch);
    @curl_close($ch);
}

// Send Email with PDF Attachment to Donor and psgmwelfare@gmail.com
$toEmail = $email;
$bccEmail = 'psgmwelfare@gmail.com';
$emailSubject = "Your Section 80G Tax Exemption Certificate - " . $receiptNumber . " | PGSM Welfare";

$boundary = "==Multipart_Boundary_x" . md5(time()) . "x";

$emailHeaders  = "MIME-Version: 1.0\r\n";
$emailHeaders .= "From: PGSM Welfare Society <noreply@pgsmwelfare.org>\r\n";
$emailHeaders .= "Reply-To: psgmwelfare@gmail.com\r\n";
$emailHeaders .= "Bcc: " . $bccEmail . "\r\n";
$emailHeaders .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";
$emailHeaders .= "X-Mailer: PHP/" . phpversion();

$htmlMessage = "
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<style>
  body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f7f7f7; margin: 0; padding: 20px; }
  .box { max-width: 600px; background: #ffffff; border-radius: 12px; margin: 0 auto; overflow: hidden; border: 1px solid #eee; }
  .head { background: #F36F21; color: white; padding: 24px; text-align: center; }
  .content { padding: 24px; color: #333; line-height: 1.6; }
  .detail { background: #FFF7F2; border-left: 4px solid #F36F21; padding: 14px; margin: 16px 0; border-radius: 6px; }
  .footer { background: #fafafa; padding: 16px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #eee; }
</style>
</head>
<body>
  <div class='box'>
    <div class='head'>
      <h2 style='margin:0;'>Section 80G Tax Exemption Certificate</h2>
      <p style='margin:4px 0 0; opacity:0.9;'>Pandit Shree Gyasi Lal Mishra Educational & Social Welfare Society</p>
    </div>
    <div class='content'>
      <p>Dear <strong>" . htmlspecialchars($fullName) . "</strong>,</p>
      <p>Thank you deeply for your generous contribution towards our grassroots educational, women empowerment, and healthcare missions across rural communities in India.</p>
      
      <div class='detail'>
        <p style='margin:4px 0;'><strong>Receipt Number:</strong> " . htmlspecialchars($receiptNumber) . "</p>
        <p style='margin:4px 0;'><strong>Donor PAN:</strong> " . htmlspecialchars($panNumber) . "</p>
        <p style='margin:4px 0;'><strong>Donation Amount:</strong> " . htmlspecialchars($formattedAmount) . " (" . htmlspecialchars($amountInWords) . ")</p>
        <p style='margin:4px 0;'><strong>Transaction / UTR Ref:</strong> " . htmlspecialchars($transactionId) . "</p>
        <p style='margin:4px 0;'><strong>80G Approval URN:</strong> AAEAP1466C24BP02</p>
      </div>
      
      <p>Please find attached your official <strong>Section 80G Tax Exemption Certificate (PDF)</strong> for claiming 50% deduction on your income tax return (ITR).</p>
      <p>Your contribution is also reported in the Society's Annual Statement of Donations (Form 10BD) to the Income Tax Department.</p>
    </div>
    <div class='footer'>
      PGSM Welfare Secretariat · Mishra Clinic Campus, Nowgong (M.P.) - 471201 | +91 94067 62912
    </div>
  </div>
</body>
</html>
";

$emailBodyPayload = "--{$boundary}\r\n";
$emailBodyPayload .= "Content-Type: text/html; charset=UTF-8\r\n";
$emailBodyPayload .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$emailBodyPayload .= $htmlMessage . "\r\n\r\n";

// PDF Attachment
$attachmentData = chunk_split($pdfBase64);
$pdfFilename = "PGSM_80G_Receipt_" . $safeReceiptId . ".pdf";

$emailBodyPayload .= "--{$boundary}\r\n";
$emailBodyPayload .= "Content-Type: application/pdf; name=\"{$pdfFilename}\"\r\n";
$emailBodyPayload .= "Content-Disposition: attachment; filename=\"{$pdfFilename}\"\r\n";
$emailBodyPayload .= "Content-Transfer-Encoding: base64\r\n\r\n";
$emailBodyPayload .= $attachmentData . "\r\n\r\n";
$emailBodyPayload .= "--{$boundary}--";

@mail($toEmail, $emailSubject, $emailBodyPayload, $emailHeaders);

// Return JSON response with base64 for instant client-side download
echo json_encode([
    'success'       => true,
    'message'       => '80G Tax Exemption Certificate generated successfully!',
    'receiptNumber' => $receiptNumber,
    'donorName'     => $fullName,
    'panNumber'     => $panNumber,
    'amount'        => $amount,
    'formattedAmount' => $formattedAmount,
    'issueDate'     => $issueDate,
    'pdfFilename'   => $pdfFilename,
    'pdfBase64'     => $pdfBase64
]);
