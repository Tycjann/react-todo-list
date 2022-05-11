import styles from '../Hero/Hero.module.scss'; 
import PageTitle from "../PageTitle/PageTitle";

const About = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>About</PageTitle>
    </div>
  );
};

export default About;