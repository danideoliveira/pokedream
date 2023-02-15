import { CounterContainer, CounterText } from "./PokemonCounter.styled";

export default function PokemonCounter({ pokemonCounter }) {
  return (
    <CounterContainer>
      <CounterText>
        {pokemonCounter} Pokemon encontrados
      </CounterText>
    </CounterContainer>
  );
}
