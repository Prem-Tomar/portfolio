param([Parameter(Mandatory=$true)][string]$DocxPath, [Parameter(Mandatory=$true)][string]$PdfPath)
$ErrorActionPreference = 'Stop'
$word = $null
$document = $null
try {
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    $word.DisplayAlerts = 0
    $document = $word.Documents.Open($DocxPath, $false, $true)
    $document.Repaginate()
    $pages = $document.ComputeStatistics(2)
    # Preserve text even when a font cannot be embedded; never rasterize resume text.
    $document.ExportAsFixedFormat($PdfPath, 17, $false, 0, 0, 1, 1, 0, $true, $false, 1, $true, $false, $false)
    Write-Output "Exported $pages pages to $PdfPath"
} finally {
    if ($null -ne $document) { $document.Close(0) }
    if ($null -ne $word) { $word.Quit() }
}
