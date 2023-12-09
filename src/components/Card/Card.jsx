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
            const favorites = window.localStorage.getItem("favorite"); // ¿Segundo paso?

            if (favorites) {
            const storedFav = JSON.parse(favorites);
            console.log(storedFav);
            storedFav.push(id); // ¿Para qué se usa el push id?
            window.localStorage.setItem("favorite", JSON.stringify(storedFav)); // ¿Primer paso?
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

    /*

    1. localStorage.setItem: guardar un valor en localStorage. Pero sólo soporta strings, por lo que hay que usar JSON.stringify(object).
    - El primer valor dentro de () es el nombre, o el valor al que accederemos luego. En este caso "favorite".
    - stringify se usa para transformar un objeto a un string.
    
    2. Al recargar la página hay que cargar el valor guardado en localStorage usando localStorage.getItem.
    - JSON.parse se usa para transformar un string de nuevo a un objeto JS.

    Debería guardarse el favorito dentro de isFavorited. Luego ese objeto transformarlo a un string: localStorage.setItem('favorite', JSON.stringify*(isFavorited));

    Luego sacar el valor: const isFavorited = JSON.parse(localStorage.getItem('favorite'));
    */