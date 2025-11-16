import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>

                <div className={styles.left}>
                    <h3>Amare</h3>
                    <p>Full-Stack Developer — Django & React</p>
                </div>

                <div className={styles.links}>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/about">About</Link>
                </div>

                <div className={styles.socials}>
                    <a href="mailto:codeamare@gmail.com"><FiMail /></a>
                    <a href="https://github.com/Amare-Misgana" target="_blank"><FiGithub /></a>
                    <a href="https://linkedin.com" target="_blank"><FiLinkedin /></a>
                </div>

            </div>

            <div className={styles.bottom}>
                © {new Date().getFullYear()} Amare — All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
