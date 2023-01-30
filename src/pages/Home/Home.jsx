import {
  Container,
  LeftContent,
  PokemonImage,
  RightContent,
  Title,
} from "./Home.styled";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [pokemonId, setPokemonId] = useState();
  const [pokemon, setPokemon] = useState([]);

  function getRandomId(max = 9, min = 1) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  async function getApi() {
    try {
      const pokemonData = [];
      const id = getRandomId();

      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.data)
        .then((data) => {
          pokemonData.push(data);
        });
      setPokemonId(id);
      setPokemon(pokemonData);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      {pokemon.map((currentPokemon) => (
        <Container key={currentPokemon.name}>
          <LeftContent>
            <PokemonImage
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`}
              alt={`pokemon`}
            />
          </LeftContent>
          <RightContent>
            <Title>{currentPokemon.types[0].type.name} pokemons</Title>
            <p>Teste</p>
          </RightContent>
        </Container>
      ))}
    </>
  );
}
