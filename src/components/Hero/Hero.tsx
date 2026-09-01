import styles from './Hero.module.css';

export default function Hero() {
  return (
    
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1>Monteiro Grill</h1>
        <p>O melhor da culinária portuguesa e brasileira em um só lugar. Sabores inesquecíveis desde 2020.</p>
      </div>
    </section>
  );
}
