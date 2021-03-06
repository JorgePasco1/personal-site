import styles from './Card.module.scss';

type CardProps = {
  title: string;
  description: string;
  link: string;
  imageLink?: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  link,
  imageLink,
  className = '',
}: CardProps) => {
  return (
    <div className={`${styles.card} ${className}`} data-testid="cardComponent">
      <a href={link} className={styles.card__image_container}>
        <img
          src={imageLink || 'https://source.unsplash.com/random/800x500'}
          className={styles.card__image}
          alt="Card Cover"
        />
      </a>
      <a href={link} className={styles.card__title}>
        {title}
      </a>
      <div className={styles.card__description}>{description}</div>
    </div>
  );
};

export default Card;
