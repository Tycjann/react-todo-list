import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { title: title, icon: icon } });
    setTitle('');
    setIcon('');
  }

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label><span>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} /></label>
      <label><span>Icon:</span><TextInput value={icon} onChange={e => setIcon(e.target.value)} /></label>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;