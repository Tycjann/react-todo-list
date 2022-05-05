import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = () => {

  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ 
      type: 'UPDATE_SEARCH_TEXT',
      payload: { text: searchText }
    });
    // console.log('Submit', searchText);

  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput value={searchText} placeholder="Search…" onChange={e => setSearchText(e.target.value)} />
      <Button><span className="fa fa-search" /></Button>
    </form>
  );
};

export default SearchForm;