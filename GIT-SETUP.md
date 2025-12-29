# 🚀 Git Setup - Monteiro Grill Next.js

## ✅ Commit Inicial Feito!

```
✅ Repositório Git inicializado
✅ 46 arquivos adicionados
✅ Commit inicial criado: "Initial commit: Migração completa de HTML para Next.js 15 com TypeScript"
```

---

## 📦 Criar Repositório no GitHub

### Opção 1: Via GitHub CLI (gh)

#### 1. Instalar GitHub CLI (se não tiver)
```powershell
winget install --id GitHub.cli
```

#### 2. Fazer login
```powershell
gh auth login
```

#### 3. Criar repositório
```powershell
gh repo create monteiro-grill-nextjs --public --source=. --remote=origin --push
```

---

### Opção 2: Via GitHub Website (Manual)

#### 1. Criar repositório no GitHub
1. Acesse: https://github.com/new
2. Nome: `monteiro-grill-nextjs`
3. Descrição: `Restaurante Monteiro Grill - Site em Next.js 15 com TypeScript`
4. Público ou Privado (sua escolha)
5. **NÃO** marque "Add a README file"
6. Clique em "Create repository"

#### 2. Conectar repositório local
```powershell
# Substitua SEU_USUARIO pelo seu username do GitHub
git remote add origin https://github.com/SEU_USUARIO/monteiro-grill-nextjs.git
git branch -M main
git push -u origin main
```

---

## 📝 Comandos Git Úteis

### Verificar status
```powershell
git status
```

### Ver histórico de commits
```powershell
git log --oneline
```

### Fazer novos commits
```powershell
# Adicionar arquivos modificados
git add .

# Criar commit
git commit -m "descrição das mudanças"

# Enviar para GitHub
git push
```

### Criar nova branch
```powershell
git checkout -b feature/nova-funcionalidade
```

---

## 🔐 Autenticação GitHub

### Via HTTPS (Recomendado)
```powershell
# Usar Personal Access Token (PAT)
# 1. Vá em: https://github.com/settings/tokens
# 2. Generate new token (classic)
# 3. Selecione 'repo' scope
# 4. Use o token como senha ao fazer push
```

### Via SSH
```powershell
# 1. Gerar chave SSH
ssh-keygen -t ed25519 -C "seu@email.com"

# 2. Adicionar ao ssh-agent
Start-Service ssh-agent
ssh-add ~/.ssh/id_ed25519

# 3. Copiar chave pública
Get-Content ~/.ssh/id_ed25519.pub | clip

# 4. Adicionar em: https://github.com/settings/keys

# 5. Mudar remote para SSH
git remote set-url origin git@github.com:SEU_USUARIO/monteiro-grill-nextjs.git
```

---

## 📋 Exemplo Completo

```powershell
# 1. Já feito - Inicializar Git
git init

# 2. Já feito - Primeiro commit
git add .
git commit -m "🎉 Initial commit"

# 3. Conectar ao GitHub (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/monteiro-grill-nextjs.git

# 4. Renomear branch para main
git branch -M main

# 5. Enviar para GitHub
git push -u origin main
```

---

## 🌿 Sugestão de Branches

```
main (produção)
├── develop (desenvolvimento)
├── feature/nova-funcionalidade
├── fix/corrigir-bug
└── hotfix/correcao-urgente
```

### Criar branch de desenvolvimento
```powershell
git checkout -b develop
git push -u origin develop
```

---

## 📄 .gitignore (Já configurado)

O arquivo `.gitignore` já está configurado para ignorar:
- ✅ node_modules/
- ✅ .next/
- ✅ .env*.local
- ✅ build/
- ✅ Arquivos temporários

---

## 🚀 Deploy Automático (Vercel)

### Via GitHub
1. Acesse: https://vercel.com/new
2. Conecte sua conta GitHub
3. Selecione o repositório `monteiro-grill-nextjs`
4. Configure variáveis de ambiente:
   ```
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
   ```
5. Deploy automático a cada push na main!

---

## 📊 Estrutura de Commits Sugerida

### Tipos de commit:
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Manutenção

### Exemplos:
```powershell
git commit -m "feat: Adicionar página de contato"
git commit -m "fix: Corrigir menu mobile"
git commit -m "docs: Atualizar README"
git commit -m "style: Ajustar cores do tema"
```

---

## 🔄 Workflow Recomendado

### Para nova funcionalidade:
```powershell
# 1. Criar branch
git checkout -b feature/galeria-fotos

# 2. Fazer mudanças e commits
git add .
git commit -m "feat: Adicionar componente de galeria"

# 3. Enviar para GitHub
git push -u origin feature/galeria-fotos

# 4. Criar Pull Request no GitHub
# 5. Fazer merge depois de revisão
```

---

## 🆘 Problemas Comuns

### Erro: "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/SEU_USUARIO/monteiro-grill-nextjs.git
```

### Erro: "Updates were rejected"
```powershell
git pull origin main --rebase
git push
```

### Desfazer último commit (local)
```powershell
git reset --soft HEAD~1
```

### Ver arquivos ignorados
```powershell
git status --ignored
```

---

## ✅ Checklist Final

- [x] Git inicializado
- [x] Commit inicial feito (46 arquivos)
- [x] .gitignore configurado
- [ ] Criar repositório no GitHub
- [ ] Conectar remote origin
- [ ] Push inicial para GitHub
- [ ] Configurar deploy na Vercel (opcional)

---

## 🎯 Próximos Passos

1. **Criar repositório no GitHub** (escolha Opção 1 ou 2 acima)
2. **Push inicial**
3. **Configurar deploy automático na Vercel**
4. **Adicionar badge no README:**
   ```markdown
   ![Deploy](https://img.shields.io/github/deployments/SEU_USUARIO/monteiro-grill-nextjs/production?label=vercel&logo=vercel)
   ```

---

## 📚 Recursos

- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet.pdf)
- [Vercel Deployment](https://vercel.com/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Status atual:** ✅ Pronto para ser enviado ao GitHub!

Escolha uma das opções acima para criar e conectar seu repositório.
