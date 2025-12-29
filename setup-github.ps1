# Script para conectar ao GitHub
# Execute este script após criar o repositório no GitHub

# IMPORTANTE: Substitua 'SEU_USUARIO' pelo seu username do GitHub
$githubUsername = "SEU_USUARIO"
$repoName = "monteiro-grill-nextjs"

Write-Host "================================" -ForegroundColor Cyan
Write-Host "  GitHub Setup - Next.js App" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se já existe remote
$remoteExists = git remote | Select-String -Pattern "origin"

if ($remoteExists) {
    Write-Host "⚠️  Remote 'origin' já existe!" -ForegroundColor Yellow
    Write-Host "Removendo remote existente..." -ForegroundColor Yellow
    git remote remove origin
}

# Adicionar remote
Write-Host "📡 Adicionando remote origin..." -ForegroundColor Green
git remote add origin "https://github.com/$githubUsername/$repoName.git"

# Renomear branch para main
Write-Host "🌿 Renomeando branch para 'main'..." -ForegroundColor Green
git branch -M main

# Mostrar status
Write-Host ""
Write-Host "✅ Configuração concluída!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Remote configurado:" -ForegroundColor Cyan
git remote -v

Write-Host ""
Write-Host "🚀 Próximo passo: Fazer push para GitHub" -ForegroundColor Yellow
Write-Host ""
Write-Host "Execute:" -ForegroundColor White
Write-Host "  git push -u origin main" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  Você precisará fazer login no GitHub (via browser ou token)" -ForegroundColor Yellow
Write-Host ""
