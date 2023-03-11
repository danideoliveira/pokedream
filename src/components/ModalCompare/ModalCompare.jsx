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
  ProgressRevealer,
  BoxProgressBar,
  ProgressBar,
  SwiperBox,
  ContainerOtherInfos,
  BoxWeightHeight,
  Weight,
  Height,
  BoxWeight,
  IconWeight,
  BoxHeight,
  IconHeight,
  BoxAbilities,
  Ability,
  AbilityLabel,
} from "./ModalCompare.styled";
import { PokemonConfig } from "../PokemonConfig/PokemonConfig";
import { colors } from "../../helpers/ColorPalette";
import { StatConfig } from "../StatConfig/StatConfig";
import { verifyPokemon } from "../../helpers/VerifyPokemon";
import { withoutGif } from "../../helpers/WithoutGif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { images } from "../Images/Images";
import WeaknessAndAdvantage from "../WeaknessAndAdvantage/WeaknessAndAdvantage";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
ContainerModal.setAppElement("#root");

export default function ModalCompare({
  modalCompareIsOpen,
  handleCloseModalCompare,
  pokemonInfo,
}) {
  const { firstPokemon, secondPokemon } = pokemonInfo;

  const pokemonVerifyUrl = (name) => {
    const nameJoin = name.replace("-", "");
    if (verifyPokemon[nameJoin]) {
      return verifyPokemon[nameJoin].urlName;
    } else {
      return name;
    }
  };

  const pokemonVerifyName = (name) => {
    if (!name) return;
    const nameJoin = name.replace("-", "");
    if (verifyPokemon[nameJoin]) {
      const { newName, img, altText } = verifyPokemon[nameJoin];
      return (
        <>
          {newName.charAt(0).toUpperCase() + newName.slice(1)}
          {verifyPokemon[nameJoin].newName === "nidoran" && (
            <TypeIcon
              width="4rem"
              height="4rem"
              marginLeft="7px"
              src={img}
              alt={altText}
            />
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
    <ContainerModal
      isOpen={modalCompareIsOpen}
      onRequestClose={handleCloseModalCompare}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0, 0, 0, 80%)",
          zIndex: 999,
        },
      }}
    >
      {firstPokemon && (
        <>
          <CloseButton onClick={handleCloseModalCompare}>X</CloseButton>

          <ContentContainer>
            <ContainerPokemonImage
              gradientColor={
                PokemonConfig[firstPokemon.pokemonTypes[0].type.name]
                  .gradientColor
              }
            >
              <PokemonImage
                width={withoutGif[firstPokemon.name.replace(/\-/g, "")] && 100}
                src={verifyWithoutGif(firstPokemon.name)}
                alt={`${firstPokemon.name}`}
                style={{ transform: "rotateY(180deg)" }}
              />
            </ContainerPokemonImage>

            <ContainerNameId>
              <PokemonName>{pokemonVerifyName(firstPokemon.name)}</PokemonName>
              <PokemonId>#{firstPokemon.id}</PokemonId>
            </ContainerNameId>

            <ContainerType>
              {firstPokemon.pokemonTypes && (
                <>
                  {firstPokemon.pokemonTypes.map((pokemonType) => (
                    <TypeCard
                      key={PokemonConfig[pokemonType.type.name].typeColor}
                      typeColor={PokemonConfig[pokemonType.type.name].typeColor}
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

            <SwiperBox>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <ContainerStats>
                    {firstPokemon.stats && (
                      <>
                        {firstPokemon.stats.map((stat, index) => (
                          <ContainerStatName key={Number(index)}>
                            <StatName>
                              {StatConfig[stat.stat.name.replace("-", "")].name}
                            </StatName>
                            <BoxProgressBar>
                              <ProgressRevealer>
                                <ProgressBar
                                  max="100"
                                  value={stat.base_stat}
                                  barColor={colors.modalProgressBackground}
                                  valueColor={
                                    StatConfig[stat.stat.name.replace("-", "")]
                                      .color
                                  }
                                />
                              </ProgressRevealer>
                            </BoxProgressBar>
                            <StatValue
                              valueColor={() => {
                                if (
                                  stat.base_stat >
                                  secondPokemon.stats[index].base_stat
                                ) {
                                  return colors.statsHigherValue;
                                } else if (
                                  stat.base_stat <
                                  secondPokemon.stats[index].base_stat
                                ) {
                                  return colors.statsLowerValue;
                                } else {
                                  return colors.statsEqualValue;
                                }
                              }}
                            >
                              {stat.base_stat}
                            </StatValue>
                          </ContainerStatName>
                        ))}
                      </>
                    )}
                  </ContainerStats>
                </SwiperSlide>

                <SwiperSlide>
                  <ContainerOtherInfos>
                    <BoxWeightHeight>
                      <BoxWeight>
                        <IconWeight src={images.iconWeight} />
                        <Weight
                          valueColor={() => {
                            if (
                              firstPokemon.weight / 10 >
                              secondPokemon.weight / 10
                            ) {
                              return colors.statsHigherValue;
                            } else if (
                              firstPokemon.weight / 10 <
                              secondPokemon.weight / 10
                            ) {
                              return colors.statsLowerValue;
                            } else {
                              return colors.statsEqualValue;
                            }
                          }}
                        >
                          {firstPokemon.weight / 10} KG
                        </Weight>
                      </BoxWeight>
                      <BoxHeight>
                        <IconHeight src={images.iconHeight} />
                        <Height
                          valueColor={() => {
                            if (
                              firstPokemon.height / 10 >
                              secondPokemon.height / 10
                            ) {
                              return colors.statsHigherValue;
                            } else if (
                              firstPokemon.height / 10 <
                              secondPokemon.height / 10
                            ) {
                              return colors.statsLowerValue;
                            } else {
                              return colors.statsEqualValue;
                            }
                          }}
                        >
                          {firstPokemon.height / 10} M
                        </Height>
                      </BoxHeight>
                    </BoxWeightHeight>
                    <AbilityLabel>Habilidades</AbilityLabel>
                    <BoxAbilities>
                      {firstPokemon.abilities &&
                        firstPokemon.abilities.map((currentAbility) => (
                          <Ability
                            key={currentAbility.ability.name}
                            background={
                              PokemonConfig[
                                firstPokemon.pokemonTypes[0].type.name
                              ].typeColor
                            }
                          >
                            {currentAbility.ability.name.replace(/-/g, " ")}
                          </Ability>
                        ))}
                    </BoxAbilities>
                  </ContainerOtherInfos>
                </SwiperSlide>
                <SwiperSlide>
                  <WeaknessAndAdvantage pokemonInfo={firstPokemon} />
                </SwiperSlide>
              </Swiper>
            </SwiperBox>
          </ContentContainer>

          <ContentContainer>
            <ContainerPokemonImage
              gradientColor={
                PokemonConfig[secondPokemon.pokemonTypes[0].type.name]
                  .gradientColor
              }
            >
              <PokemonImage
                width={withoutGif[secondPokemon.name.replace(/\-/g, "")] && 100}
                src={verifyWithoutGif(secondPokemon.name)}
                alt={`${secondPokemon.name}`}
              />
            </ContainerPokemonImage>

            <ContainerNameId>
              <PokemonName>{pokemonVerifyName(secondPokemon.name)}</PokemonName>
              <PokemonId>#{secondPokemon.id}</PokemonId>
            </ContainerNameId>

            <ContainerType>
              {secondPokemon.pokemonTypes && (
                <>
                  {secondPokemon.pokemonTypes.map((pokemonType) => (
                    <TypeCard
                      key={PokemonConfig[pokemonType.type.name].typeColor}
                      typeColor={PokemonConfig[pokemonType.type.name].typeColor}
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

            <SwiperBox>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <ContainerStats>
                    {secondPokemon.stats && (
                      <>
                        {secondPokemon.stats.map((stat, index) => (
                          <ContainerStatName key={Number(index)}>
                            <StatName>
                              {StatConfig[stat.stat.name.replace("-", "")].name}
                            </StatName>
                            <BoxProgressBar>
                              <ProgressRevealer>
                                <ProgressBar
                                  max="100"
                                  value={stat.base_stat}
                                  barColor={colors.modalProgressBackground}
                                  valueColor={
                                    StatConfig[stat.stat.name.replace("-", "")]
                                      .color
                                  }
                                />
                              </ProgressRevealer>
                            </BoxProgressBar>
                            <StatValue
                              valueColor={() => {
                                if (
                                  stat.base_stat >
                                  firstPokemon.stats[index].base_stat
                                ) {
                                  return colors.statsHigherValue;
                                } else if (
                                  stat.base_stat <
                                  firstPokemon.stats[index].base_stat
                                ) {
                                  return colors.statsLowerValue;
                                } else {
                                  return colors.statsEqualValue;
                                }
                              }}
                            >
                              {stat.base_stat}
                            </StatValue>
                          </ContainerStatName>
                        ))}
                      </>
                    )}
                  </ContainerStats>
                </SwiperSlide>

                <SwiperSlide>
                  <ContainerOtherInfos>
                    <BoxWeightHeight>
                      <BoxWeight>
                        <IconWeight src={images.iconWeight} />
                        <Weight
                          valueColor={() => {
                            if (
                              secondPokemon.weight / 10 >
                              firstPokemon.weight / 10
                            ) {
                              return colors.statsHigherValue;
                            } else if (
                              secondPokemon.weight / 10 <
                              firstPokemon.weight / 10
                            ) {
                              return colors.statsLowerValue;
                            } else {
                              return colors.statsEqualValue;
                            }
                          }}
                        >
                          {secondPokemon.weight / 10} KG
                        </Weight>
                      </BoxWeight>
                      <BoxHeight>
                        <IconHeight src={images.iconHeight} />
                        <Height
                          valueColor={() => {
                            if (
                              secondPokemon.height / 10 >
                              firstPokemon.height / 10
                            ) {
                              return colors.statsHigherValue;
                            } else if (
                              secondPokemon.height / 10 <
                              firstPokemon.height / 10
                            ) {
                              return colors.statsLowerValue;
                            } else {
                              return colors.statsEqualValue;
                            }
                          }}
                        >
                          {secondPokemon.height / 10} M
                        </Height>
                      </BoxHeight>
                    </BoxWeightHeight>
                    <AbilityLabel>Habilidades</AbilityLabel>
                    <BoxAbilities>
                      {secondPokemon.abilities &&
                        secondPokemon.abilities.map((currentAbility) => (
                          <Ability
                            key={currentAbility.ability.name}
                            background={
                              PokemonConfig[
                                secondPokemon.pokemonTypes[0].type.name
                              ].typeColor
                            }
                          >
                            {currentAbility.ability.name.replace(/-/g, " ")}
                          </Ability>
                        ))}
                    </BoxAbilities>
                  </ContainerOtherInfos>
                </SwiperSlide>
                <SwiperSlide>
                  <WeaknessAndAdvantage pokemonInfo={secondPokemon} />
                </SwiperSlide>
              </Swiper>
            </SwiperBox>
          </ContentContainer>
        </>
      )}
    </ContainerModal>
  );
}
