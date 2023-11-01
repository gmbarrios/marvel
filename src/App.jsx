import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";
import styles from "./app.module.css";

const characters = [
  { id: "0", name: "batman", img: "batman.jpg" },
  { id: "1", name: "spiderman", img: "spiderman.jpg" },
  { id: "2", name: "hulk", img: "hulk.jpg" },
  { id: "3", name: "wolverine", img: "wolverine.jpg" },
  { id: "4", name: "batman", img: "batman.jpg" },
  { id: "5", name: "spiderman", img: "spiderman.jpg" },
  { id: "6", name: "hulk", img: "hulk.jpg" },
  { id: "7", name: "wolverine", img: "wolverine.jpg" },
  { id: "8", name: "batman", img: "batman.jpg" },
  { id: "9", name: "spiderman", img: "spiderman.jpg" },
  { id: "10", name: "hulk", img: "hulk.jpg" },
  { id: "11", name: "wolverine", img: "wolverine.jpg" },
];

function App() {
  return (
    <>
     <SearchBar />
     <div className={styles.cardsContainer}>
      {characters.map((character) => {
        return (
          <Card name={character.name} img={character.img} key={character.id} />
        );
      })}
      </div>
    </>
  );
}

export default App;