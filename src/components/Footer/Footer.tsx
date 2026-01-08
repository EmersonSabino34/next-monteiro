import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h3>Navegação</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Cardápio</a></li>
            <li><a href="#reservas">Reservas</a></li>
          </ul>
        </div>
        <div>
          <h3>Horário</h3>
          <ul>
            <li>Seg – Sex: 11h às 22h</li>
            <li>Sábado: 12h às 23h</li>
            <li>Domingo: 12h às 21h</li>
          </ul>
        </div>
        <div>
          <h3>Contato</h3>
          <p>Rua dos Sabores, 123 – Centro</p>
          <p>Tel: (11) 1234-5678</p>
          <div className={styles.social}>
            <ul>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
