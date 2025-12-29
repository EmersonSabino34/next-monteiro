# ⚡ Quick Start - Monteiro Grill Next.js

## 🚀 Início Rápido (3 passos)

### 1️⃣ Instalar Dependências
```bash
cd c:\Emerson-Sabino\next-tokio
npm install
```

### 2️⃣ Configurar EmailJS (Opcional)
Edite `.env.local` com suas credenciais:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_chave_aqui
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template
```

### 3️⃣ Iniciar Servidor
```bash
npm run dev
```

**✅ Pronto! Acesse:** http://localhost:3000

---

## 📝 Comandos Essenciais

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm start` | Inicia servidor de produção |
| `npm run lint` | Verifica erros de código |

---

## 🎯 Atalhos Importantes

### Adicionar Novo Item ao Menu
**Arquivo:** `src/app/page.tsx`
```typescript
const menuItems = [
  {
    image: '/img/seu-prato.jpg',
    title: 'Nome do Prato',
    description: 'Descrição aqui',
    price: '00,00€',
  },
  // Adicione aqui ↑
];
```

### Mudar Cores
**Arquivo:** `src/app/globals.css`
```css
:root {
  --primary: #9A3412;     /* Cor principal */
  --secondary: #F97316;   /* Cor secundária */
  /* Altere aqui ↑ */
}
```

### Adicionar Seção Nova
**Arquivo:** `src/app/page.tsx`
```tsx
<section id="nova-secao" className="section container">
  <h1>Nova Seção</h1>
  <div className="cards">
    {/* Seu conteúdo */}
  </div>
</section>
```

---

## 🐛 Resolver Problemas

### Erro: Port 3000 ocupado
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <número> /F

# Ou use outra porta:
npm run dev -- -p 3001
```

### Erro: Imagens não aparecem
1. Verifique se estão em `/public/img/`
2. Use path: `/img/nome.jpg` (não `./img/`)
3. Limpe cache: `Remove-Item -Recurse -Force .next`

### Erro: Module not found
```bash
rm -rf node_modules
npm install
```

---

## 📚 Documentação Completa

- 📖 [README.md](README.md) - Visão geral
- 📘 [GUIA.md](GUIA.md) - Guia detalhado
- 📙 [MIGRACAO.md](MIGRACAO.md) - Detalhes da migração
- 📗 [ESTRUTURA.md](ESTRUTURA.md) - Estrutura completa

---

## ✅ Checklist de Deploy

- [ ] `npm run build` sem erros
- [ ] Todas as imagens em `/public/img/`
- [ ] Variáveis `.env.local` configuradas
- [ ] Teste em http://localhost:3000
- [ ] Deploy na Vercel/Netlify

---

## 🆘 Suporte Rápido

**Erro de compilação?**
```bash
Remove-Item -Recurse -Force .next
npm run dev
```

**EmailJS não funciona?**
- Verifique `.env.local`
- Confirme credenciais em emailjs.com
- Reinicie servidor após mudar .env

**Layout quebrado?**
- Limpe cache do navegador (Ctrl+Shift+R)
- Verifique console do navegador (F12)

---

## 🎉 Status do Projeto

✅ **FUNCIONANDO PERFEITAMENTE**

- Servidor: http://localhost:3000
- Build: OK
- TypeScript: OK
- Componentes: OK
- Imagens: OK
- Formulário: OK

---

**Boa sorte com seu projeto! 🚀**
