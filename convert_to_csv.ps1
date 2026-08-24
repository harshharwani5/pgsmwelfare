$baseDir = "C:\Users\harsh\OneDrive\Desktop\New folder"
$files = @("persona_sheet_batch1.md", "persona_sheet_batch2.md", "persona_sheet_batch3.md")
$allPersonas = @()

foreach ($file in $files) {
    $path = Join-Path $baseDir $file
    if (Test-Path $path) {
        $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
        # Split right before each persona section
        $blocks = [System.Text.RegularExpressions.Regex]::Split($content, "(?=### PERSONA \d+:)")
        
        foreach ($block in $blocks) {
            if ($block -notmatch "^### PERSONA \d+:\s*(.+)") { continue }
            $name = $Matches[1].Split("`r`n")[0].Trim()
            
            function Get-SingleValue ($pattern, $text) {
                $match = [System.Text.RegularExpressions.Regex]::Match($text, "$pattern\s*(.+)")
                if ($match.Success) { return $match.Groups[1].Value.Trim() }
                return ""
            }
            
            function Get-ListValue ($headerPattern, $text) {
                $match = [System.Text.RegularExpressions.Regex]::Match($text, "$headerPattern\s*\r?\n((?:\d+\..+(\r?\n|$))+)")
                if ($match.Success) {
                    $lines = [System.Text.RegularExpressions.Regex]::Matches($match.Groups[1].Value, "\d+\.\s*(.+)")
                    $result = @()
                    $i = 1
                    foreach ($m in $lines) {
                        $result += "$i. $($m.Groups[1].Value.Trim())"
                        $i++
                    }
                    return $result -join "`r`n"
                }
                return ""
            }

            $obj = [PSCustomObject]@{
                "Persona" = $name
                "Gender" = Get-SingleValue "\*\*Gender:\*\*" $block
                "Age Group" = Get-SingleValue "\*\*Age Group:\*\*" $block
                "Desires (10)" = Get-ListValue "\*\*Desires \(10\):\*\*" $block
                "Needs (10)" = Get-ListValue "\*\*Needs \(10\):\*\*" $block
                "Friction/Barriers (10)" = Get-ListValue "\*\*Friction/Barriers \(10\):\*\*" $block
                "Why Do They Need/Buy (10)" = Get-ListValue "\*\*Why Do They Need/Buy \(10\):\*\*" $block
                "What Will We Offer (10)" = Get-ListValue "\*\*What Will We Offer \(10\):\*\*" $block
                "Scroll-Stopper Hooks (10)" = Get-ListValue "\*\*Scroll-Stopper Hooks in Hindi/Hinglish \(10\):\*\*" $block
                "Top 5 USPs" = Get-ListValue "\*\*Top 5 USPs for This Persona \(5\):\*\*" $block
                "CTA" = (Get-SingleValue "\*\*CTA(?:\s*\(Call to Action\))?:?\*\*" $block) -replace '^["'']|["'']$', ''
                "Awareness Stage" = Get-SingleValue "\*\*Awareness Stage:\*\*" $block
                "Decision Influencer" = Get-SingleValue "\*\*Decision Influencer:\*\*" $block
                "Visual/Creative Direction" = Get-SingleValue "\*\*Visual/Creative Direction:\*\*" $block
                "Emotional Tone" = Get-SingleValue "\*\*Emotional Tone:\*\*" $block
            }
            $allPersonas += $obj
        }
    }
}

$csvPath = Join-Path $baseDir "Ad_Creative_Persona_Sheet.csv"
$allPersonas | Export-Csv -Path $csvPath -NoTypeInformation -Encoding UTF8
Write-Host "✅ SUCCESS! CSV generated at: $csvPath"
Write-Host "Total Personas Exported: $($allPersonas.Count)"
