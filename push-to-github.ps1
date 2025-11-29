# PowerShell script to push code to GitHub
# Run this script: .\push-to-github.ps1

Write-Host "Checking for Git..." -ForegroundColor Yellow

# Try to find git
$gitPath = $null
try {
    $gitPath = Get-Command git -ErrorAction Stop | Select-Object -ExpandProperty Source
    Write-Host "Git found at: $gitPath" -ForegroundColor Green
} catch {
    Write-Host "Git not found in PATH. Checking common locations..." -ForegroundColor Yellow
    
    $commonPaths = @(
        "C:\Program Files\Git\bin\git.exe",
        "C:\Program Files (x86)\Git\bin\git.exe",
        "$env:LOCALAPPDATA\Programs\Git\bin\git.exe",
        "$env:ProgramFiles\Git\cmd\git.exe"
    )
    
    foreach ($path in $commonPaths) {
        if (Test-Path $path) {
            $gitPath = $path
            $env:PATH += ";$(Split-Path $path -Parent)"
            Write-Host "Git found at: $path" -ForegroundColor Green
            break
        }
    }
    
    if (-not $gitPath) {
        Write-Host "`nERROR: Git is not installed or not in PATH." -ForegroundColor Red
        Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
        Write-Host "Or use GitHub Desktop: https://desktop.github.com/" -ForegroundColor Yellow
        exit 1
    }
}

Write-Host "`nInitializing Git repository..." -ForegroundColor Cyan
& git init
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to initialize git repository" -ForegroundColor Red
    exit 1
}

Write-Host "Adding remote repository..." -ForegroundColor Cyan
& git remote remove origin 2>$null
& git remote add origin https://github.com/tharunjacob/Test_RazorPay.git
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to add remote" -ForegroundColor Red
    exit 1
}

Write-Host "Adding all files..." -ForegroundColor Cyan
& git add .
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to add files" -ForegroundColor Red
    exit 1
}

Write-Host "Committing changes..." -ForegroundColor Cyan
& git commit -m "Initial commit: TrackSpendz app ready for Vercel deployment"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Note: No changes to commit or commit failed" -ForegroundColor Yellow
}

Write-Host "Setting branch to main..." -ForegroundColor Cyan
& git branch -M main

Write-Host "`nPushing to GitHub..." -ForegroundColor Cyan
Write-Host "You may be prompted for your GitHub credentials." -ForegroundColor Yellow
& git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "Repository: https://github.com/tharunjacob/Test_RazorPay" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ Push failed. You may need to:" -ForegroundColor Red
    Write-Host "1. Authenticate with GitHub (use Personal Access Token)" -ForegroundColor Yellow
    Write-Host "2. Or pull first if repository has existing content:" -ForegroundColor Yellow
    Write-Host "   git pull origin main --allow-unrelated-histories" -ForegroundColor Gray
}


