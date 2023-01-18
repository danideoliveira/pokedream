import { GlobalStyle } from "./helpers/GlobalStyles";
import PokemonList from "./pages/PokemonList/PokemonList";
import "./fonts/fonts.css";

function App() {
  return (
    <>
      <PokemonList />
      <GlobalStyle />
    </>
  );
}

export default App;
