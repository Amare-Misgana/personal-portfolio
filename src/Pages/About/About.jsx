import styles from "./About.module.css";
import Nav from "../../Components/Nav/Nav";
import SplitText from "../../Components/SplitText/SplitText";
// import IconHolder from "../../Components/IconHolder/IconHolder";
import RippleGrid from "../../Components/RippleGrid/RippleGrid";
import { useEffect, useState } from "react";

const About = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className={styles.AboutContainer}>
      <div style={{ position: 'fixed', display: 'flex', justifyContent: 'center', inset: '0', height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <RippleGrid
          key={location.pathname}
          enableRainbow={false}
          gridColor="#2caac0"
          rippleIntensity={0.06}
          gridSize={width > 600 ? 15 : 25}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={width > 600 ? 0.9 : 0.5}
        />
      </div>
      <Nav currentPage="about" />
      <div className={styles.header}>
        <SplitText
          text="About"
          splitType="chars"
          delay={100}
          duration={0.7}
          className={styles.pageTitle}
          threshold={0.3}
        />
      </div>
    </div>
  );
};

export default About;
