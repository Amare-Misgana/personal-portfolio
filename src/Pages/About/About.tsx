import styles from "./About.module.css";
import Nav from "../../Components/Nav/Nav";

const About = () => {
  return (
    <div className={styles.AboutContainer}>
      <Nav currentPage="about" />
    </div>
  );
};

export default About;
