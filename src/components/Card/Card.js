import styles from './Card.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsReducer.js';

const Card = props => {

  const iconTrash = 'fa fa-trash';
  const iconFavoriteYes = 'star fa fa-star';
  const iconFavoriteNo = 'star fa fa-star-o';
  let iconFavoriteSet = '';
  
  const [starIcon, setStarIcon] = useState((props.isFavorite ? iconFavoriteYes : iconFavoriteNo));

  const dispatch = useDispatch();

  const handleFavorite = e => {
    e.preventDefault();
    (e.target.className === iconFavoriteYes) ? iconFavoriteSet = iconFavoriteNo : iconFavoriteSet = iconFavoriteYes;
    dispatch(toggleCardFavorite(props.id));
    setStarIcon(iconFavoriteSet);
  }

  const handleRemove = e => {
    e.preventDefault();
    dispatch(removeCard(props.id));
    console.log('remove', props.id);
  }

  return (
    <li className={styles.card} >
      {props.title} 
      <div className={styles.icons}>
        <div className={styles.star}><span className={starIcon} onClick={handleFavorite} id={props.id} /></div>
        <div className={styles.trash}><span className={iconTrash} onClick={handleRemove} id={props.id} /></div>
      </div>
    </li>
  );
};

export default Card;