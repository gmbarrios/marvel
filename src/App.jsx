import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";
import styles from "./app.module.css";
import { ApiCall } from "./ApiCall";



ApiCall();

function App() {
  return (
    <>
     <SearchBar />
     <div className={styles.cardsContainer}>
     <Card />
     </div>
    </>
  );
}

export default App;




/* const characters = [
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
]; */


/* characters.map((character) => {
        return (
          <Card name={character.name} img={character.img} key={character.id} />
        );
        })*/