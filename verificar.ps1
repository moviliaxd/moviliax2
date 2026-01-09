# verificar.ps1
Write-Host "=== Verificación MOVILIAX ===" -ForegroundColor Cyan
Write-Host ""

# 1. Verificar archivos críticos
Write-Host "1. Archivos del proyecto:" -ForegroundColor Yellow
$archivos = @(
    "lib\supabase.ts",
    "lib\auth.ts",
    "lib\db\usuarios.ts",
    "lib\db\mensajes.ts",
    "app\api\auth\[...nextauth]\route.ts",
    "app\api\registro\route.ts",
    "app\api\admin\usuarios\route.ts",
    "app\login\page.tsx",
    "app\dashboard\page.tsx"
)

$todosOk = $true
foreach ($archivo in $archivos) {
    if (Test-Path $archivo) {
        Write-Host "   ✅ $archivo" -ForegroundColor Green
    } else {
        Write-Host "   ❌ $archivo FALTA" -ForegroundColor Red
        $todosOk = $false
    }
}

# 2. Verificar .env.local
Write-Host "`n2. Variables de entorno:" -ForegroundColor Yellow
$envVars = @(
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY", 
    "SUPABASE_SERVICE_ROLE_KEY",
    "NEXTAUTH_URL",
    "NEXTAUTH_SECRET",
    "RESEND_API_KEY"
)

if (Test-Path ".env.local") {
    $envContent = Get-Content .env.local -Raw
    foreach ($var in $envVars) {
        if ($envContent -match "$var\s*=\s*.+") {
            Write-Host "   ✅ $var" -ForegroundColor Green
        } else {
            Write-Host "   ❌ $var FALTA o está vacío" -ForegroundColor Red
            $todosOk = $false
        }
    }
} else {
    Write-Host "   ❌ .env.local no existe" -ForegroundColor Red
    $todosOk = $false
}

# 3. Verificar dependencias
Write-Host "`n3. Dependencias npm:" -ForegroundColor Yellow
$deps = @("bcrypt", "next-auth", "@supabase/supabase-js", "resend")
foreach ($dep in $deps) {
    $null = npm list $dep 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "   ✅ $dep instalado" -ForegroundColor Green
    } else {
        Write-Host "   ❌ $dep NO instalado" -ForegroundColor Red
        $todosOk = $false
    }
}

# 4. Verificar servidor
Write-Host "`n4. Servidor:" -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000" -TimeoutSec 3 -UseBasicParsing -ErrorAction Stop
    Write-Host "   ✅ Servidor respondiendo en puerto 3000" -ForegroundColor Green
} catch {
    Write-Host "   ⚠️  Servidor no responde" -ForegroundColor Yellow
    Write-Host "      Asegúrate de ejecutar: npm run dev" -ForegroundColor Gray
}

# Resumen
Write-Host "`n=== RESUMEN ===" -ForegroundColor Cyan
if ($todosOk) {
    Write-Host "✅ Todo configurado correctamente" -ForegroundColor Green
    Write-Host "`nPróximos pasos:" -ForegroundColor Yellow
    Write-Host "1. Asegúrate que el servidor esté corriendo: npm run dev"
    Write-Host "2. Ejecuta: .\probar-apis.ps1"
} else {
    Write-Host "⚠️  Hay problemas que resolver" -ForegroundColor Yellow
    Write-Host "Revisa los ❌ arriba" -ForegroundColor Gray
}