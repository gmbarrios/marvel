import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";
import styles from "./app.module.css";
import { getMarvelCharacters } from "./GetMarvelCharacters";
import { useState, useEffect } from "react";
import { CONSTANTS } from "./Utils/constants";
import { CardComicsDetails } from "./components/CardComicsDetails/CardComicsDetails";
import { GetMarvelComics } from "./components/GetMarvelComics";
import { GetComicDetails } from "./components/GetComicDetails/GetComicDetails";


function App() {
  const [marvelCharacters, setMarvelCharacters] = useState(null);
  const [marvelComics, setMarvelComics] = useState(null);
  const [comicDetails, setComicDetails] = useState(null);

  async function fetchData() {
    const response = await getMarvelCharacters();
    setMarvelCharacters(response.data.results);
  }
  
  
  async function fetchDataComics() {
    const response = await GetMarvelComics();
    setMarvelComics(response.data.results);
  }


  async function fetchComicDetails() {
    const response = await GetComicDetails();
    setComicDetails(response.data.results);
  }

  const renderComicDetails = () => {
      const urlImage = `${comicDetails[0].thumbnail.path}.${comicDetails[0].thumbnail.extension}`;
      const title = comicDetails[0].title;
      const description = comicDetails[0].description;
      const writer = comicDetails[0].creators.items.find(
        (item) => item.role === "writer"
        ).name;
      const penciler = comicDetails[0].creators.items.find((item) => {
        if (item.role.includes("penciler")) return item;
        }).name;
      const cover = comicDetails[0].creators.items.find((item) => {
        if (item.role.includes("penciler (cover)")) return item;
        }).name;
      const onsaleDate = comicDetails[0].dates.find(
        (date) => date.type === "onsaleDate"
      ).date;

      return (
        <CardComicsDetails
          img={urlImage}
          title={title}
          description={description}
          writer={writer}
          penciler={penciler}
          cover={cover}
          onsaleDate={onsaleDate}
        />
      );
  }

  
  useEffect(() => {
    fetchData();
    fetchDataComics();
    fetchComicDetails();
    }
  , []);
  

  return (
    <>
      <SearchBar />

      {comicDetails && renderComicDetails()}
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
                  id={character.id} //Este id es del localStorage.
                />
              );
          })}
        </div>
    </>
  );
}


export default App;
