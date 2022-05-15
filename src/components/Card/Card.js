import styles from './Card.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store.js';


const Card = props => {

  const iconFavoriteYes = 'fa fa-star';
  const iconFavoriteNo = 'fa fa-star-o';
  let iconFavoriteSet = '';
  
  const [starIcon, setStarIcon] = useState((props.isFavorite ? iconFavoriteYes : iconFavoriteNo));

  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    (e.target.className === iconFavoriteYes) ? iconFavoriteSet = iconFavoriteNo : iconFavoriteSet = iconFavoriteYes;
    dispatch(toggleCardFavorite(props.id));
    setStarIcon(iconFavoriteSet);
  }

  return (
    <li className={styles.card} >
      {props.title} 
      <span className={starIcon} onClick={handleClick} id={props.id} />
    </li>
  );
};

export default Card;