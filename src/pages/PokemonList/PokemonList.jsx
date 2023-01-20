import { Container, ContainerSecondary, Grid } from "./PokemonList.styled";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import PreLoader from "../../components/PreLoader/PreLoader";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function PokemonList() {
  // https://play.pokemonshowdown.com/sprites/ani/charmander.gif
  // https://pokeapi.co/api/v2/pokemon/ditto
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getApi() {
      for (let i = 1; i <= 6; i++) {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then((response) => response.data)
          .then((data) => {
            setPokemon((oldList) => [...oldList, data]);
            setLoading(true);
          });
      }
    }
    getApi();
  }, []);

  return (
    <Container>
      <ContainerSecondary>
        <SearchBar />
        {!loading && <PreLoader />}
        <Grid>
          {/* {pokemon.map((pokemon) => (
            <Card
              key={pokemon.name}
              name={pokemon.name}
              id={pokemon.id}
              weight={pokemon.weight}
              height={pokemon.height}
              pokemonTypes={pokemon.types}
            />
          ))}; */}
        </Grid>
      </ContainerSecondary>
    </Container>
  );
}
