import { CardContainer, PokemonTypeContainer, Text } from "./Card.styled";
import { PokemonConfig } from "../PokemonConfig/PokemonConfig";

export default function Card({ name, weight, pokemonTypes }) {
  return (
    <CardContainer key={name}>
      <div className="div-pokemon-img">
        <img
          src={`https://play.pokemonshowdown.com/sprites/ani/${name}.gif`}
          alt={`${name} gif`}
        />
      </div>
      <div className="div-pokemon-name">
        <Text fontSize="2rem" color="#fff" fontWeight="700">
          {name.toUpperCase()}
        </Text>
        <Text fontSize="1.6rem" color="#dfdfdf" fontWeight="400">
          Weight: {weight / 10} kg
        </Text>
      </div>
      <div className="div-pokemon-type">
        {pokemonTypes.map((pokemonType) => (
          <PokemonTypeContainer
            key={PokemonConfig[pokemonType.type.name].typeColor}
            typeColor={PokemonConfig[pokemonType.type.name].typeColor}
          >
            <Text fontSize="1.6rem" color="#dfdfdf" fontWeight="700">
              {pokemonType.type.name}
            </Text>
            <img
              src={PokemonConfig[pokemonType.type.name].img}
              alt={`${pokemonType.type.name} icon`}
            />
          </PokemonTypeContainer>
        ))}
      </div>
    </CardContainer>
  );
}
