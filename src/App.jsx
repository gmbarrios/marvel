import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";
import styles from "./app.module.css";
import { ApiCharacters } from "./ApiCharacters";
import { useState, useEffect } from "react";
import { CONSTANTS } from "./Utils/constants";



function App() {
  const [marvelCharacters, setMarvelCharacters] = useState(null);
  async function fetchData() {
    const response = await ApiCharacters();
    setMarvelCharacters(response.data.results);
  }
  useEffect(() => {
    fetchData();
    }
  , []);

  return (
    <>
      <SearchBar />
      <div className={styles.backgroundContainer}>
        <div className={styles.cardsContainer}>
          {marvelCharacters &&
            marvelCharacters.map((character) => {
              const urlImage = `${character.thumbnail.path}.${character.thumbnail.extension}`;
              if (character.thumbnail.path === CONSTANTS.imgNotAvailable) {
                return null;
              }

              return (
                <Card
                  key={character.id}
                  characterName={character.name}
                  img={urlImage}
                />
              );
          })}
        </div>
      </div>
    </>
  );
}



export default App;
