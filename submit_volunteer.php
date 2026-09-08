<?php
/**
 * Volunteer Application Submission Handler
 * Pandit Shree Gyasi Lal Mishra Educational & Social Welfare Society
 * Handles email notifications, server CSV logging, and automated Google Sheets sync.
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

// Read input (supports JSON and form-urlencoded)
$rawBody = file_get_contents('php://input');
$data = json_decode($rawBody, true);
if (!$data) {
    $data = $_POST;
}

$fullName   = isset($data['fullName']) ? trim(strip_tags($data['fullName'])) : '';
$whatsapp   = isset($data['whatsapp']) ? trim(strip_tags($data['whatsapp'])) : '';
$email      = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$status     = isset($data['status']) ? trim(strip_tags($data['status'])) : '';
$interest   = isset($data['interest']) ? trim(strip_tags($data['interest'])) : '';
$motivation = isset($data['motivation']) ? trim(strip_tags($data['motivation'])) : '';

if (empty($fullName) || empty($whatsapp) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Full Name, WhatsApp, and Email are required.']);
    exit(0);
}

// Human-friendly interest labels
$interestMap = [
    'medical_camp'     => 'Free Medical & Eye Camps',
    'digital_tutor'    => 'Digital Literacy & Computer Tutor',
    'field_mobilizer'  => 'NSS Field Mobilizer & Tree Drives',
    'women_skilling'   => 'Women Vocational Skilling Support'
];
$displayInterest = isset($interestMap[$interest]) ? $interestMap[$interest] : ($interest ?: 'General Volunteer');

// Human-friendly status labels
$statusMap = [
    'student'      => 'College / University Student',
    'professional' => 'Working Professional',
    'medical'      => 'Doctor / Medical Professional / Nurse',
    'homemaker'    => 'Homemaker / Freelancer',
    'other'        => 'Other'
];
$displayStatus = isset($statusMap[$status]) ? $statusMap[$status] : ($status ?: 'Not Specified');

date_default_timezone_set('Asia/Kolkata');
$timestamp = date('d-M-Y H:i:s') . ' IST';
$ip = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';

// 1. Log to server CSV file (Private backup)
$csvFile = __DIR__ . '/volunteers.csv';
$isNewFile = !file_exists($csvFile);
$fp = @fopen($csvFile, 'a');
if ($fp) {
    if ($isNewFile) {
        // UTF-8 BOM for Excel compatibility
        fwrite($fp, "\xEF\xBB\xBF");
        fputcsv($fp, ['Timestamp', 'Full Name', 'WhatsApp', 'Email', 'Status', 'Area of Interest', 'Motivation', 'IP Address']);
    }
    fputcsv($fp, [$timestamp, $fullName, $whatsapp, $email, $displayStatus, $displayInterest, $motivation, $ip]);
    fclose($fp);
}

// 2. Automated Google Sheets Webhook Sync
$googleSheetWebhook = getenv('GOOGLE_SHEET_VOLUNTEER_URL') ?: 'https://script.google.com/macros/s/AKfycbwALG5uPwxKeT6wDVCLGRfFzSfeGLVgi1NSMarr02sNpg-8DXJzLu0ocXS8YumpGs-_wg/exec';

$sheetSuccess = false;
if (!empty($googleSheetWebhook) && strpos($googleSheetWebhook, 'http') === 0) {
    $sheetPayload = json_encode([
        'timestamp'  => $timestamp,
        'fullName'   => $fullName,
        'whatsapp'   => $whatsapp,
        'email'      => $email,
        'status'     => $displayStatus,
        'interest'   => $displayInterest,
        'motivation' => $motivation
    ]);

    $ch = curl_init($googleSheetWebhook);
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $sheetPayload,
        CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true, // Google Apps Script redirects 302
        CURLOPT_TIMEOUT        => 10,
        CURLOPT_SSL_VERIFYPEER => true
    ]);
    $sheetResponse = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    if ($httpCode >= 200 && $httpCode < 400) {
        $sheetSuccess = true;
    }
}

// 3. Send Notification Email to psgmwelfare@gmail.com
$toEmail = 'psgmwelfare@gmail.com';
$subject = "New Volunteer Application: " . $fullName . " - PGSM Welfare";

$cleanPhone = preg_replace('/[^0-9]/', '', $whatsapp);

$emailBody = "
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<style>
  body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f7f7f7; margin: 0; padding: 20px; }
  .container { max-width: 600px; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); margin: 0 auto; border: 1px solid #eee; }
  .header { background: #F36F21; color: #ffffff; padding: 24px; text-align: center; }
  .header h1 { margin: 0; font-size: 22px; font-weight: 800; }
  .header p { margin: 4px 0 0; font-size: 13px; opacity: 0.9; }
  .content { padding: 24px; color: #333333; line-height: 1.6; }
  .field { margin-bottom: 16px; border-bottom: 1px solid #f0f0f0; padding-bottom: 10px; }
  .label { font-size: 11px; text-transform: uppercase; color: #888888; font-weight: bold; letter-spacing: 0.5px; }
  .value { font-size: 15px; color: #1f1f1f; font-weight: 600; margin-top: 4px; }
  .motivation-box { background: #FFF7F2; border-left: 4px solid #F36F21; padding: 14px; border-radius: 6px; font-size: 14px; font-style: italic; color: #444; }
  .footer { background: #fafafa; padding: 16px; text-align: center; font-size: 12px; color: #999999; border-top: 1px solid #eeeeee; }
  .btn { display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; font-size: 12px; margin-left: 10px; }
</style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h1>New Volunteer Application</h1>
      <p>Pandit Shree Gyasi Lal Mishra Educational & Social Welfare Society</p>
    </div>
    <div class='content'>
      <div class='field'>
        <div class='label'>Applicant Name</div>
        <div class='value'>" . htmlspecialchars($fullName) . "</div>
      </div>
      <div class='field'>
        <div class='label'>WhatsApp Number</div>
        <div class='value'>" . htmlspecialchars($whatsapp) . " <a href='https://wa.me/" . $cleanPhone . "' class='btn' target='_blank'>Chat on WhatsApp</a></div>
      </div>
      <div class='field'>
        <div class='label'>Email Address</div>
        <div class='value'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></div>
      </div>
      <div class='field'>
        <div class='label'>Current Status</div>
        <div class='value'>" . htmlspecialchars($displayStatus) . "</div>
      </div>
      <div class='field'>
        <div class='label'>Area of Interest</div>
        <div class='value' style='color:#F36F21;'>" . htmlspecialchars($displayInterest) . "</div>
      </div>
      <div class='field' style='border-bottom:none;'>
        <div class='label'>Motivation / Why they want to join</div>
        <div class='motivation-box'>" . nl2br(htmlspecialchars($motivation)) . "</div>
      </div>
      <p style='font-size: 12px; color: #777; margin-top: 20px;'>Submitted on: " . $timestamp . " | IP: " . $ip . "</p>
    </div>
    <div class='footer'>
      PGSM Welfare Volunteer Portal · Submissions are saved to server records & synced to Google Sheets.
    </div>
  </div>
</body>
</html>
";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: PGSM Welfare <noreply@pgsmwelfare.org>\r\n";
$headers .= "Reply-To: " . $fullName . " <" . $email . ">\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send notification email
@mail($toEmail, $subject, $emailBody, $headers);

echo json_encode([
    'success'             => true,
    'message'             => 'Volunteer application submitted successfully!',
    'logged'              => true,
    'google_sheet_synced' => $sheetSuccess
]);
