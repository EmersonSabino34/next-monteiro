# Monteiro Grill - Next.js

Site de restaurante convertido para Next.js 15 com TypeScript e App Router.

## 🚀 Estrutura do Projeto

```
next-tokio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página inicial
│   │   └── globals.css         # Estilos globais
│   └── components/
│       ├── Header/             # Cabeçalho com menu
│       ├── Footer/             # Rodapé
│       ├── Hero/               # Seção hero
│       ├── MenuCard/           # Card de menu
│       └── ReservationForm/    # Formulário de reserva
├── public/
│   └── img/                    # Imagens do site
├── package.json
├── tsconfig.json
├── next.config.js
└── .env.local                  # Variáveis de ambiente
```

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
Edite o arquivo `.env.local` com suas credenciais do EmailJS:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_chave_aqui
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
```

## 🏃‍♂️ Executar o Projeto

### Modo de desenvolvimento:
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de produção:
```bash
npm run build
npm start
```

## 🎨 Principais Features

- ✅ **Next.js 15** com App Router
- ✅ **TypeScript** para type safety
- ✅ **CSS Modules** para estilos isolados
- ✅ **Next/Image** para otimização de imagens
- ✅ **EmailJS** integrado para formulário de reservas
- ✅ **Responsive Design** - Mobile first
- ✅ **Google Fonts** (Poppins & Playfair Display)
- ✅ **SEO otimizado** com metadata

## 📱 Componentes

### Header
- Menu desktop e mobile
- Navigation responsiva
- Logo otimizado

### Hero
- Background image otimizada
- Texto centralizado
- Gradiente overlay

### MenuCard
- Grid responsivo
- Hover effects
- Next/Image otimizado

### ReservationForm
- Validação de formulário
- Integração EmailJS
- Loading states

## 🔧 Tecnologias

- Next.js 15
- React 18
- TypeScript 5
- CSS Modules
- EmailJS
- Bootstrap Icons
- Font Awesome

## 📝 Conversão do Projeto Original

O projeto foi totalmente convertido de HTML/CSS/JS puro para:
- Componentes React reutilizáveis
- TypeScript para type safety
- Next.js para SSR e otimizações
- CSS Modules para estilos isolados
- Next/Image para imagens otimizadas

## 🌐 Deploy

Para fazer deploy na Vercel:

```bash
npm install -g vercel
vercel
```

Ou conecte o repositório diretamente no dashboard da Vercel.

## 📄 Licença

Projeto criado para Monteiro Grill Restaurant.
