import styles from "./cardcomicsdetails.module.css";

export const CardComicsDetails = () => {
    return <div className={styles.backgroundContainer}>
    <div className={styles.comicImage}>Hola</div>
    <div className={styles.comicInfo}>
        <h1 className={styles.title}>Titulo del Comic</h1>
        <h2 className={styles.description}>Descripcion</h2>
        <p className={styles.text}>Texto</p>
    </div>
    </div>
}
