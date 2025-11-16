import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";
import IconHolder from "../IconHolder/IconHolder";

export default function ProjectCard({ image, title, description, techStack = [], gitLink }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <div className={styles.techRow}>
                    <div className={styles.before}></div>
                    {techStack.map((item, idx) => (
                        <IconHolder
                            key={idx}
                            icon={item.icon}
                            iconLabel={item.iconLabel}
                            link={item.link}
                        />
                    ))}
                    <div className={styles.after}></div>
                </div>

                {gitLink && (
                    <a href={gitLink} target="_blank" rel="noopener noreferrer" className={styles.button}>
                        View Project
                    </a>

                )}
            </div>
        </div>
    );
}
