import styles from "./card.module.css";


export const Card = ({ name, img }) => {
    return (
        <div className={styles.cardBox}>
          {name}
          <img width={200} height={270} src={`/public/${img}`} />
      </div>
    );
  };
