import { Container, ContainerSecondary, Grid } from "./PokemonList.styled";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import PreLoader from "../../components/PreLoader/PreLoader";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

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
              pokemonTypes={pokemon.types}
            />
          ))}
          ;
        </Grid>
      </ContainerSecondary>
    </Container>
  );
}
