import styles from "./About.module.css";
import Nav from "../../Components/Nav/Nav";

const About = () => {
  return (
    <div className={styles.AboutContainer}>
      <Nav currentPage="about" />
      <div className={styles.header}>
        <h1>Welcome</h1>
      </div>
    </div>
  );
};

export default About;
