import {
  ContainerModal,
  ContentContainer,
  ContainerPokemonImage,
  ContainerType,
  PokemonImage,
  TypeCard,
  TypeIcon,
  TypeName,
  CloseButton,
  ContainerNameId,
  PokemonName,
  PokemonId,
  ContainerStatName,
  ContainerStats,
  StatName,
  StatValue,
  ProgressBar,
} from "./ModalCompare.styled";
import { PokemonConfig } from "../PokemonConfig/PokemonConfig";
import { images } from "../Images/Images";
import { colors } from "../../helpers/ColorPalette";
import { StatConfig } from "../StatConfig/StatConfig";
ContainerModal.setAppElement("#root");

export default function ModalCompare({
  modalCompareIsOpen,
  handleCloseModalCompare,
  pokemonInfo,
}) {
  const { firstPokemon, secondPokemon } = pokemonInfo;

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
    if (!name) return;
    const nameJoin = name.replace("-", "");
    if (verify[nameJoin]) {
      const { newName, img, altText } = verify[nameJoin];
      return (
        <>
          {newName.charAt(0).toUpperCase() + newName.slice(1)}
          <TypeIcon
            width="4rem"
            height="4rem"
            marginLeft="7px"
            src={img}
            alt={altText}
          />
        </>
      );
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  };
  return (
    <ContainerModal
      isOpen={modalCompareIsOpen}
      onRequestClose={handleCloseModalCompare}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0, 0, 0, 80%)",
        },
      }}
    >
      {firstPokemon && (
        <>
          <CloseButton onClick={handleCloseModalCompare}>X</CloseButton>

          <ContentContainer>
            <ContainerNameId>
              <PokemonName>{pokemonVerifyName(firstPokemon.name)}</PokemonName>
              <PokemonId>#{firstPokemon.id}</PokemonId>
            </ContainerNameId>

            <ContainerPokemonImage>
              <PokemonImage
                src={`https://play.pokemonshowdown.com/sprites/ani/${pokemonVerifyUrl(
                  firstPokemon.name
                )}.gif`}
                alt={`${firstPokemon.name}`}
                style={{ transform: "rotateY(180deg)" }}
              />
            </ContainerPokemonImage>

            <ContainerType>
              {firstPokemon.pokemonTypes && (
                <>
                  {firstPokemon.pokemonTypes.map((pokemonType) => (
                    <TypeCard
                      key={PokemonConfig[pokemonType.type.name].typeColor}
                      typeColor={
                        PokemonConfig[pokemonType.type.name].gradientColor
                      }
                    >
                      <TypeName
                        fontSize="1.6rem"
                        color={colors.modalTypeNameColor}
                        fontWeight="700"
                      >
                        {pokemonType.type.name}
                      </TypeName>
                      <TypeIcon
                        src={PokemonConfig[pokemonType.type.name].img}
                        alt={`${pokemonType.type.name} icon`}
                      />
                    </TypeCard>
                  ))}
                </>
              )}
            </ContainerType>

            <ContainerStats>
              {firstPokemon.stats && (
                <>
                  {firstPokemon.stats.map((stat, index) => (
                    <ContainerStatName key={Number(index)}>
                      <StatName>
                        {StatConfig[stat.stat.name.replace("-", "")].name}
                      </StatName>
                      <ProgressBar
                        max="100"
                        value={stat.base_stat}
                        barColor={colors.modalProgressBackground}
                        valueColor={
                          StatConfig[stat.stat.name.replace("-", "")].color
                        }
                      />
                      <StatValue
                        valueColor={
                          stat.base_stat > secondPokemon.stats[index].base_stat
                            ? colors.statsHigherValue
                            : colors.statsLowerValue
                        }
                      >
                        {stat.base_stat}
                      </StatValue>
                    </ContainerStatName>
                  ))}
                </>
              )}
            </ContainerStats>
          </ContentContainer>

          <ContentContainer>
            <ContainerNameId>
              <PokemonName>{pokemonVerifyName(secondPokemon.name)}</PokemonName>
              <PokemonId>#{secondPokemon.id}</PokemonId>
            </ContainerNameId>

            <ContainerPokemonImage>
              <PokemonImage
                src={`https://play.pokemonshowdown.com/sprites/ani/${pokemonVerifyUrl(
                  secondPokemon.name
                )}.gif`}
                alt={`${secondPokemon.name}`}
              />
            </ContainerPokemonImage>

            <ContainerType>
              {secondPokemon.pokemonTypes && (
                <>
                  {secondPokemon.pokemonTypes.map((pokemonType) => (
                    <TypeCard
                      key={PokemonConfig[pokemonType.type.name].typeColor}
                      typeColor={
                        PokemonConfig[pokemonType.type.name].gradientColor
                      }
                    >
                      <TypeName
                        fontSize="1.6rem"
                        color={colors.modalTypeNameColor}
                        fontWeight="700"
                      >
                        {pokemonType.type.name}
                      </TypeName>
                      <TypeIcon
                        src={PokemonConfig[pokemonType.type.name].img}
                        alt={`${pokemonType.type.name} icon`}
                      />
                    </TypeCard>
                  ))}
                </>
              )}
            </ContainerType>

            <ContainerStats>
              {secondPokemon.stats && (
                <>
                  {secondPokemon.stats.map((stat, index) => (
                    <ContainerStatName key={Number(index)}>
                      <StatName>
                        {StatConfig[stat.stat.name.replace("-", "")].name}
                      </StatName>
                      <ProgressBar
                        max="100"
                        value={stat.base_stat}
                        barColor={colors.modalProgressBackground}
                        valueColor={
                          StatConfig[stat.stat.name.replace("-", "")].color
                        }
                      />
                      <StatValue
                        valueColor={
                          stat.base_stat > firstPokemon.stats[index].base_stat
                            ? colors.statsHigherValue
                            : colors.statsLowerValue
                        }
                      >
                        {stat.base_stat}
                      </StatValue>
                    </ContainerStatName>
                  ))}
                </>
              )}
            </ContainerStats>
          </ContentContainer>
        </>
      )}
    </ContainerModal>
  );
}
