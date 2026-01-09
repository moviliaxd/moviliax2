$domain = "moviliax.lat"
Write-Host "🔍 DIAGNÓSTICO COMPLETO DE API REGISTRO" -ForegroundColor Cyan
Write-Host "Dominio: https://$domain" -ForegroundColor Gray
Write-Host ""

# Test 1: Verificar que el endpoint existe
Write-Host "Test 1: Verificando endpoint..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "https://$domain/api/registro" -Method OPTIONS -UseBasicParsing -TimeoutSec 10
    Write-Host "  ✅ Endpoint existe" -ForegroundColor Green
} catch {
    if ($_.Exception.Response.StatusCode.value__ -eq 405) {
        Write-Host "  ✅ Endpoint existe (405 es esperado para OPTIONS)" -ForegroundColor Green
    } else {
        Write-Host "  ❌ Status: $($_.Exception.Response.StatusCode.value__)" -ForegroundColor Red
    }
}

# Test 2: POST sin datos
Write-Host "`nTest 2: POST sin datos..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "https://$domain/api/registro" -Method POST -UseBasicParsing -TimeoutSec 10
    Write-Host "  ⚠️  Respuesta: $($response.StatusCode)" -ForegroundColor Yellow
} catch {
    Write-Host "  Esperado - Status: $($_.Exception.Response.StatusCode.value__)" -ForegroundColor Gray
}

# Test 3: POST con datos válidos
Write-Host "`nTest 3: POST con datos válidos..." -ForegroundColor Yellow
$body = @{
    email = "diagnostico@test.com"
    password = "Test123!"
    nombre = "Test"
    aceptaTerminos = $true
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "https://$domain/api/registro" `
        -Method POST `
        -ContentType "application/json" `
        -Body $body
    
    Write-Host "  ✅ FUNCIONA!" -ForegroundColor Green
    Write-Host "  Respuesta: $($response | ConvertTo-Json)" -ForegroundColor Gray
} catch {
    Write-Host "  ❌ ERROR DETECTADO" -ForegroundColor Red
    Write-Host "  Status Code: $($_.Exception.Response.StatusCode.value__)" -ForegroundColor Red
    
    if ($_.ErrorDetails.Message) {
        try {
            $errorObj = $_.ErrorDetails.Message | ConvertFrom-Json
            Write-Host "  Error: $($errorObj.error)" -ForegroundColor Yellow
        } catch {
            Write-Host "  Mensaje: $($_.ErrorDetails.Message)" -ForegroundColor Yellow
        }
    }
}

# Test 4: Verificar otras APIs
Write-Host "`nTest 4: Verificando otras APIs..." -ForegroundColor Yellow

$contactBody = @{
    nombre = "Test"
    email = "test@test.com"
    mensaje = "Test"
    asunto = "general"
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "https://$domain/api/contacto" `
        -Method POST `
        -ContentType "application/json" `
        -Body $contactBody
    Write-Host "  ✅ /api/contacto funciona" -ForegroundColor Green
} catch {
    Write-Host "  ❌ /api/contacto tiene error" -ForegroundColor Red
}

Write-Host "`n═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "CONCLUSIÓN:" -ForegroundColor Cyan
Write-Host "Si /api/contacto funciona pero /api/registro no," -ForegroundColor Yellow
Write-Host "probablemente sea un problema con:" -ForegroundColor Yellow
Write-Host "  1. Variables de entorno de Supabase" -ForegroundColor White
Write-Host "  2. Función crearUsuario() en lib/db/usuarios.ts" -ForegroundColor White
Write-Host "  3. Políticas RLS en la tabla usuarios" -ForegroundColor White
