import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchText } from '../../redux/searchStringReducer.js';
// import { useSelector } from 'react-redux';

const SearchForm = () => {

  // show search text in input search
  // const searchTextMemory = useSelector(getSearchText).text;
  // const [searchText, setSearchText] = useState(searchTextMemory || '');

  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchText({ text: searchText }));
  };

  // Clear search text
  useEffect(() => {
      dispatch(updateSearchText({ text: '' }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput value={searchText} placeholder="Search…" onChange={e => setSearchText(e.target.value)} />
      <Button><span className="fa fa-search" /></Button>
    </form>
  );
};

export default SearchForm;