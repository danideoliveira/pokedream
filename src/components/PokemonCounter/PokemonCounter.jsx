import { CounterContainer, CounterText } from "./PokemonCounter.styled";

export default function PokemonCounter({ pokemonCounter, loading }) {
  return (
    <CounterContainer>
      <CounterText style={{ visibility: loading ? "visible" : "hidden" }}>
        {pokemonCounter} Pokemon encontrados
      </CounterText>
    </CounterContainer>
  );
}
