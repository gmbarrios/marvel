import { CardComicsDetails } from "./components/CardComicsDetails/CardComicsDetails";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";


function App() {

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/card-comics-details/1">Card Comics Details</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home /> } />
        <Route path="/card-comics-details/:id" element={<CardComicsDetails />} />
    </Routes>
  </>
  );


}

export default App;