import styles from './Card.module.scss';

type CardProps = {
  title: string;
  description: string;
  link: string;
  imageLink: string;
  width: string;
};

const Card = ({ title, description, link, imageLink, width }: CardProps) => {
  const containerStyles = { width };
  return (
    <div className={styles.card} style={containerStyles}>
      <a href={link}>
        <img src={imageLink || 'https://source.unsplash.com/random/800x500'} className={styles.card__image}/>
      </a>
      <a href={link}>{title}</a>
      <div>{description}</div>
    </div>
  );
};

export default Card;
