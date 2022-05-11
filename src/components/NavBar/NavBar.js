import styles from './NavBar.module.scss';
import Container from "../Container/Container";

const NavBar = () => {

  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbar__link}>
          <a href="/" className={styles.navbar__brand}><i className="fa fa-server"></i></a>
          <ul className={styles.navbar__navigation}>
            <li className={styles.navbar__navigation_li}><a href="/">Home</a></li>
            <li className={styles.navbar__navigation_li}><a href="/favorite">Favorite</a></li>
            <li className={styles.navbar__navigation_li}><a href="/about">About</a></li>
          </ul>
        </div>
      </Container>
    </nav>
  )
};

export default NavBar;