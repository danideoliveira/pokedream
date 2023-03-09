import Home from "../Home/Home";
import PokemonList from "../PokemonList/PokemonList";
import PreLoader from "../../components/PreLoader/PreLoader";
import { toast } from "react-toastify";
import { useState } from "react";

const HomeBase = () => {
  const [isLoading, setIsLoading] = useState(true);

  const notifyCompare = (name, slot, status) => {
    const newStatus = {
      add: "adicionado(a) ao",
      remove: "removido(a) do",
    };

    toast.success(
      `${name.charAt(0).toUpperCase() + name.slice(1)} ${
        newStatus[status]
      } slot ${slot}`,
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

  const notifyFavorite = (name, status) => {
    const newStatus = {
      add: "adicionado(a) aos",
      remove: "removido(a) dos",
    };

    toast.info(
      `${name.charAt(0).toUpperCase() + name.slice(1)} ${
        newStatus[status]
      } favoritos`,
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

  const notify = {
    compare: notifyCompare,
    favorite: notifyFavorite,
  };

  return (
    <>
      <Home isLoading={isLoading} setIsLoading={setIsLoading} />
      {isLoading ? (
        <PreLoader height="100vh" />
      ) : (
        <>
          <PokemonList notify={notify} />
        </>
      )}
    </>
  );
};

export default HomeBase;
