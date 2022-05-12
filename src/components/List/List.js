import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns, getListById, getColumnsByList } from '../../redux/store.js';

const List = () => {
  
  // const columns = useSelector(state => getAllColumns(state));
  // * const useSelector = callback => {
  // *   return callback(state);
  // * }
  // => const columns = useSelector(getAllColumns);
  const listId = 1;
  const columns = useSelector(state => getColumnsByList(state, listId));
  const lists = useSelector(state => getListById(state, listId));

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{lists.title}</h2>
      </header>
      <p className={styles.description}>{lists.description}</p>
      <section className={styles.columns}>
        {columns.map(column => 
          <Column 
            key={column.id} 
            {...column} />
        )}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;