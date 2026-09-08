/**
 * PGSM Welfare - Google Sheets Volunteer Auto-Sync Script
 * Pandit Shree Gyasi Lal Mishra Educational & Social Welfare Society
 * 
 * =========================================================================
 * SETUP INSTRUCTIONS (Takes only 1 minute):
 * =========================================================================
 * 1. Open Google Sheets (https://sheet.new)
 * 2. Name your spreadsheet: "PGSM Welfare - Volunteer Applications"
 * 3. In the top menu, click: Extensions > Apps Script
 * 4. Delete everything in the code editor, and paste this ENTIRE file into it.
 * 5. Click the blue "Deploy" button (top right) > "New deployment".
 * 6. Under "Select type", click the gear icon and select: "Web app".
 * 7. Set the fields:
 *    - Description: "PGSM Volunteer Sync"
 *    - Execute as: "Me" (your Google account)
 *    - Who has access: "Anyone"  <-- IMPORTANT: Select "Anyone" so the website can post to it!
 * 8. Click "Deploy". If prompted, click "Authorize access", choose your Google account, 
 *    click "Advanced", and click "Go to Untitled project (unsafe)" to grant permissions.
 * 9. Copy the "Web app URL" (it looks like: https://script.google.com/macros/s/AKfycb.../exec)
 * 10. That's it! Provide this URL or paste it into your submit_volunteer.php / volunteer.html.
 * =========================================================================
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Automatically initialize header row with official PGSM saffron styling if sheet is brand new
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp (IST)",
        "Full Name",
        "WhatsApp Number",
        "Email Address",
        "Current Status",
        "Area of Interest",
        "Why do you want to join?",
        "Status / Follow-up"
      ]);
      
      var headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#FFF2EB");
      headerRange.setFontColor("#F36F21");
      sheet.setFrozenRows(1);
    }
    
    // Parse incoming payload (supports both JSON and URL-encoded forms)
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }
    
    var timestamp = data.timestamp || Utilities.formatDate(new Date(), "Asia/Kolkata", "dd-MMM-yyyy HH:mm:ss 'IST'");
    var fullName = data.fullName || "Anonymous";
    var whatsapp = data.whatsapp || "";
    var email = data.email || "";
    var status = data.status || "";
    var interest = data.interest || "";
    var motivation = data.motivation || "";
    
    // Append the row to Google Sheet
    sheet.appendRow([
      timestamp,
      fullName,
      whatsapp,
      email,
      status,
      interest,
      motivation,
      "New"
    ]);
    
    // Optional instant email notification from Google
    try {
      MailApp.sendEmail({
        to: "psgmwelfare@gmail.com",
        subject: "New Volunteer Application in Google Sheet: " + fullName,
        body: "A new volunteer application has been automatically added to your Google Sheet:\n\n" +
              "Name: " + fullName + "\n" +
              "WhatsApp: " + whatsapp + "\n" +
              "Email: " + email + "\n" +
              "Status: " + status + "\n" +
              "Interest: " + interest + "\n" +
              "Motivation: " + motivation + "\n\n" +
              "View your Google Sheet to manage applications."
      });
    } catch(mailErr) {
      // Ignore if quota or permissions not granted
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      message: "Row appended to Google Sheet successfully!"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("PGSM Welfare Volunteer Webhook is Active & Ready.");
}
