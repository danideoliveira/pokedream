import { Container, ContainerSecondary, Grid } from "./PokemonList.styled";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import PreLoader from "../../components/PreLoader/PreLoader";
import SearchBar from "../../components/SearchBar/SearchBar";
import Modal from "../../components/Modal/Modal";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState({});

  async function getApi() {
    try {
      const pokemonData = [];
      for (let i = 1; i <= 10; i++) {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then((response) => response.data)
          .then((data) => {
            pokemonData.push(data);
            setLoading(true);
          });
      }
      setPokemons(pokemonData);
      return pokemonData;
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  const pokemonFilter = async (filterValue) => {
    const allPokemons = await getApi();
    const filteredPokemons = [];
    if (!filterValue) {
      await getApi();
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

    setPokemons(filteredPokemons);
  };

  const typeFilter = async (pokemonType) => {
    const allPokemons = await getApi();
    const filteredPokemons = [];
    if (!pokemonType || pokemonType.includes("todos")) {
      await getApi();
      return;
    }

    allPokemons.forEach((currentPokemon) => {
      currentPokemon.types.map((currentType) => {
        if (currentType.type.name === pokemonType) {
          filteredPokemons.push(currentPokemon);
        }
      });
    });

    setPokemons(filteredPokemons);
  };

  function handleOpenModal(info) {
    setModalIsOpen(true);
    setPokemonInfo(info);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <Container>
      <ContainerSecondary>
        <SearchBar pokemonFilter={pokemonFilter} typeFilter={typeFilter} />
        {!loading && <PreLoader />}
        <Grid>
          {pokemons.map((pokemon) => (
            <Card
              key={pokemon.name}
              name={pokemon.name}
              id={pokemon.id}
              weight={pokemon.weight}
              height={pokemon.height}
              stats={pokemon.stats}
              pokemonTypes={pokemon.types}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </Grid>
        <Modal
          modalIsOpen={modalIsOpen}
          handleCloseModal={handleCloseModal}
          pokemonInfo={pokemonInfo}
        />
      </ContainerSecondary>
    </Container>
  );
}
