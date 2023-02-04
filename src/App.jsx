import { GlobalStyle } from "./helpers/GlobalStyles";
import Home from "./pages/Home/Home";
import PokemonList from "./pages/PokemonList/PokemonList";
import "./fonts/fonts.css";

function App() {
  return (
    <>
      <Home />
      <PokemonList />
      <GlobalStyle />
    </>
  );
}

export default App;
