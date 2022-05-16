import styles from './Favorite.module.scss';
import PageTitle from "../PageTitle/PageTitle";
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getCardsByFavorite } from '../../redux/cardsReducer.js';

const Favorite = () => {

  const cards = useSelector(state => getCardsByFavorite(state));

  if (cards.length === 0) return (
    <div className={styles.hero}>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <p>No cards…</p>
      </article>
      
    </div>
  );
  return (
    <div className={styles.hero}>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map(card =>
            <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />
          )}
        </ul>
      </article>
    </div>
    
  );
};

export default Favorite;