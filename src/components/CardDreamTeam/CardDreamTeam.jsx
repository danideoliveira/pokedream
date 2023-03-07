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
  BoxFavoriteStar,
  FavoriteButton,
  IconGender,
} from "./CardDreamTeam.styled";
import { PokemonConfig } from "../PokemonConfig/PokemonConfig";
import { colors } from "../../helpers/ColorPalette";
import { withoutGif } from "../../helpers/WithoutGif";
import { verifyPokemon } from "../../helpers/VerifyPokemon";
import { AiFillStar } from "react-icons/ai";
import { useRef } from "react";

export default function CardDreamTeam({
  name,
  id,
  weight,
  height,
  stats,
  abilities,
  pokemonTypes,
  moves,
  isFavorite,
  listFavorites,
  handleOpenModal,
  sendToFavorites,
  isCompareFull,
  showButtonClose,
  newWidth,
  newHeight,
  handleOpenMoveSelector,
  handleCloseMoveSelector,
}) {
  const refFavorite = useRef();

  const pokemonVerifyUrl = (name) => {
    const nameJoin = name.replace(/\-/g, "");
    if (verifyPokemon[nameJoin]) {
      return verifyPokemon[nameJoin].urlName;
    } else {
      return name;
    }
  };

  const pokemonVerifyName = (name) => {
    const nameJoin = name.replace(/\-/g, "");
    if (verifyPokemon[nameJoin]) {
      const { newName, img, altText } = verifyPokemon[nameJoin];
      return (
        <>
          {newName.charAt(0).toUpperCase() + newName.slice(1)}
          {verifyPokemon[nameJoin].newName === "nidoran" && (
            <IconGender src={img} alt={altText} />
          )}
        </>
      );
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  };

  const verifyWithoutGif = (name) => {
    const nameJoin = name.replace(/\-/g, "");

    if (withoutGif[nameJoin]) {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${withoutGif[nameJoin].id}.png`;
    } else {
      return `https://play.pokemonshowdown.com/sprites/ani/${pokemonVerifyUrl(
        name
      )}.gif`;
    }
  };

  return (
    <CardContainer
      key={name}
      onClick={(e) => {
        handleOpenMoveSelector({
          name,
          id,
          weight,
          height,
          stats,
          abilities,
          pokemonTypes,
          moves
        })
        // handleOpenModal({
        //   name,
        //   id,
        //   weight,
        //   height,
        //   stats,
        //   abilities,
        //   pokemonTypes,
        //   isCompareFull,
        // });
      }}
    >
      <LeftContent>
        <BoxPokemonImage
          background={PokemonConfig[pokemonTypes[0].type.name].gradientColor}
        >
          <PokemonImage
            width={withoutGif[name.replace(/\-/g, "")] && 100}
            src={verifyWithoutGif(name)}
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
