import { GlobalStyle } from "./helpers/GlobalStyles";
import Home from "./pages/Home/Home";
import PokemonList from "./pages/PokemonList/PokemonList";
import "./fonts/fonts.css";
import { useState } from "react";
import PreLoader from "./components/PreLoader/PreLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Home isLoading={isLoading} setIsLoading={setIsLoading} />
      {isLoading ? (
        <PreLoader marginTop="10rem"/>
      ) : (
        <>
          <PokemonList />
        </>
      )}
      <GlobalStyle />
    </>
  );
}

export default App;
