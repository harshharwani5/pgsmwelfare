$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$chromePath86 = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

$pdfPath = "C:\Users\harsh\OneDrive\Desktop\New folder\Madhu_Nivas_Video_Scripts.pdf"
$htmlPath = "C:\Users\harsh\OneDrive\Desktop\New folder\Madhu_Nivas_Video_Scripts_PRINT.html"

if (Test-Path $chromePath) {
    & $chromePath --headless --disable-gpu --print-to-pdf="$pdfPath" "$htmlPath"
    Write-Host "PDF Created with Chrome"
} elseif (Test-Path $chromePath86) {
    & $chromePath86 --headless --disable-gpu --print-to-pdf="$pdfPath" "$htmlPath"
    Write-Host "PDF Created with Chrome (x86)"
} elseif (Test-Path $edgePath) {
    & $edgePath --headless --disable-gpu --print-to-pdf="$pdfPath" "$htmlPath"
    Write-Host "PDF Created with Edge"
} else {
    Write-Host "Browser not found."
}
