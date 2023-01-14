import { Container, Grid } from "./PokemonList.styled";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";

export default function PokemonList() {
  // https://play.pokemonshowdown.com/sprites/ani/charmander.gif
  // https://pokeapi.co/api/v2/pokemon/ditto
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getApi() {
      for (let i = 1; i <= 20; i++) {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then((response) => response.data)
          .then((data) => {
            setPokemon((oldList) => [...oldList, data]);
          });
      }

    }
    getApi();
  }, []);

  return (
    <Container>
      <Grid>
        {pokemon.map((pokemon) => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            weight={pokemon.weight}
            types={pokemon.types}
          />
        ))}
      </Grid>
    </Container>
  );
}
