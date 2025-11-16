import styles from "./Projects.module.css";
import Nav from "../../Components/Nav/Nav";
import SplitText from "../../Components/SplitText/SplitText";
import Footer from "../../Components/Footer/Footer";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { useState, useEffect } from "react";
import { useProjects } from "../../Context/ProjectContext"

const Projects = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const projects = useProjects();

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
          <SplitText
            text="Projects"
            splitType="chars"
            delay={100}
            duration={0.7}
            className={styles.pageTitle}
            threshold={0.3}
          />
        </div>

        <main className={styles.mainContent}>
          <p className={styles.intro}>
            Here are some of my featured projects — each one carefully built with strong architecture, modern UI, and enterprise-level security. I focus on performance, scalability, and crafting clean, maintainable code.
          </p>

          <h2 className={styles.sectionTitle}>Featured Work</h2>

          <div className={styles.projectsGrid}>
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                gitLink={project.gitLink}
              />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
