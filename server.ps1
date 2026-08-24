$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
try {
    $listener.Start()
    Write-Host "Server running at http://localhost:8080/"
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/") { $urlPath = "/demo.html" }
        # Clean query strings if any
        if ($urlPath.Contains("?")) {
            $urlPath = $urlPath.Split("?")[0]
        }
        $filePath = Join-Path "c:\Users\harsh\OneDrive\Desktop\New folder" $urlPath.TrimStart('/')
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $ext = [System.IO.Path]::GetExtension($filePath)
            if ($ext -eq ".html") { $response.ContentType = "text/html" }
            elseif ($ext -eq ".png") { $response.ContentType = "image/png" }
            elseif ($ext -eq ".css") { $response.ContentType = "text/css" }
            elseif ($ext -eq ".js") { $response.ContentType = "application/javascript" }
            
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("File Not Found")
            $response.ContentLength64 = $errBytes.Length
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.OutputStream.Close()
    }
} finally {
    $listener.Close()
}
