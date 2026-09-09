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

if (!defined('FPDF_FONTPATH')) {
    define('FPDF_FONTPATH', __DIR__ . '/font/');
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

if (empty($transactionId)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'A valid Transaction / Payment ID (pay_...) or Bank UTR is required.']);
    exit(0);
}

// ==========================================
// 1. DUPLICATE RECEIPT CHECK
// ==========================================
$csvFile = __DIR__ . '/receipts_80g.csv';
if (file_exists($csvFile)) {
    $fp = @fopen($csvFile, 'r');
    if ($fp) {
        fgetcsv($fp); // skip header
        while (($row = fgetcsv($fp)) !== false) {
            if (isset($row[6]) && strcasecmp(trim($row[6]), $transactionId) === 0) {
                fclose($fp);
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'error'   => "Duplicate Claim: An official 80G Tax Exemption Certificate has already been issued for Transaction ID '{$transactionId}' on {$row[1]} (Receipt No: {$row[0]}). Each transaction can only be claimed once."
                ]);
                exit(0);
            }
        }
        fclose($fp);
    }
}

// ==========================================
// 2. LIVE RAZORPAY API CROSS-CHECK
// ==========================================
$keyId = getenv('RAZORPAY_KEY_ID') ?: 'rzp_live_TZYodTojrVGsKI';
$keySecret = getenv('RAZORPAY_KEY_SECRET') ?: base64_decode('WEZ3NUlmdHJySHhsclFRU25adGV4MXRF');

$isRazorpayPayment = (strpos($transactionId, 'pay_') === 0);
$isRazorpayOrder   = (strpos($transactionId, 'order_') === 0);

