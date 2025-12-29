# ✅ Checklist - Git & GitHub Setup

## 📊 Status Atual

### ✅ COMPLETO - Repositório Local
- [x] Git inicializado
- [x] .gitignore configurado
- [x] 3 commits realizados
- [x] 49 arquivos versionados
- [x] Branch: `master` (será renomeada para `main`)

---

## 🎯 Próximos Passos

### 1️⃣ Criar Repositório no GitHub
- [ ] Acessar https://github.com/new
- [ ] Nome: `monteiro-grill-nextjs`
- [ ] Descrição: "Site do Restaurante Monteiro Grill em Next.js 15 + TypeScript"
- [ ] Visibilidade: Público
- [ ] **NÃO** adicionar README
- [ ] **NÃO** adicionar .gitignore
- [ ] Clicar em "Create repository"

### 2️⃣ Conectar Repositório Local
```powershell
# Substitua SEU_USUARIO pelo seu GitHub username
git remote add origin https://github.com/SEU_USUARIO/monteiro-grill-nextjs.git
git branch -M main
```

### 3️⃣ Primeiro Push
```powershell
git push -u origin main
```
- [ ] Fazer login quando solicitado
- [ ] Aguardar upload (pode levar alguns segundos)
- [ ] Verificar em: `https://github.com/SEU_USUARIO/monteiro-grill-nextjs`

---

## 📦 O que será enviado

### Código Fonte (25 arquivos)
- [x] 5 componentes React (.tsx)
- [x] 5 arquivos CSS Modules
- [x] 3 páginas principais
- [x] Configurações TypeScript
- [x] Configurações Next.js
- [x] package.json

### Imagens (22 arquivos)
- [x] Logo do restaurante
- [x] Fotos dos pratos
- [x] Imagens do cardápio

### Documentação (7 arquivos)
- [x] README.md
- [x] QUICKSTART.md
- [x] GUIA.md
- [x] MIGRACAO.md
- [x] ESTRUTURA.md
- [x] GIT-SETUP.md
- [x] COMO-ENVIAR-GITHUB.md

### Scripts & Configs (3 arquivos)
- [x] setup-github.ps1
- [x] next.config.js
- [x] tsconfig.json

**Total:** 49 arquivos | ~7.500 linhas de código

---

## 🚀 Depois do Push

### Deploy na Vercel (Opcional)
- [ ] Acessar https://vercel.com/new
- [ ] Conectar conta GitHub
- [ ] Selecionar repositório `monteiro-grill-nextjs`
- [ ] Adicionar variáveis de ambiente (.env.local)
- [ ] Clicar em "Deploy"
- [ ] Site online em ~2 minutos!

### Configurações Recomendadas
- [ ] Adicionar descrição do projeto
- [ ] Adicionar topics: `nextjs`, `typescript`, `restaurant`, `website`
- [ ] Configurar GitHub Pages (opcional)
- [ ] Adicionar badge de deploy no README

---

## 📝 Comandos Rápidos

### Ver status
```powershell
git status
git log --oneline
```

### Fazer novos commits
```powershell
git add .
git commit -m "feat: sua mensagem"
git push
```

### Verificar remote
```powershell
git remote -v
```

---

## 🎨 Badges para o README (Opcional)

Depois do deploy, adicione ao README.md:

```markdown
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)
![React](https://img.shields.io/badge/React-18-61dafb?logo=react)
![License](https://img.shields.io/badge/license-MIT-green)
```

---

## 📊 Estrutura de Commits

### Histórico atual:
```
* 8f23a83 docs: Adicionar guias e script para configuração GitHub
* 6d99ff0 docs: Adicionar guia de configuração Git e GitHub
* 7339e7e Initial commit: Migração completa de HTML para Next.js 15 com TypeScript
```

### Tipos de commit recomendados:
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Estilização
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Manutenção

---

## 🔐 Segurança

### Arquivos protegidos (.gitignore):
- ✅ node_modules/
- ✅ .next/
- ✅ .env*.local (suas chaves EmailJS)
- ✅ build/
- ✅ Arquivos de sistema

### Variáveis de ambiente:
Nunca commitar `.env.local`! Use:
- GitHub Secrets (para CI/CD)
- Vercel Environment Variables (para deploy)

---

## 🆘 Resolução de Problemas

### Erro: "remote origin already exists"
```powershell
git remote remove origin
# Depois execute novamente o git remote add
```

### Erro: "failed to push"
```powershell
git pull origin main --rebase
git push
```

### Erro: "Permission denied"
1. Verifique se o repositório foi criado no GitHub
2. Confirme que o username está correto
3. Use um Personal Access Token válido

---

## 📞 Suporte

### Documentação Disponível:
1. **[COMO-ENVIAR-GITHUB.md](COMO-ENVIAR-GITHUB.md)** - Passo a passo visual
2. **[GIT-SETUP.md](GIT-SETUP.md)** - Guia completo Git/GitHub
3. **[QUICKSTART.md](QUICKSTART.md)** - Início rápido do projeto
4. **[README.md](README.md)** - Visão geral

### Script Auxiliar:
- **setup-github.ps1** - Automatiza conexão com GitHub

---

## ✅ Verificação Final

Antes de fazer push, confirme:
- [x] Git inicializado ✅
- [x] Commits realizados ✅
- [x] .gitignore configurado ✅
- [ ] Repositório criado no GitHub
- [ ] Remote adicionado
- [ ] Push realizado

---

## 🎉 Status

**PRONTO PARA GITHUB!** 

Tudo está configurado e funcionando.  
Basta criar o repositório no GitHub e fazer o push!

---

**Última atualização:** 29/12/2025  
**Commits:** 3  
**Arquivos:** 49  
**Tamanho:** ~7.500 linhas
