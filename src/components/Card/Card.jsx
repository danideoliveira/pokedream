import {
  BoxPokemonName,
  BoxPokemonType,
  CardContainer,
  LeftContent,
  PokemonImage,
  BoxPokemonImage,
  CardPokemonType,
  RightContent,
  Text,
  Icon,
} from "./Card.styled";
import { PokemonConfig } from "../PokemonConfig/PokemonConfig";
import { colors } from "../../helpers/ColorPalette";
import { images } from "../Images/Images";
import { verifyPokemon } from "../../helpers/VerifyPokemon";

export default function Card({
  name,
  id,
  weight,
  height,
  stats,
  pokemonTypes,
  handleOpenModal,
  isCompareFull,
}) {

  const pokemonVerifyUrl = (name) => {
    const nameJoin = name.replace("-", "");
    if (verifyPokemon[nameJoin]) {
      return verifyPokemon[nameJoin].urlName;
    } else {
      return name;
    }
  };

  const pokemonVerifyName = (name) => {
    const nameJoin = name.replace("-", "");
    if (verifyPokemon[nameJoin]) {
      const { newName, img, altText } = verifyPokemon[nameJoin];
      return (
        <>
          {newName.charAt(0).toUpperCase() + newName.slice(1)}
          {verifyPokemon[nameJoin].newName === "nidoran" && (
            <img src={img} alt={altText} />
          )}
        </>
      );
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  };

  return (
    <CardContainer
      key={name}
      onClick={() =>
        handleOpenModal({
          name,
          id,
          weight,
          height,
          stats,
          pokemonTypes,
          isCompareFull,
        })
      }
    >
      <LeftContent>
        <BoxPokemonImage
          background={PokemonConfig[pokemonTypes[0].type.name].gradientColor}
        >
          <PokemonImage
            src={`https://play.pokemonshowdown.com/sprites/ani/${pokemonVerifyUrl(
              name
            )}.gif`}
            alt={`${name} gif`}
          />
        </BoxPokemonImage>
      </LeftContent>
      <RightContent>
        <BoxPokemonName>
          <Text fontSize="2.2rem" color={colors.cardText} fontWeight="700">
            {pokemonVerifyName(name)}
          </Text>
          <Text fontSize="2rem" color={colors.cardId} fontWeight="700">
            #{id}
          </Text>
        </BoxPokemonName>
        <BoxPokemonType>
          {pokemonTypes.map((pokemonType) => (
            <CardPokemonType
              key={PokemonConfig[pokemonType.type.name].typeColor}
              typeColor={PokemonConfig[pokemonType.type.name].typeColor}
            >
              <Text fontSize="1.8rem" color={colors.cardText} fontWeight="700">
                {pokemonType.type.name}
              </Text>
              <Icon
                src={PokemonConfig[pokemonType.type.name].img}
                alt={`${pokemonType.type.name} icon`}
              />
            </CardPokemonType>
          ))}
        </BoxPokemonType>
      </RightContent>
    </CardContainer>
  );
}
