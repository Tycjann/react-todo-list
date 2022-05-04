import styles from './CardForm.module.scss';
import TextInput from "../TextInput/TextInput";
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CardForm = props => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_CARD', 
      payload: { columnId: props.columnId, title: title}
    });
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;