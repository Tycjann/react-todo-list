import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import {getFilteredCards} from '../../redux/store.js';

const Column = props => {

  const searchString = useSelector(state => state.search['text']);
  // const regex = new RegExp(searchString,"i");
  // const cards = useSelector(state => state.cards).filter(card => (card.columnId === props.id && regex.test(card.title)));
  // or card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase()))
  const cards = useSelector(state => getFilteredCards(state, props.id, searchString));
  // console.log('Column render');

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />{props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map(card => 
          <Card key={card.id} title={card.title} />
        )}
        <CardForm columnId={props.id} />
      </ul>
    </article>
  );
};

export default Column;