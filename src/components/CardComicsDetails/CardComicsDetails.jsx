import styles from "./cardcomicsdetails.module.css";

export const CardComicsDetails = ({
    img,
    title,
    description,
    writer,
    penciler,
    cover,
    onsaleDate
}) => {
    return (
    
        <div className={styles.backgroundContainer}>
        <div
            className={styles.comicImage}
            style={{ backgroundImage: `url(${img})` }}
            ></div>

        <div className={styles.comicInfo}>
            <h1 className={styles.title}
            >{title}</h1>

            <h3>
                Published: {onsaleDate} <br />
                Writer: {writer} <br />
                Penciler: {penciler} <br />
                Cover artist: {cover} <br />
            </h3>

            <h2>
                {description}
                </h2>
        </div>
        </div>
)}
