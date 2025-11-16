import styles from "./Resume.module.css";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import IconHolder from "../../Components/IconHolder/IconHolder";
import { SiReact, SiDjango, SiPython, SiHtml5, SiCss3, SiJavascript, SiGithub } from "react-icons/si";

export default function Resume() {
  const skills = [
    { icon: <SiReact />, iconLabel: "React", link: "https://react.dev" },
    { icon: <SiDjango />, iconLabel: "Django", link: "https://www.djangoproject.com" },
    { icon: <SiPython />, iconLabel: "Python", link: "https://www.python.org" },
    { icon: <SiJavascript />, iconLabel: "JavaScript", link: "https://developer.mozilla.org" },
    { icon: <SiHtml5 />, iconLabel: "HTML5", link: "https://developer.mozilla.org" },
    { icon: <SiCss3 />, iconLabel: "CSS3", link: "https://developer.mozilla.org" },
    { icon: <SiGithub />, iconLabel: "GitHub", link: "https://github.com/Amare-Misgana" },
  ];

  return (
    <div className={styles.container}>
      <Nav currentPage="resume" />

      <header className={styles.header}>
        <h1 className={styles.title}>Amare Misgana</h1>
        <p className={styles.subtitle}>Full-Stack Developer — Django & React</p>
      </header>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h2>Contact</h2>
          <p><strong>Location:</strong> Ethiopia / Oromia</p>
          <p><strong>Email:</strong> <a href="mailto:codeamare@gmail.com">codeamare@gmail.com</a></p>
        </div>

        <div className={styles.card}>
          <h2>Skills</h2>
          <div className={styles.skillsRow}>
            {skills.map((s, i) => (
              <IconHolder key={i} icon={s.icon} iconLabel={s.iconLabel} link={s.link} text />
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h2>Projects</h2>
          <ul className={styles.list}>
            <li>
              <strong>BlogNet</strong> — Full-stack blog (Django + React). <a href="https://github.com/Amare-Misgana/BlogNet-Django-React">Repo</a>
            </li>
            <li>
              <strong>Comboni Fullstack Website</strong> — School management system with multi-role dashboards and real-time features. <a href="https://github.com/Amare-Misgana/comboni_fullstack_webiste">Repo</a>
            </li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Education & Certificates</h2>
          <ul className={styles.list}>
            <li>Graduated (degree)</li>
            <li>Attended INSA Summer Camp Program</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

