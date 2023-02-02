import {
  Container,
  LeftContent,
  PokemonImage,
  RightContent,
  Title,
  Gradient,
  BoxTitle,
  Description,
  TypeBackground,
  LineDivider,
} from "./Home.styled";
import axios from "axios";
import { useState, useEffect } from "react";
import { PokemonConfig } from "../../components/PokemonConfig/PokemonConfig";

export default function Home() {
  const [pokemonId, setPokemonId] = useState();
  const [pokemon, setPokemon] = useState([]);

  function getRandomId(max = 32, min = 30) {
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
            <Gradient
              background={
                PokemonConfig[currentPokemon.types[0].type.name].gradientColor
              }
            />
            <PokemonImage
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`}
              alt={`pokemon`}
            />
          </LeftContent>
          <LineDivider />
          <RightContent>
            <BoxTitle>
              <Title>
                {currentPokemon.types[0].type.name.charAt(0).toUpperCase() +
                  currentPokemon.types[0].type.name.slice(1)}{" "}
                pokemons
              </Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                velit rem consectetur magni facilis fuga odio nemo aspernatur
                nam id laboriosam harum, sunt minus quo excepturi est? Modi,
                cupiditate necessitatibus?
              </Description>
            </BoxTitle>
            <TypeBackground
              src={PokemonConfig[currentPokemon.types[0].type.name].img}
              alt="type icon"
            />
          </RightContent>
        </Container>
      ))}
    </>
  );
}
