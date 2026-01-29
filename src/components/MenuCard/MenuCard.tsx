import Image from 'next/image';
import styles from './MenuCard.module.css';

interface MenuCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

export default function MenuCard({ image, title, description, price }: MenuCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={280}
          height={230}
          className={styles.image}
        />
        
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{description}</p>
        <strong>{price}</strong>
      </div>
    </div>
  );
}
