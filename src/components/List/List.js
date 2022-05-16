import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from "../SearchForm/SearchForm";
import { useSelector } from 'react-redux';
import { getListById } from '../../redux/listsReducer.js';
import { getColumnsByList } from '../../redux/columnsReducer.js';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

const List = () => {
  
  const {listId} = useParams();

  // const columns = useSelector(state => getAllColumns(state));
  // * const useSelector = callback => {
  // *   return callback(state);
  // * }
  // => const columns = useSelector(getAllColumns);
  // const listId = 1;
  const listData = useSelector(state => getListById(state, listId));
  const columns = useSelector(state => getColumnsByList(state, listId));

  if (!listData) return <Navigate to="/404" />
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm/>
      <section className={styles.columns}>
        {columns.map(column => 
          <Column 
            key={column.id} 
            {...column} />
        )}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;