if ($isRazorpayPayment || $isRazorpayOrder) {
    $paymentToQuery = $transactionId;

    if ($isRazorpayOrder) {
        $orderCh = curl_init('https://api.razorpay.com/v1/orders/' . urlencode($transactionId) . '/payments');
        curl_setopt_array($orderCh, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_USERPWD        => $keyId . ':' . $keySecret,
            CURLOPT_TIMEOUT        => 10,
            CURLOPT_SSL_VERIFYPEER => true
        ]);
        $orderRes = curl_exec($orderCh);
        $orderHttp = curl_getinfo($orderCh, CURLINFO_HTTP_CODE);
        curl_close($orderCh);

        if ($orderHttp === 200 && !empty($orderRes)) {
            $orderPayments = json_decode($orderRes, true);
            if (!empty($orderPayments['items'])) {
                foreach ($orderPayments['items'] as $item) {
                    if (isset($item['status']) && $item['status'] === 'captured') {
                        $paymentToQuery = $item['id'];
                        break;
                    }
                }
            }
        }
    }

    $ch = curl_init('https://api.razorpay.com/v1/payments/' . urlencode($paymentToQuery));
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_USERPWD        => $keyId . ':' . $keySecret,
        CURLOPT_TIMEOUT        => 10,
        CURLOPT_SSL_VERIFYPEER => true
    ]);
    $payRes = curl_exec($ch);
    $payHttp = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($payHttp !== 200 || empty($payRes)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error'   => "Payment Verification Failed: Payment ID '{$transactionId}' was not found in PGSM Welfare Society's live payment gateway records. Please check the ID or verify your payment."
        ]);
        exit(0);
    }

    $paymentData = json_decode($payRes, true);
    if (!$paymentData || !isset($paymentData['status'])) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error'   => "Payment Verification Error: Unable to read response from payment gateway."
        ]);
        exit(0);
    }

    if ($paymentData['status'] !== 'captured') {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error'   => "Payment Verification Failed: Payment status is '{$paymentData['status']}' (not captured). 80G tax receipts can only be generated for successfully completed donations."
        ]);
        exit(0);
    }

    // Lock verified amount directly from Razorpay (converts paise to INR)
    $verifiedAmount = floatval($paymentData['amount']) / 100.0;
    if ($verifiedAmount < 50) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error'   => "The verified donation amount (INR {$verifiedAmount}) is below the minimum Rs. 50 required for Section 80G tax exemption."
        ]);
        exit(0);
    }

    $amount = $verifiedAmount;
    $transactionId = $paymentData['id']; // Normalize to pay_... ID
} else {
    // Non-Razorpay transaction (Direct Bank Transfer UTR / Offline UPI QR)
    // Direct bank transfers are submitted for admin verification against Bank of Baroda bank statements.
    
    $googleSheetWebhook = getenv('GOOGLE_SHEET_VOLUNTEER_URL') ?: 'https://script.google.com/macros/s/AKfycbyvWa96qnpB88Savv16-nfVHYF1Ro1UFoY2SDTo-NGGsmwgLTYH8kd-jY6n6qJvF6cdPA/exec';
    if (!empty($googleSheetWebhook)) {
        $sheetPayload = json_encode([
            'timestamp'  => date('d-M-Y H:i:s') . ' IST',
            'fullName'   => $fullName . ' [80G MANUAL CLAIM]',
            'whatsapp'   => $whatsapp,
            'email'      => $email,
            'status'     => 'NEEDS BANK VERIFICATION (UTR: ' . $transactionId . ')',
            'interest'   => 'Claimed Amount: INR ' . number_format($amount, 2) . ' (PAN: ' . $panNumber . ')',
            'motivation' => 'Direct Bank / UPI transfer claim. Admin must verify credit in Bank of Baroda account before issuing certificate.'
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

    // Send Alert Email to psgmwelfare@gmail.com
    $adminSubject = "Action Required: Bank Transfer 80G Claim (UTR: " . $transactionId . ") | PGSM Welfare";
    $adminBody = "A donor has submitted an 80G Tax Exemption Receipt request for a Direct Bank / UPI Transfer:\n\n"
               . "- Donor Name: {$fullName}\n"
               . "- Donor PAN: {$panNumber}\n"
               . "- Claimed Amount: Rs. " . number_format($amount, 2) . "\n"
               . "- Bank UTR / Ref: {$transactionId}\n"
               . "- Email: {$email}\n"
               . "- Contact: {$whatsapp}\n\n"
               . "Please verify that this amount was credited to the Society's Bank of Baroda account before issuing the official certificate.";
    @mail('psgmwelfare@gmail.com', $adminSubject, $adminBody, "From: PGSM Welfare <noreply@pgsmwelfare.org>\r\nReply-To: {$email}");

    // Return response indicating verification submission
    echo json_encode([
        'success'             => true,
        'pendingVerification' => true,
        'message'             => "Your 80G Tax Exemption claim for Bank Reference '{$transactionId}' has been securely submitted. Because Direct Bank / UPI transfers require bank statement reconciliation, our finance team will verify the credit with our Bank of Baroda account and email your official certificate to {$email} within 24-48 hours.",
        'donorName'           => $fullName,
        'panNumber'           => $panNumber,
        'transactionId'       => $transactionId,
        'amount'              => $amount
    ]);
    exit(0);
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

try {
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
$pdf->Rect(14, $pdf->GetY(), 182, 16, 'DF');

$metaY = $pdf->GetY() + 1.5;
$pdf->SetXY(16, $metaY);
$pdf->SetFont('Arial', 'B', 8);
$pdf->Cell(92, 4.5, 'Receipt No: ' . $receiptNumber, 0, 0, 'L');
$pdf->Cell(86, 4.5, 'Date of Issue: ' . $issueDate, 0, 1, 'L');

$pdf->SetXY(16, $metaY + 4.5);
$pdf->Cell(92, 4.5, 'Financial Year: ' . $finYear, 0, 0, 'L');
$pdf->Cell(86, 4.5, 'Assessment Year: ' . $ayYear, 0, 1, 'L');

$pdf->SetXY(16, $metaY + 9);
$pdf->SetFont('Arial', '', 7.5);
$pdf->SetTextColor(100, 100, 100);
$pdf->Cell(92, 4.5, 'Section 80G Approval URN: AAEAP1466C24BP02', 0, 0, 'L');
$pdf->Cell(86, 4.5, 'Validity: In Perpetuity (Sec 80G(5)(vi))', 0, 1, 'L');

// 5. Donor Information Section
$pdf->SetY($metaY + 16.5);
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
$pdf->Cell(60, 5.5, 'Donor Full Name:', 0, 0, 'L');
$pdf->SetFont('Arial', 'B', 9);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(118, 5.5, $fullName, 0, 1, 'L');

$pdf->SetXY(16, $donorStartY + 7.5);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(60, 5.5, 'Permanent Account Number (PAN):', 0, 0, 'L');
$pdf->SetFont('Arial', 'B', 9.5);
$pdf->SetTextColor(160, 65, 0); // Highlighted PAN
$pdf->Cell(118, 5.5, $panNumber . '  (Mandatory for Sec 80G Deduction)', 0, 1, 'L');

$pdf->SetXY(16, $donorStartY + 13);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(60, 5.5, 'Email Address:', 0, 0, 'L');
$pdf->SetFont('Arial', '', 8.5);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(118, 5.5, $email, 0, 1, 'L');

$pdf->SetXY(16, $donorStartY + 18.5);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(60, 5.5, 'Contact / WhatsApp:', 0, 0, 'L');
$pdf->SetFont('Arial', '', 8.5);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(118, 5.5, $whatsapp ?: 'Not Provided', 0, 1, 'L');

// 6. Contribution & Transaction Particulars
$pdf->SetY($donorStartY + 28);
$pdf->SetFont('Arial', 'B', 9.5);
$pdf->SetTextColor(243, 111, 33);
$pdf->Cell(182, 6, 'II. CONTRIBUTION & TRANSACTION DETAILS', 0, 1, 'L');

$txnStartY = $pdf->GetY();
$pdf->Rect(14, $txnStartY, 182, 30, 'D');

$pdf->SetXY(16, $txnStartY + 2);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(60, 5.5, 'Donation Amount (in Figures):', 0, 0, 'L');
$pdf->SetFont('Arial', 'B', 10.5);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(118, 5.5, $formattedAmount, 0, 1, 'L');

$pdf->SetXY(16, $txnStartY + 7.5);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(60, 5.5, 'Amount in Words:', 0, 0, 'L');
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(118, 5.5, $amountInWords, 0, 1, 'L');

$pdf->SetXY(16, $txnStartY + 13);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(60, 5.5, 'Mode of Contribution:', 0, 0, 'L');
$pdf->SetFont('Arial', '', 8);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(118, 5.5, 'Electronic Funds Transfer (Razorpay / UPI / NetBanking / Cards)', 0, 1, 'L');

$pdf->SetXY(16, $txnStartY + 18.5);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(60, 5.5, 'Transaction Ref / UTR No:', 0, 0, 'L');
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(160, 65, 0);
$pdf->Cell(118, 5.5, $transactionId, 0, 1, 'L');

$pdf->SetXY(16, $txnStartY + 24);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(60, 5, 'Charitable Cause / Purpose:', 0, 0, 'L');
$pdf->SetFont('Arial', '', 8);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(118, 5, 'Grassroots Rural Education, Youth Livelihoods & Free Community Healthcare', 0, 1, 'L');

// 7. Statutory Certification & Legal Declaration
$pdf->SetY($txnStartY + 33);
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
$pdf->SetY($certBoxY + 37);
$signY = $pdf->GetY();

// Seal Box on Left
$pdf->SetDrawColor(200, 200, 200);
$pdf->Rect(14, $signY, 84, 28, 'D');
$pdf->SetXY(14, $signY + 2);
$pdf->SetFont('Arial', 'B', 7.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(84, 4, 'OFFICIAL SEAL / STAMP', 0, 1, 'C');

$pdf->SetFont('Arial', 'I', 7);
$pdf->SetTextColor(120, 120, 120);
$pdf->SetXY(14, $signY + 8);
$pdf->MultiCell(84, 3.5, "PANDIT SHREE GYASI LAL MISHRA\nEDUCATION & SOCIAL WELFARE SOCIETY\nReg. 06/12/03/11718/16 * NOWGONG (M.P.)\n[Digitally Verified Seal]", 0, 'C');

// Signatory on Right
$pdf->Rect(102, $signY, 94, 28, 'D');
$pdf->SetXY(102, $signY + 2);
$pdf->SetFont('Arial', 'B', 7.5);
$pdf->SetTextColor(80, 80, 80);
$pdf->Cell(94, 4, 'FOR PANDIT SHREE GYASI LAL MISHRA WELFARE SOCIETY', 0, 1, 'C');

$pdf->SetXY(102, $signY + 11);
$pdf->SetFont('Arial', 'B', 8.5);
$pdf->SetTextColor(31, 31, 31);
$pdf->Cell(94, 4, 'Authorized Signatory / Secretary', 0, 1, 'C');

$pdf->SetXY(102, $signY + 16.5);
$pdf->SetFont('Arial', 'I', 6.5);
$pdf->SetTextColor(120, 120, 120);
$pdf->Cell(94, 3.5, 'Digitally Issued e-Receipt (Authenticated Electronic Certificate)', 0, 1, 'C');
$pdf->SetXY(102, $signY + 20.5);
$pdf->Cell(94, 3.5, 'Generated on ' . $issueDateTime, 0, 1, 'C');

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
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error'   => 'Certificate Generation Error: ' . $e->getMessage()
    ]);
    exit(0);
}
