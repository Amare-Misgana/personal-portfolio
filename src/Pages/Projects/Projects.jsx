import styles from "./Projects.module.css";
import Nav from "../../Components/Nav/Nav";
import SplitText from "../../Components/SplitText/SplitText";
import IconHolder from "../../Components/IconHolder/IconHolder";
import RippleGrid from "../../Components/RippleGrid/RippleGrid";
import Footer from "../../Components/Footer/Footer";
import GlassBox from "../../Components/GlassBox/GlassBox";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { useState, useEffect } from "react";

import { SiReact, SiDjango, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

const Projects = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.ProjectsContainer}>

      <div className={styles.content}>
        <Nav currentPage="projects" />

        <div className={styles.header}>
          <SplitText text="Projects" splitType="chars" delay={100} duration={0.7} className={styles.pageTitle} threshold={0.3} />
        </div>

        <main className={styles.mainContent}>
          <p className={styles.intro}>
            Here are some of my featured projects — each one carefully built with strong architecture, modern UI, and enterprise-level security. I focus on performance, scalability, and crafting clean, maintainable code.
          </p>

          <h2 className={styles.sectionTitle}>Featured Work</h2>

          <div className={styles.projectsGrid}>
            <GlassBox padding="1.5em" background="#111111e3" borderColor="gray" borderWidth="2px" borderStyle="solid" borderRadius={6}>
              <ProjectCard
                image="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                title="MegaLearn School System"
                description="An enterprise-scale school management system with full role-based dashboards, analytics, attendance tracking, real-time events, and advanced security layers."
                techStack={[
                  { icon: <SiReact />, iconLabel: "React", link: "https://react.dev" },
                  { icon: <SiDjango />, iconLabel: "Django", link: "https://www.djangoproject.com" },
                  { icon: <SiJavascript />, iconLabel: "JavaScript", link: "https://developer.mozilla.org" },
                ]}
                link="/projects/megalearn"
              />
            </GlassBox>

            <GlassBox padding="1.5em" background="#111111e3" borderColor="gray" borderWidth="2px" borderStyle="solid" borderRadius={6}>
              <ProjectCard
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                title="Portfolio Website"
                description="A fully modern portfolio website with animated typography, glassmorphism components, and a smooth user experience."
                techStack={[
                  { icon: <SiReact />, iconLabel: "React", link: "https://react.dev" },
                  { icon: <SiHtml5 />, iconLabel: "HTML5", link: "https://developer.mozilla.org" },
                  { icon: <SiCss3 />, iconLabel: "CSS3", link: "https://developer.mozilla.org" },
                ]}
                link="/projects/portfolio"
              />
            </GlassBox>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Projects;
