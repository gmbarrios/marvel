import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";
import styles from "./app.module.css";
import { getMarvelCharacters } from "./GetMarvelCharacters";
import { useState, useEffect } from "react";
import { CONSTANTS } from "./Utils/constants";
import { CardComicsDetails } from "./components/CardComicsDetails";
import { GetMarvelComics } from "./components/GetMarvelComics";





function App() {
  const [marvelCharacters, setMarvelCharacters] = useState(null);
  const [marvelComics, setMarvelComics] = useState(null);

  async function fetchData() {
    const response = await getMarvelCharacters();
    setMarvelCharacters(response.data.results);
  }
  
  
  async function fetchDataComics() {
    const response = await GetMarvelComics();
    setMarvelComics(response.data.results);
  }
  
  useEffect(() => {
    fetchData();
    fetchDataComics();
    }
  , []);
  
  return (
    <>
      <SearchBar />
      <CardComicsDetails />

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
