# 🚀 Como Enviar para o GitHub - Passo a Passo

## ✅ Já Feito
- [x] Repositório Git criado
- [x] 2 commits realizados (47 arquivos)

---

## 📋 Passos Rápidos

### 1️⃣ Criar Repositório no GitHub

**Acesse:** https://github.com/new

**Configure:**
- **Nome:** `monteiro-grill-nextjs`
- **Descrição:** `Site do Restaurante Monteiro Grill em Next.js 15 + TypeScript`
- **Visibilidade:** Público ✅ (ou Privado)
- **NÃO marque** "Add a README file" ❌
- **NÃO marque** "Add .gitignore" ❌

Clique em **"Create repository"**

---

### 2️⃣ Conectar e Enviar

Copie e execute **UM DOS COMANDOS** abaixo no terminal:

#### 🅰️ Opção A - Via HTTPS (Mais fácil)
```powershell
# Substitua SEU_USUARIO pelo seu username do GitHub
git remote add origin https://github.com/SEU_USUARIO/monteiro-grill-nextjs.git
git branch -M main
git push -u origin main
```

#### 🅱️ Opção B - Via SSH (Mais seguro)
```powershell
# Precisa ter SSH configurada
git remote add origin git@github.com:SEU_USUARIO/monteiro-grill-nextjs.git
git branch -M main
git push -u origin main
```

#### 🅲️ Opção C - Usar Script Automático
```powershell
# 1. Edite o arquivo setup-github.ps1
# 2. Substitua 'SEU_USUARIO' pelo seu username
# 3. Execute:
.\setup-github.ps1
git push -u origin main
```

---

## 🔑 Autenticação

### Primeira vez fazendo push?

Você verá uma janela para fazer login. Escolha:
- **Token** (Recomendado)
- **Browser** (Mais fácil)

### Criar Personal Access Token (PAT)

1. Vá em: https://github.com/settings/tokens
2. Clique em **"Generate new token (classic)"**
3. Nome: `monteiro-grill-dev`
4. Marque: **`repo`** (todos os sub-itens)
5. Clique em **"Generate token"**
6. **COPIE O TOKEN** (você não verá novamente!)
7. Use como senha ao fazer push

---

## ✅ Verificação

Após o push, verifique:
```powershell
git remote -v
git branch
```

Deve mostrar:
```
origin  https://github.com/SEU_USUARIO/monteiro-grill-nextjs.git (fetch)
origin  https://github.com/SEU_USUARIO/monteiro-grill-nextjs.git (push)
* main
```

---

## 🌐 Acessar no GitHub

Depois do push:
```
https://github.com/SEU_USUARIO/monteiro-grill-nextjs
```

---

## 🚀 Deploy Automático (Vercel)

### Depois de enviar para GitHub:

1. Acesse: https://vercel.com/new
2. Conecte sua conta GitHub
3. Selecione o repositório `monteiro-grill-nextjs`
4. Adicione as variáveis de ambiente:
   ```
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=n4WP7IxIyIBHFfWLn
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=default_service
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xrev5ps
   ```
5. Clique em **"Deploy"**
6. ✅ Pronto! Seu site estará online em ~2 minutos

---

## 📝 Próximos Commits

Sempre que fizer mudanças:
```powershell
git add .
git commit -m "feat: descrição da mudança"
git push
```

---

## 🆘 Problemas?

### "remote origin already exists"
```powershell
git remote remove origin
# Execute novamente o comando de adicionar remote
```

### "Updates were rejected"
```powershell
git pull origin main --rebase
git push
```

### "Permission denied"
- Verifique seu token/senha
- Confirme que o repositório existe no GitHub
- Verifique se o username está correto

---

## 📞 Exemplo Completo

```powershell
# 1. Criar repo no GitHub (via browser)
# https://github.com/new

# 2. No terminal (substitua 'emerson-sabino' pelo seu user):
git remote add origin https://github.com/emerson-sabino/monteiro-grill-nextjs.git
git branch -M main
git push -u origin main

# 3. Digite seu token quando solicitado

# 4. ✅ Pronto! Acesse:
# https://github.com/emerson-sabino/monteiro-grill-nextjs
```

---

**Status:** ✅ Repositório local pronto para enviar ao GitHub!

**47 arquivos** prontos para upload incluindo:
- 5 componentes React
- Documentação completa
- 22 imagens otimizadas
- Configurações TypeScript e Next.js
