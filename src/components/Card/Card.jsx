import styles from "./card.module.css";



export const Card = ({name, img}) => {
    return (
        <div className={styles.cardBox}>{name}<img src={`/public/${img}`} />
      </div>
    )};
