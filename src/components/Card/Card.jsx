import {
  CardContainer,
  PokemonImageContainer,
  PokemonTypeContainer,
  Text,
} from "./Card.styled";
import { PokemonConfig } from "../PokemonConfig/PokemonConfig";
import { colors } from "../../helpers/ColorPalette";

export default function Card({ name, id, weight, height, pokemonTypes }) {
  return (
    <CardContainer key={name}>
      <PokemonImageContainer
        background={PokemonConfig[pokemonTypes[0].type.name].gradientColor}
      >
        <img
          src={`https://play.pokemonshowdown.com/sprites/ani/${name}.gif`}
          alt={`${name} gif`}
        />
      </PokemonImageContainer>
      <div className="div-pokemon-name">
        <Text fontSize="2rem" color={colors.cardText} fontWeight="700">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Text>
        <Text fontSize="2rem" color={colors.cardId} fontWeight="700">
          #{id}
        </Text>
      </div>
      <div className="div-pokemon-type">
        {pokemonTypes.map((pokemonType) => (
          <PokemonTypeContainer
            key={PokemonConfig[pokemonType.type.name].typeColor}
            typeColor={PokemonConfig[pokemonType.type.name].typeColor}
          >
            <Text fontSize="1.6rem" color={colors.cardText} fontWeight="700">
              {pokemonType.type.name}
            </Text>
            <img
              src={PokemonConfig[pokemonType.type.name].img}
              alt={`${pokemonType.type.name} icon`}
            />
          </PokemonTypeContainer>
        ))}
      </div>
      <div className="div-pokemon-base">
        <div className="pokemon-weight">
          <img src={PokemonConfig["dark"].img} width="10" alt="logo" />
          <Text fontSize="1.6rem" color={colors.cardText} fontWeight="700">
            {weight / 10} kg
          </Text>
        </div>
        <div className="pokemon-height">
          <img src={PokemonConfig["grass"].img} width="10" alt="logo" />
          <Text fontSize="1.6rem" color={colors.cardText} fontWeight="700">
            {height / 10} m
          </Text>
        </div>
      </div>
      <div className="div-show-stats">
        <button>&uarr;</button>
      </div>
    </CardContainer>
  );
}
