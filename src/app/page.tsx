import Hero from '@/components/Hero/Hero';
import MenuCard from '@/components/MenuCard/MenuCard';
import ReservationForm from '@/components/ReservationForm/ReservationForm';


export default function Home() {
  const menuItems = [

    {
      image: '/img/picanha.jpg',
      title: 'Picanha Premium',
      description: 'Picanha com arroz branco, vinagrete e farofa crocante.',
      price: '25,00€',
    },
    {
      image: '/img/carbonara.jpg',
      title: 'Espaguete à Carbonara',
      description: 'Carbonara tradicional com bacon crocante e parmesão.',
      price: '22,00€',
    },
    {
      image: '/img/polvo.jpg',
      title: 'Polvo Grelhado',
      description: 'Polvo tenro com legumes salteados e arroz integral.',
      price: '20,00€',
    },
    {
      image: '/img/salmao.jpg',
      title: 'Salmão Grelhado',
      description: 'Salmão com molho de maracujá e legumes.',
      price: '21,50€',
    },
    {
      image: '/img/bacalhau.jpg',
      title: 'Bacalhau à Lagareiro',
      description: 'Com azeite, alho, batata ao murro e brócolis.',
      price: '25,00€',
    },
    {
      image: '/img/feijoada.webp',
      title: 'Feijoada Brasileira',
      description: 'Completa com carnes suínas, arroz, couve, farofa e laranja.',
      price: '22,00€',
    },
    {
      image: '/img/peito de frango.jpg',
      title: 'Frango Grelhado',
      description: 'Peito de frango com legumes e arroz integral.',
      price: '20,00€',
    },
    {
      image: '/img/lasanha.png',
      title: 'Lasanha à Bolonhesa',
      description: 'Camadas de massa, molho bolonhesa e queijo gratinado.',
      price: '21,50€',
    },
  ];
  
  const especialidades = [
    
    {
      image: '/img/picanha.jpg',
      title: 'Picanha Premium',
      description: 'A estrela da casa!',
      price: '25,00€',
    },
    {
      image: '/img/feijoada.webp',
      title: 'Feijoada Completa',
      description: 'Toda quarta e sábado.',
      price: '22,00€',
    },
    {
      image: '/img/peito de frango.jpg',
      title: 'Frango à Parmegiana',
      description: 'Molho de tomate e queijo derretido.',
      price: '20,00€',
    },
    {
      image: '/img/lasanha.png',
      title: 'Lasanha Caseira',
      description: 'Feita no forno a lenha.',
      price: '21,50€',
    },
  ];

  const menuGrupos = [
    
    {
      image: '/img/Arroz de Marisco.webp',
      title: 'Arroz de Marisco (mín. 2 pessoas)',
      description: 'Variedade de mariscos frescos.',
      price: '30,00€ /pessoa',
    },
    {
      image: '/img/arroz tamboril.jpg',
      title: 'Arroz de Tamboril',
      description: 'Cremoso e cheio de sabor.',
      price: '25,00€ /pessoa',
    },
    {
      image: '/img/bacalhau.jpg',
      title: 'Bacalhau à Gomes de Sá',
      description: 'Para grupos a partir de 4 pessoas.',
      price: '20,00€ /pessoa',
    },
    {
      image: '/img/entrecosto.webp',
      title: 'Entrecosto no Forno',
      description: 'Com batata frita e arroz.',
      price: '20,00€ /pessoa',
    },
  ];

  const entradas = [
    
    {
      image: '/img/amejoas.jpg',
      title: 'Ameijôas à Bulhão Pato',
      description: 'Clássico português.',
      price: '18,00€',
    },
    {
      image: '/img/camarao.jpg',
      title: 'Camarão al Ajillo',
      description: 'Camarão fresco ao alho e azeite.',
      price: '7,50€',
    },
  ];
  
  const sobremesas = [
    
    {
      image: '/img/baba de camelo.jpg',
      title: 'Baba de Camelo',
      description: 'Doce de leite com biscoito.',
      price: '5,00€',
    },
    {
      image: '/img/muss.webp',
      title: 'Mousse de Chocolate Belga',
      description: 'Com raspas de chocolate.',
      price: '5,50€',
    },
  ];

  const bebidas = [
    
    {
      image: '/img/suco natural.jpg',
      title: 'Suco Natural',
      description: 'Laranja, abacaxi, morango ou manga.',
      price: '3,50€',
    },
    {
      image: '/img/caipirinha-2.webp',
      title: 'Caipirinha Tradicional',
      description: 'Limão, açúcar e cachaça.',
      price: '6,00€',
    },
  ];
  
  return (
    <main>
      <Hero />
      {/* Menu Principal */}
      <section id="menu" className="section container">
        <h1>Nosso Cardápio</h1>
        <div className="cards">
          {menuItems.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="section container">
        <h1>Nossas Especialidades</h1>
        <div className="cards">
          {especialidades.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Menu Grupos */}
      <section id="menu_grupos" className="section container">
        <h1>Menu para Grupos</h1>
        <div className="cards">
          {menuGrupos.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Entradas */}
      <section id="entradas" className="section container">
        <h1>Entradas</h1>
        <div className="cards">
          {entradas.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Sobremesas */}
      <section id="sobremesas" className="section container">
        <h1>Sobremesas</h1>
        <div className="cards">
          {sobremesas.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Bebidas */}
      <section id="bebidas" className="section container">
        <h1>Bebidas</h1>
        <div className="cards">
          {bebidas.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Reservas */}
      <section id="reservas" className="section container">
        <h1>Faça sua Reserva</h1>
        <ReservationForm />
      </section>
    </main>
  );
}
