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
  Button,
} from "./Home.styled";
import axios from "axios";
import { useState, useEffect } from "react";
import { PokemonConfig } from "../../components/PokemonConfig/PokemonConfig";
import Navbar from "../../components/Navbar/Navbar";

export default function Home({ isLoading, setIsLoading }) {
  const [pokemonId, setPokemonId] = useState();
  const [pokemon, setPokemon] = useState([]);

  function getRandomId(max = 1, min = 493) {
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
        <Container
          key={currentPokemon.name}
          style={{ display: isLoading ? "none" : "flex" }}
        >
          <Navbar
            background={
              PokemonConfig[currentPokemon.types[0].type.name].typeColor
            }
            position="absolute"
          />

          <LeftContent>
            <Gradient
              background={
                PokemonConfig[currentPokemon.types[0].type.name].gradientColor
              }
            />
            <PokemonImage
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
              alt={`pokemon`}
              onLoad={(e) => {
                const image = e.target;
                image.complete &&
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 500);
              }}
            />
          </LeftContent>
          <LineDivider />
          <RightContent>
            <BoxTitle>
              <Title>
                {currentPokemon.types[0].type.name.charAt(0).toUpperCase() +
                  currentPokemon.types[0].type.name.slice(1)}{" "}
                Pokemon
              </Title>
              <Description>
                {PokemonConfig[currentPokemon.types[0].type.name].description}
              </Description>
              <Button
                background={
                  PokemonConfig[currentPokemon.types[0].type.name].typeColor
                }
                href="#pokemon-list"
              >
                Gotta Catch'em all!
              </Button>
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
