# probar-registro-completo.ps1
Write-Host "=== Probando registro con todos los campos ===" -ForegroundColor Cyan
Write-Host ""

$randomNum = Get-Random
$body = @{
    email = "usuario.completo$randomNum@ejemplo.com"
    password = "Password123!"
    confirmarPassword = "Password123!"
    nombre = "Juan"
    apellido = "Pérez"
    empresa = "MOVILIAX"
    cargo = "Director de Innovación"
    pais = "México"
    linkedin = "https://linkedin.com/in/juanperez"
    areasInteres = @("Electromovilidad", "Logística Inteligente", "Deep Tech")
    aceptaTerminos = $true
    suscritoNewsletter = $true
} | ConvertTo-Json

Write-Host "Enviando datos de registro..." -ForegroundColor Yellow

try {
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/registro" `
        -Method POST `
        -ContentType "application/json" `
        -Body $body
    
    if ($response.success) {
        Write-Host "`n✅ Registro exitoso" -ForegroundColor Green
        Write-Host "`nUsuario creado:" -ForegroundColor Yellow
        Write-Host "  ID: $($response.user.id)" -ForegroundColor Cyan
        Write-Host "  Email: $($response.user.email)" -ForegroundColor Cyan
        Write-Host "  Nombre: $($response.user.nombre)" -ForegroundColor Cyan
    } else {
        Write-Host "`n❌ Registro falló" -ForegroundColor Red
        Write-Host "$($response | ConvertTo-Json)" -ForegroundColor Gray
    }
} catch {
    Write-Host "`n❌ Error en registro" -ForegroundColor Red
    if ($_.ErrorDetails.Message) {
        $errorObj = $_.ErrorDetails.Message | ConvertFrom-Json
        Write-Host "  Error: $($errorObj.error)" -ForegroundColor Yellow
    } else {
        Write-Host "  $($_.Exception.Message)" -ForegroundColor Gray
    }
}