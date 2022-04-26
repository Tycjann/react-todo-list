import style from './Column.module.scss';

const Column = props => {
  return (
    <article className={style.column}>
      <h2 className={style.title}>
        <span className={style.icon + ' fa fa-' + props.icon} />{props.title}
      </h2>
    </article>
  );
};

export default Column;