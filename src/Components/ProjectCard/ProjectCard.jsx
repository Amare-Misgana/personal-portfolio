import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ image, title, description, techStack = [], link }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <div className={styles.techRow}>
                    {techStack.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.techItem}
                        >
                            <span className={styles.icon}>{item.icon}</span>
                            <span className={styles.label}>{item.iconLabel}</span>
                        </a>
                    ))}
                </div>

                {link && (
                    <Link to={link} className={styles.button}>
                        View Project
                    </Link>
                )}
            </div>
        </div>
    );
}
