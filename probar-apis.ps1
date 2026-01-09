# probar-apis.ps1
Write-Host "=== Probando APIs de MOVILIAX ===" -ForegroundColor Cyan
Write-Host ""

# 1. Probar Registro
Write-Host "1. Probando POST /api/registro..." -ForegroundColor Yellow
$registroBody = @{
    email = "test$(Get-Random)@ejemplo.com"
    password = "Password123!"
    nombre = "Usuario Test"
    empresa = "Test Corp"
    pais = "México"
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/registro" `
        -Method POST `
        -ContentType "application/json" `
        -Body $registroBody
    
    if ($response.success) {
        Write-Host "   ✅ Registro exitoso" -ForegroundColor Green
        Write-Host "   Usuario: $($registroBody | ConvertFrom-Json | Select-Object -ExpandProperty email)" -ForegroundColor Gray
    } else {
        Write-Host "   ❌ Registro falló" -ForegroundColor Red
        Write-Host "   $response" -ForegroundColor Gray
    }
} catch {
    Write-Host "   ❌ Error en registro" -ForegroundColor Red
    Write-Host "   $($_.Exception.Message)" -ForegroundColor Gray
}

# 2. Probar API de Admin (debe fallar sin auth)
Write-Host "`n2. Probando GET /api/admin/usuarios (sin auth)..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/admin/usuarios"
    Write-Host "   ⚠️  API accesible sin autenticación (problema)" -ForegroundColor Yellow
} catch {
    if ($_.Exception.Response.StatusCode -eq 401) {
        Write-Host "   ✅ API protegida correctamente (401)" -ForegroundColor Green
    } else {
        Write-Host "   ❌ Error inesperado" -ForegroundColor Red
        Write-Host "   $($_.Exception.Message)" -ForegroundColor Gray
    }
}

# 3. Probar Contacto
Write-Host "`n3. Probando POST /api/contacto..." -ForegroundColor Yellow
$contactoBody = @{
    nombre = "Test Usuario"
    email = "test@ejemplo.com"
    empresa = "Test Corp"
    asunto = "general"
    mensaje = "Este es un mensaje de prueba"
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/contacto" `
        -Method POST `
        -ContentType "application/json" `
        -Body $contactoBody
    
    if ($response.success) {
        Write-Host "   ✅ Contacto enviado exitosamente" -ForegroundColor Green
    } else {
        Write-Host "   ❌ Contacto falló" -ForegroundColor Red
    }
} catch {
    Write-Host "   ❌ Error en contacto" -ForegroundColor Red
    Write-Host "   $($_.Exception.Message)" -ForegroundColor Gray
}

Write-Host "`n=== Pruebas completadas ===" -ForegroundColor Cyan
Write-Host "`nAhora prueba manualmente:" -ForegroundColor Yellow
Write-Host "1. Abre: http://localhost:3000/login"
Write-Host "2. Usa las credenciales del usuario que acabas de crear"
Write-Host "3. Deberías ser redirigido a /dashboard"