import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";


const characters = [
  { id: "0", name: "batman", img: "batman.jpg" },
  { id: "1", name: "spiderman", img: "spiderman.jpg" },
  { id: "2", name: "hulk", img: "hulk.jpg" },
  { id: "3", name: "wolverine", img: "wolverine.jpg" },
];

function App() {
  return (
    <>
     <SearchBar />
      {characters.map((character) => {
        return (
          <Card name={character.name} img={character.img} key={character.id} />
        );
      })}
    </>
  );
}

export default App;