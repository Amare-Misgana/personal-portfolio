import styles from "./Home.module.css";
import Nav from "../../Components/Nav/Nav";
import { useContext, useEffect, useState } from "react";
import { DeveloperContext } from "../../Context/DeveloperContext";
import { useNavigate } from "react-router-dom";

const Home = ({ interval = 6000 }) => {
  const developer = useContext(DeveloperContext);
  const [isFrontend, setIsFrontend] = useState(true);
  const [elements, setElements] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const animation = setInterval(() => {
      setIsFrontend((f) => !f);
    }, interval);
    return () => clearInterval(animation);
  }, [interval]);

  useEffect(() => {
    setElements({
      icons: isFrontend ? developer.frontend_icons : developer.backend_icons,
      frontend_framework: developer.frontend_framework,
      backend_framework: developer.backend_framework,
    });
  }, [isFrontend, developer]);

  return (
    <div
      className={`${styles.HomeContainer} ${isFrontend ? styles.frontend : styles.backend
        }`}
    >
      <Nav />
      <div
        className={`${isFrontend ? styles.frontendMode : styles.backendMode} ${styles.hero
          }`}
      >
        <h1>
          Hi, I'm <span>Amare Misgana</span>
        </h1>
        <h2>
          I craft full-stack web apps with{" "}
          <span className={styles.names}>
            <span className={styles.django}>Django</span> &{" "}
            <span className={styles.react}>React</span>
          </span>
        </h2>
        <div className={styles.cta}>
          <button onClick={() => navigate("/projects")}>View Projects</button>
        </div>
      </div>

      <div className={styles.iconCircle}>
        <div className={styles.frameworkIconsContainer}>
          <div className={`${styles.frameworkIcons} ${styles.icons}`}>
            <div className={styles.react}>{developer.frontend_framework}</div>
            <div className={styles.django}>{developer.backend_framework}</div>
          </div>
        </div>
      </div>

      <div className={styles.backgroundIconsContainer}>
        <div className={`${styles.frontendIcons} ${styles.icons}`}>
          {developer.frontend_icons?.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>
        <div className={`${styles.backendIcons} ${styles.icons}`}>
          {developer.backend_icons?.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
