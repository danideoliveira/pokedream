import { CounterContainer, CounterText } from "./PokemonCounter.styled";

export default function PokemonCounter({ pokemonCounter }) {
  const verifyNumber = (pokemonCounter) => {
    return pokemonCounter > 1 ? "encontrados" : "encontrado";
  };

  return (
    <CounterContainer>
      <CounterText>{pokemonCounter} Pokemon {verifyNumber(pokemonCounter)}</CounterText>
    </CounterContainer>
  );
}
