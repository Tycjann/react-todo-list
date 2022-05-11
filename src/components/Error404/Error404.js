import styles from './Error404.module.scss';

const Error404 = () => {
  return (
    <section className={styles.errorbox}>
      <div className={styles.errorbox__inner}>
          <h1>404</h1>
          <h2>UH OH! You're lost.</h2>
          <p>The page you are looking for does not exist.
            How you got here is a mystery.
          </p>
      </div>
    </section>
  );
};

export default Error404;