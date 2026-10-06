# Renders art/portrait.txt (one char per pixel) to public/portrait.png.
# Usage: powershell -File art/render.ps1 [-Scale 20]
param([int]$Scale = 20)
Add-Type -AssemblyName System.Drawing

$root = Split-Path $PSScriptRoot -Parent
$rows = Get-Content (Join-Path $PSScriptRoot "portrait.txt") | Where-Object { $_ -ne "" }
$palette = New-Object System.Collections.Hashtable ([StringComparer]::Ordinal)  # case-sensitive keys
@{
  'K' = '#151015'; 'H' = '#262226'; 'hh' = '#453d44'
  'S' = '#fbe2c8'; 'ss' = '#eebf9e'; 'N' = '#e8c3a3'
  'E' = '#7f7a84'; 'W' = '#ffffff'; 'G' = '#4a3f47'
  'M' = '#9c4560'; 'T' = '#f28fae'
  'B' = '#232023'; 'bb' = '#38323a'
}.GetEnumerator() | ForEach-Object { $palette[$_.Key.Substring(0, 1)] = $_.Value }
$w = [int]($rows | ForEach-Object { $_.Length } | Measure-Object -Maximum).Maximum
$h = [int]$rows.Count
foreach ($i in 0..($h - 1)) { if ($rows[$i].Length -ne $w) { Write-Warning "row $i has length $($rows[$i].Length), expected $w" } }

$bmp = [System.Drawing.Bitmap]::new($w * $Scale, $h * $Scale)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = 'NearestNeighbor'
# soft pink checkered background, lighter at the top
for ($y = 0; $y -lt $h; $y++) {
  for ($x = 0; $x -lt $w; $x++) {
    $t = $y / ($h - 1)
    $base = if ((($x + $y) % 2) -eq 0) { 0 } else { 6 }
    $r = 251 - [int](6 * $t) - $base / 2
    $gg = 214 - [int](40 * $t) - $base
    $b = 228 - [int](22 * $t) - $base / 2
    $brush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb($r, $gg, $b))
    $g.FillRectangle($brush, $x * $Scale, $y * $Scale, $Scale, $Scale)
    $brush.Dispose()
  }
}
for ($y = 0; $y -lt $h; $y++) {
  $line = $rows[$y]
  for ($x = 0; $x -lt $line.Length; $x++) {
    $c = [string]$line[$x]
    if (-not $palette.ContainsKey($c)) { continue }
    $brush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml($palette[$c]))
    $g.FillRectangle($brush, $x * $Scale, $y * $Scale, $Scale, $Scale)
    $brush.Dispose()
  }
}
$out = Join-Path $root "public\portrait.png"
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose()
"wrote $out ($($w * $Scale)x$($h * $Scale))"
