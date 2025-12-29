# Comandos Úteis

## Desenvolvimento
```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Servidor inicia em: http://localhost:3000
```

## Build e Produção
```bash
# Criar build de produção
npm run build

# Iniciar servidor de produção (após build)
npm start

# Verificar erros de lint
npm run lint
```

## Estrutura de Pastas

### `/src/app`
- Arquivos principais da aplicação
- `layout.tsx` - Layout compartilhado
- `page.tsx` - Página inicial
- `globals.css` - Estilos globais

### `/src/components`
Componentes reutilizáveis:
- `Header/` - Cabeçalho com navegação
- `Footer/` - Rodapé
- `Hero/` - Seção hero da landing page
- `MenuCard/` - Cards para itens do menu
- `ReservationForm/` - Formulário de reservas

### `/public`
- `img/` - Todas as imagens do site
- Arquivos estáticos acessíveis diretamente

## Personalização

### Cores (globals.css)
```css
--primary: #9A3412;      /* Marrom principal */
--secondary: #F97316;    /* Laranja */
--accent: #F4A261;       /* Bege */
--dark: #2C1810;         /* Escuro */
--light: #FAF9F9;        /* Claro */
--gray: #6B7280;         /* Cinza */
```

### Fontes
- **Títulos**: Playfair Display
- **Corpo**: Poppins

### EmailJS
Configurar em `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_chave
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_servico
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template
```

## Adicionar Novos Itens ao Menu

Edite `src/app/page.tsx`:
```typescript
const menuItems = [
  {
    image: '/img/seu-prato.jpg',
    title: 'Nome do Prato',
    description: 'Descrição do prato',
    price: '00,00€',
  },
  // ... adicione mais itens
];
```

## Deploy na Vercel

### Via CLI
```bash
npm install -g vercel
vercel login
vercel
```

### Via Dashboard
1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure as variáveis de ambiente
4. Deploy automático!

## Dicas de Performance

1. **Imagens**: Sempre use Next/Image para otimização automática
2. **CSS**: Use CSS Modules para evitar conflitos
3. **Componentes**: Mantenha componentes pequenos e reutilizáveis
4. **'use client'**: Adicione apenas quando necessário (useState, useEffect, etc)

## Troubleshooting

### Erro de compilação
```bash
# Limpar cache
rm -rf .next
npm run dev
```

### Imagens não aparecem
- Verifique se estão em `/public/img/`
- Use caminhos relativos: `/img/nome.jpg`

### Erro no EmailJS
- Verifique `.env.local`
- Confirme credenciais no dashboard EmailJS
- Teste o template no dashboard
