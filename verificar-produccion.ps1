$domain = Read-Host "Ingresa tu dominio de producción (ej: moviliax.vercel.app)"

Write-Host "`n🔍 Verificando producción en https://$domain..." -ForegroundColor Cyan
Write-Host ""

# Páginas (GET)
$pages = @{
    "Página principal" = "/"
    "Registro" = "/registro"
    "Login" = "/login"
    "Dashboard" = "/dashboard"
    "Contacto" = "/contacto"
}

Write-Host "📄 PÁGINAS:" -ForegroundColor Yellow
foreach ($page in $pages.Keys) {
    try {
        $response = Invoke-WebRequest -Uri "https://$domain$($pages[$page])" -UseBasicParsing -TimeoutSec 10
        if ($response.StatusCode -eq 200 -or $response.StatusCode -eq 307 -or $response.StatusCode -eq 308) {
            Write-Host "   ✅ $page" -ForegroundColor Green
        } else {
            Write-Host "   ⚠️  $page - Status: $($response.StatusCode)" -ForegroundColor Yellow
        }
    } catch {
        Write-Host "   ❌ $page" -ForegroundColor Red
    }
    Start-Sleep -Milliseconds 300
}

# APIs (POST)
Write-Host "`n🔌 APIs:" -ForegroundColor Yellow

# Test API Registro
Write-Host "   Registro..." -NoNewline
try {
    $body = @{
        email = "verify$(Get-Random)@test.com"
        password = "Test123!"
        nombre = "Test"
        aceptaTerminos = $true
    } | ConvertTo-Json
    
    $response = Invoke-RestMethod -Uri "https://$domain/api/registro" `
        -Method POST `
        -ContentType "application/json" `
        -Body $body `
        -TimeoutSec 10
    
    if ($response.success) {
        Write-Host " ✅" -ForegroundColor Green
    } else {
        Write-Host " ❌" -ForegroundColor Red
    }
} catch {
    Write-Host " ❌" -ForegroundColor Red
}

# Test API Contacto
Write-Host "   Contacto..." -NoNewline
try {
    $body = @{
        nombre = "Test"
        email = "test@test.com"
        mensaje = "Test"
        asunto = "general"
    } | ConvertTo-Json
    
    $response = Invoke-RestMethod -Uri "https://$domain/api/contacto" `
        -Method POST `
        -ContentType "application/json" `
        -Body $body `
        -TimeoutSec 10
    
    if ($response.success) {
        Write-Host " ✅" -ForegroundColor Green
    } else {
        Write-Host " ❌" -ForegroundColor Red
    }
} catch {
    Write-Host " ❌" -ForegroundColor Red
}

# Test API Auth
Write-Host "   NextAuth..." -NoNewline
try {
    $response = Invoke-WebRequest -Uri "https://$domain/api/auth/signin" -UseBasicParsing -TimeoutSec 10
    if ($response.StatusCode -eq 200) {
        Write-Host " ✅" -ForegroundColor Green
    } else {
        Write-Host " ⚠️" -ForegroundColor Yellow
    }
} catch {
    Write-Host " ❌" -ForegroundColor Red
}

Write-Host "`n✅ Verificación completada" -ForegroundColor Green
Write-Host ""
