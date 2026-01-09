Write-Host "=== Verificando tabla usuarios en Supabase ===" -ForegroundColor Cyan
Write-Host ""

# Obtener informaciÃ³n de .env.local
$env = Get-Content .env.local -Raw
$url = if ($env -match "NEXT_PUBLIC_SUPABASE_URL\s*=\s*([^\r\n]+)") { $matches[1] } else { "" }
$key = if ($env -match "SUPABASE_SERVICE_ROLE_KEY\s*=\s*([^\r\n]+)") { $matches[1] } else { "" }

if (-not $url -or -not $key) {
    Write-Host "âŒ No se encontraron las credenciales de Supabase en .env.local" -ForegroundColor Red
    exit
}

Write-Host "URL: $url" -ForegroundColor Gray
Write-Host ""

# Hacer query a la tabla usuarios para ver estructura
try {
    $headers = @{
        "apikey" = $key
        "Authorization" = "Bearer $key"
        "Content-Type" = "application/json"
    }
    
    # Intentar obtener un usuario (lÃ­mite 1 para ver columnas)
    $response = Invoke-RestMethod -Uri "$url/rest/v1/usuarios?limit=1" `
        -Headers $headers `
        -Method GET
    
    Write-Host "âœ… ConexiÃ³n exitosa a Supabase" -ForegroundColor Green
    
    if ($response.Count -gt 0) {
        Write-Host "`nColumnas disponibles en la tabla:" -ForegroundColor Yellow
        $response[0].PSObject.Properties.Name | ForEach-Object {
            Write-Host "   - $_" -ForegroundColor Cyan
        }
    } else {
        Write-Host "`nâš ï¸  La tabla estÃ¡ vacÃ­a (todavÃ­a no hay usuarios)" -ForegroundColor Yellow
        Write-Host "   Las columnas se verÃ¡n cuando se registre el primer usuario" -ForegroundColor Gray
    }
    
} catch {
    Write-Host "âŒ Error al conectar con Supabase:" -ForegroundColor Red
    Write-Host "   $($_.Exception.Message)" -ForegroundColor Gray
    
    if ($_.ErrorDetails.Message) {
        Write-Host "`nDetalles:" -ForegroundColor Yellow
        $_.ErrorDetails.Message
    }
}
