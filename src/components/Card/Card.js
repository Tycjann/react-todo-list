import styles from './Card.module.scss';

const Card = props => {
  return (
    <li className={styles.card} key={props.id}>{props.title}</li>
  );
};

export default Card;