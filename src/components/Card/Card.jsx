import {
  CardContainer,
  LeftContent,
  PokemonImageContainer,
  PokemonTypeContainer,
  RightContent,
  Text,
} from "./Card.styled";
import { PokemonConfig } from "../PokemonConfig/PokemonConfig";
import { colors } from "../../helpers/ColorPalette";
import { images } from "../Images/Images";

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
  const verify = {
    nidoranm: {
      newName: "nidoran",
      urlName: "nidoran",
      img: images.iconMale,
      altText: "icon male",
    },
    nidoranf: {
      newName: "nidoran",
      urlName: "nidoran-f",
      img: images.iconFemale,
      altText: "icon female",
    },
  };

  const pokemonVerifyUrl = (name) => {
    const nameJoin = name.replace("-", "");
    if (verify[nameJoin]) {
      return verify[nameJoin].urlName;
    } else {
      return name;
    }
  };

  const pokemonVerifyName = (name) => {
    const nameJoin = name.replace("-", "");
    if (verify[nameJoin]) {
      const { newName, img, altText } = verify[nameJoin];
      return (
        <>
          {newName.charAt(0).toUpperCase() + newName.slice(1)}
          <img src={img} alt={altText} />
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
        <PokemonImageContainer
          background={PokemonConfig[pokemonTypes[0].type.name].gradientColor}
        >
          <img
            src={`https://play.pokemonshowdown.com/sprites/ani/${pokemonVerifyUrl(
              name
            )}.gif`}
            alt={`${name} gif`}
          />
        </PokemonImageContainer>
      </LeftContent>
      <RightContent>
        <div className="div-pokemon-name">
          <Text fontSize="2.2rem" color={colors.cardText} fontWeight="700">
            {pokemonVerifyName(name)}
          </Text>
          <Text fontSize="2rem" color={colors.cardId} fontWeight="700">
            #{id}
          </Text>
        </div>
        <div className="div-pokemon-type">
          {pokemonTypes.map((pokemonType) => (
            <PokemonTypeContainer
              key={PokemonConfig[pokemonType.type.name].typeColor}
              typeColor={PokemonConfig[pokemonType.type.name].gradientColor}
            >
              <Text fontSize="1.8rem" color={colors.cardText} fontWeight="700">
                {pokemonType.type.name}
              </Text>
              <img
                src={PokemonConfig[pokemonType.type.name].img}
                alt={`${pokemonType.type.name} icon`}
              />
            </PokemonTypeContainer>
          ))}
        </div>
        
      </RightContent>
    </CardContainer>
  );
}
