import styles from "./IconHolder.module.css"


const IconHolder = ({ icon, iconLabel, link, text = false }) => {
  return (
    <a href={link} target="_blank" className={styles.IconHolderContainer}>

      <span className={text ? styles.span : ""}>{icon}</span>
      <p className={styles.label}>{iconLabel}</p>
    </a>
  )
}

export default IconHolder