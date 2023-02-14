import { GlobalStyle } from "./helpers/GlobalStyles";
import Home from "./pages/Home/Home";
import PokemonList from "./pages/PokemonList/PokemonList";
import "./fonts/fonts.css";
import { useState } from "react";
import PreLoader from "./components/PreLoader/PreLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const notify = (name, slot, status = "adicionado ao") => {
    const newStatus = {
      add: "adicionado ao",
      remove: "removido do"
    }
    toast.success(
      `${name.charAt(0).toUpperCase() + name.slice(1)} ${newStatus[status]} slot ${slot}`,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ fontSize: "1.8rem" }}
      />
      <Home isLoading={isLoading} setIsLoading={setIsLoading} />
      {isLoading ? (
        <PreLoader height="100vh" />
      ) : (
        <>
          <PokemonList notify={notify} />
        </>
      )}
      <GlobalStyle />
    </>
  );
}

export default App;
