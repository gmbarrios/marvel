import { useState } from "react";
import styles from "./card.module.css";


export const Card = ({ characterName, img, id }) => {
  
  const characterFavorited = window.localStorage.getItem("favorite")
    ? JSON.parse(window.localStorage.getItem("favorite")).includes(id)
    : false;
  
  const [isFavorited, setIsFavorited] = useState(characterFavorited);

     return (
      <div className={styles.cardBox}>
        <div
        className={styles.characterImage}
        style={{
          backgroundImage: `linear-gradient(41deg, rgba(19, 2, 2, 0.33) 0%, rgba(255, 255, 255, 0) 50%, rgb(241, 235, 235, 33) 100%), url(${img})`,
          color: "white",
        }}
      />
        <div className={styles.characterName}>{characterName}</div>
        <button
          className={styles.favoriteButton}
          onClick={() => {
            setIsFavorited(!isFavorited)
            const favorites = window.localStorage.getItem("favorite");

            if (favorites) {
            const storedFav = JSON.parse(favorites);
            console.log(storedFav);
            storedFav.push(id);
            window.localStorage.setItem("favorite", JSON.stringify(storedFav));
            } else {
            const favoritesArray = [id];
            window.localStorage.setItem(
              "favorite",
              JSON.stringify(favoritesArray)
            );
          }
        }}
          >
            {isFavorited ? "★" : "☆"}
          </button>
      </div>
      );
    };
