import { useState } from "react";
import styles from "./card.module.css";


export const Card = ({ characterName, img }) => {
  const [isFavorited, setIsFavorited] = useState(false);

     return (
      <div className={styles.cardBox}>
        <img className={styles.characterImage} width={200} height={300} src={img}/>
        <div className={styles.characterName}>{characterName}</div>
        <button className={styles.favoriteButton} onClick={() => setIsFavorited(!isFavorited)}
        >
          {isFavorited ? "★" : "☆"}
        </button>
     </div>
    );
  };
