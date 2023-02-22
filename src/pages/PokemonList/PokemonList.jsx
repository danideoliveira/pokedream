import {
  Container,
  ContainerSecondary,
  Grid,
  ButtonShowFavorites,
  BoxButtonFavorite,
} from "./PokemonList.styled";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import PreLoader from "../../components/PreLoader/PreLoader";
import SearchBar from "../../components/SearchBar/SearchBar";
import Modal from "../../components/Modal/Modal";
import ModalCompare from "../../components/ModalCompare/ModalCompare";
import PaginationSelector from "../../components/PaginationSelector/PaginationSelector";
import PaginationComponent from "../../components/Pagination/Pagination";
import PokemonNotFound from "../../components/PokemonNotFound/PokemonNotFound";
import PokemonCounter from "../../components/PokemonCounter/PokemonCounter";
import { verifyNotifyPokemonName } from "../../helpers/VerifyPokemon";
import { AiFillStar, AiFillCloseCircle } from "react-icons/ai";
import { colors } from "../../helpers/ColorPalette";

export default function PokemonList({ notify }) {
  const [pokemons, setPokemons] = useState([]);
  const [listSize, setListSize] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCompareIsOpen, setModalCompareIsOpen] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [firstPokemon, setFirstPokemon] = useState([]);
  const [secondPokemon, setSecondPokemon] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);
  const [pokemonCounter, setPokemonCounter] = useState();
  const [listFavorites, setListFavorites] = useState([]);
  const [clickSensor, setClickSensor] = useState(0);
  const [isFavoriteFilter, setIsFavoriteFilter] = useState(false);
  const [isButtonFavoriteClicked, setIsButtonFavoriteClicked] = useState(false);

  const pages = Math.ceil(pokemons.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = pokemons.slice(startIndex, endIndex);

  async function getApi(min = 1, max = 151) {
    try {
      const pokemonData = [];
      let localFavoriteList = [];
      for (let i = min; i <= max; i++) {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then((response) => response.data)
          .then((data) => {
            pokemonData.push(data);
          });
      }

      const getSavedPokemons = JSON.parse(
        localStorage.getItem("savedPokemons")
      );
      localFavoriteList = getSavedPokemons;
      localFavoriteList && setListFavorites(localFavoriteList);

      pokemonData.forEach((filtered) => {
        if (localFavoriteList) {
          for (let favorite of localFavoriteList) {
            if (filtered.name === favorite.name) {
              filtered.isFavorite = true;
            }
          }
        }
      });

      setPokemons(pokemonData);
      setLoading(true);
      setPokemonCounter(pokemonData.length);
      return pokemonData;
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerPage]);

  useEffect(() => {
    if (listFavorites.length !== 0) {
      const savedPokemons = JSON.stringify(
        listFavorites.map((favorite) => favorite)
      );

      savedPokemons.length !== 0 &&
        localStorage.setItem("savedPokemons", savedPokemons);
    } else if (clickSensor !== 0) {
      localStorage.clear();
    }
  }, [clickSensor]);

  const pokemonFilter = async (filterValue) => {
    if (!isFavoriteFilter) {
      const allPokemons = await getApi(listSize[0], listSize[1]);
      const filteredPokemons = [];
      if (!filterValue) {
        await getApi(listSize[0], listSize[1]);
        return;
      }

      allPokemons.forEach((currentPokemon) => {
        if (
          currentPokemon.name.includes(filterValue.toLowerCase()) ||
          currentPokemon.id.toString().includes(filterValue)
        ) {
          filteredPokemons.push(currentPokemon);
        }
      });

      filteredPokemons.forEach((filtered) => {
        for (let favorite of listFavorites) {
          if (filtered.name === favorite.name) {
            filtered.isFavorite = true;
          }
        }
      });

      setPokemons(filteredPokemons);
      setPokemonCounter(filteredPokemons.length);
    } else {
      console.log("é favorito!");
      const filteredPokemons = [];
      let localFavoriteList = [];

      const getSavedPokemons = JSON.parse(
        localStorage.getItem("savedPokemons")
      );
      localFavoriteList = getSavedPokemons;

      if (!filterValue) {
        setPokemons(localFavoriteList);
        setPokemonCounter(localFavoriteList.length);
        setLoading(true);
        return;
      }

      pokemons.forEach((currentPokemon) => {
        if (
          currentPokemon.name.includes(filterValue.toLowerCase()) ||
          currentPokemon.id.toString().includes(filterValue)
        ) {
          filteredPokemons.push(currentPokemon);
        }
      });

      setPokemons(filteredPokemons);
      setPokemonCounter(filteredPokemons.length);
      setLoading(true);
    }
  };

  const typeFilter = async (pokemonType) => {
    if (!isFavoriteFilter) {
      if (!pokemonType || pokemonType.includes("todos")) {
        await getApi(listSize[0], listSize[1]);
        return;
      }
      const allPokemons = await getApi(listSize[0], listSize[1]);
      const filteredPokemons = [];

      allPokemons.forEach((currentPokemon) => {
        currentPokemon.types.map((currentType) => {
          if (currentType.type.name === pokemonType) {
            filteredPokemons.push(currentPokemon);
          }
        });
      });

      filteredPokemons.forEach((filtered) => {
        for (let favorite of listFavorites) {
          if (filtered.name === favorite.name) {
            filtered.isFavorite = true;
          }
        }
      });

      setPokemons(filteredPokemons);
      setPokemonCounter(filteredPokemons.length);
    } else {
      const filteredPokemons = [];
      let localFavoriteList = [];

      const getSavedPokemons = JSON.parse(
        localStorage.getItem("savedPokemons")
      );
      localFavoriteList = getSavedPokemons;

      if (!pokemonType || pokemonType.includes("todos")) {
        setPokemons(localFavoriteList);
        setPokemonCounter(localFavoriteList.length);
        setLoading(true);
        return;
      }

      pokemons.forEach((currentPokemon) => {
        currentPokemon.pokemonTypes.map((currentType) => {
          if (currentType.type.name === pokemonType) {
            filteredPokemons.push(currentPokemon);
          }
        });
      });

      setPokemons(filteredPokemons);
      setPokemonCounter(filteredPokemons.length);
      setLoading(true);
    }
  };

  const genFilter = async (genSize) => {
    if (!isFavoriteFilter) {
      const [min, max] = genSize;
      if (!min || genSize.includes("todas")) {
        await getApi(1, 151);
        return;
      }
      const allPokemons = await getApi(min, max);

      allPokemons.forEach((currentPokemon) => {
        for (const favorite of listFavorites) {
          if (currentPokemon.name === favorite.name) {
            currentPokemon.isFavorite = true;
          }
        }
      });

      setPokemons(allPokemons);
      setCurrentPage(0);
    } else {
      const filteredPokemons = [];
      let localFavoriteList = [];
      const [min, max] = genSize;

      const getSavedPokemons = JSON.parse(
        localStorage.getItem("savedPokemons")
      );
      localFavoriteList = getSavedPokemons;

      localFavoriteList.forEach((currentPokemon) => {
        if (currentPokemon.id >= min && currentPokemon.id <= max) {
          console.log(currentPokemon);
          filteredPokemons.push(currentPokemon);
        }
      });

      setPokemons(filteredPokemons);
      setPokemonCounter(filteredPokemons.length);
      setLoading(true);
    }
  };

  function handleOpenModal(info) {
    setModalIsOpen(true);
    info && setPokemonInfo(info);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleOpenModalCompare(info) {
    setModalCompareIsOpen(true);
    info && setPokemonInfo(info);
  }

  function handleCloseModalCompare() {
    setModalCompareIsOpen(false);
  }

  const sendToCompare = (pokemonInfo) => {
    if (firstPokemon.length === 0) {
      setFirstPokemon(pokemonInfo);
      notify.compare(verifyNotifyPokemonName(pokemonInfo.name), 1, "add");
    } else if (secondPokemon.length === 0) {
      setSecondPokemon(pokemonInfo);
      notify.compare(verifyNotifyPokemonName(pokemonInfo.name), 2, "add");
    }
  };

  const sendToFavorites = (pokemonInfo) => {
    setClickSensor(clickSensor + 1);
    const listChecked = [];
    listFavorites.forEach((favorite) => {
      favorite.name === pokemonInfo.name && listChecked.push(true);
    });

    if (!listChecked.includes(true)) {
      setListFavorites((oldList) => [...oldList, pokemonInfo]);
      notify.favorite(verifyNotifyPokemonName(pokemonInfo.name), "add");
    } else {
      const newList = listFavorites.filter(
        (favorite) => favorite.name !== pokemonInfo.name
      );
      setListFavorites(newList);
      notify.favorite(verifyNotifyPokemonName(pokemonInfo.name), "remove");
    }
  };

  const favoritesFilter = async () => {
    setIsFavoriteFilter(true);
    let localFavoriteList = [];

    const getSavedPokemons = JSON.parse(localStorage.getItem("savedPokemons"));
    localFavoriteList = getSavedPokemons;

    setPokemons(localFavoriteList);
    setPokemonCounter(localFavoriteList.length);
  };

  return (
    <Container id="pokemon-list">
      <ContainerSecondary>
        <SearchBar
          pokemonFilter={pokemonFilter}
          typeFilter={typeFilter}
          genFilter={genFilter}
          setListSize={setListSize}
          firstPokemon={firstPokemon}
          secondPokemon={secondPokemon}
          setFirstPokemon={setFirstPokemon}
          setSecondPokemon={setSecondPokemon}
          handleOpenModalCompare={handleOpenModalCompare}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          setLoading={setLoading}
          notify={notify}
        />

        <PaginationSelector
          setItemsPerPage={setItemsPerPage}
          itemsPerPage={itemsPerPage}
        />
        <PaginationComponent
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pages={pages}
          loading={loading}
        />

        {loading && (
          <BoxButtonFavorite>
            <PokemonCounter pokemonCounter={pokemonCounter} />
            {!isButtonFavoriteClicked ? (
              <ButtonShowFavorites
                onClick={async () => {
                  setLoading(false);
                  setCurrentPage(0);
                  await favoritesFilter();
                  setLoading(true);
                  setIsButtonFavoriteClicked(true);
                }}
              >
                Favoritos <AiFillStar style={{ marginLeft: "0.5rem" }} />
              </ButtonShowFavorites>
            ) : (
              <ButtonShowFavorites
                style={{ background: colors.favoriteButtonCloseBackground }}
                onClick={async () => {
                  setIsFavoriteFilter(false);
                  setLoading(false);
                  setCurrentPage(0);
                  await getApi(1, 151);
                  setLoading(true);
                  setIsButtonFavoriteClicked(false);
                }}
              >
                Fechar <AiFillCloseCircle style={{ marginLeft: "0.5rem" }} />
              </ButtonShowFavorites>
            )}
          </BoxButtonFavorite>
        )}
        {!loading && <PreLoader />}
        {loading && pokemons.length === 0 && <PokemonNotFound />}

        <Grid style={{ display: !loading ? "none" : "grid" }}>
          {currentItems.map((pokemon) => (
            <Card
              key={pokemon.name}
              name={pokemon.name}
              id={pokemon.id}
              weight={pokemon.weight}
              height={pokemon.height}
              stats={pokemon.stats}
              abilities={pokemon.abilities}
              pokemonTypes={pokemon.types || pokemon.pokemonTypes}
              isFavorite={pokemon.isFavorite}
              handleOpenModal={handleOpenModal}
              sendToFavorites={sendToFavorites}
              listFavorites={listFavorites}
              isCompareFull={{ first: firstPokemon, second: secondPokemon }}
            />
          ))}
        </Grid>
        <PaginationComponent
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pages={pages}
          loading={loading}
        />
        <Modal
          modalIsOpen={modalIsOpen}
          handleCloseModal={handleCloseModal}
          pokemonInfo={pokemonInfo}
          sendToCompare={sendToCompare}
          isCompareFull={{ first: firstPokemon, second: secondPokemon }}
        />
        <ModalCompare
          modalCompareIsOpen={modalCompareIsOpen}
          handleCloseModalCompare={handleCloseModalCompare}
          pokemonInfo={pokemonInfo}
        />
      </ContainerSecondary>
    </Container>
  );
}
