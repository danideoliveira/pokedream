import {
  ContainerModal,
  ContainerNameId,
  PokemonName,
  PokemonId,
  BoxProgressBar,
  ProgressBar,
  ProgressRevealer,
  Gradient,
  CloseButton,
  ContainerStats,
  ContainerStatName,
  StatName,
  StatValue,
  RightContent,
  LeftContent,
  TypeName,
  TypeCard,
  TypeIcon,
  ContainerType,
  ContainerPokemonImage,
  PokemonImage,
  BoxCompareButton,
  CompareButton,
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
} from "./Modal.styled";
import { PokemonConfig } from "../PokemonConfig/PokemonConfig";
import { StatConfig } from "../StatConfig/StatConfig";
import { colors } from "../../helpers/ColorPalette";
import { verifyPokemon } from "../../helpers/VerifyPokemon";
import PreLoader from "../PreLoader/PreLoader";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { images } from "../Images/Images";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

ContainerModal.setAppElement("#root");

export default function Modal({
  modalIsOpen,
  handleCloseModal,
  pokemonInfo,
  sendToCompare,
}) {
  const [loading, setLoading] = useState(true);

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

  const verifyCompareFull = () => {
    if (!pokemonInfo.isCompareFull) return;
    return (
      pokemonInfo.isCompareFull.first.length !== 0 &&
      pokemonInfo.isCompareFull.second.length !== 0
    );
  };

  return (
    <ContainerModal
      isOpen={modalIsOpen}
      onRequestClose={() => {
        handleCloseModal();
        setLoading(true);
      }}
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
      <CloseButton
        onClick={() => {
          handleCloseModal();
          setLoading(true);
        }}
      >
        X
      </CloseButton>
      {pokemonInfo.pokemonTypes && (
        <Gradient
          background={
            PokemonConfig[pokemonInfo.pokemonTypes[0].type.name].gradientColor
          }
        />
      )}

      <LeftContent style={{ display: !loading ? "flex" : "none" }}>
        <ContainerPokemonImage>
          <PokemonImage
            onLoad={(e) => {
              const image = e.target;
              if (image.complete) {
                setTimeout(() => {
                  setLoading(false);
                }, 500);
              }
            }}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`}
            alt={`${pokemonInfo.name}`}
          />
        </ContainerPokemonImage>

        <ContainerType>
          {pokemonInfo.pokemonTypes && (
            <>
              {pokemonInfo.pokemonTypes.map((pokemonType) => (
                <TypeCard
                  key={PokemonConfig[pokemonType.type.name].typeColor}
                  typeColor={PokemonConfig[pokemonType.type.name].typeColor}
                >
                  <TypeName
                    fontSize="1.8rem"
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
      </LeftContent>
      {loading ? (
        <PreLoader height="100vh" />
      ) : (
        <>
          <RightContent>
            <ContainerNameId>
              <PokemonName>{pokemonVerifyName(pokemonInfo.name)}</PokemonName>
              <PokemonId>#{pokemonInfo.id}</PokemonId>
            </ContainerNameId>

            <SwiperBox>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <ContainerStats>
                    {pokemonInfo.stats && (
                      <>
                        {pokemonInfo.stats.map((stat, index) => (
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
                        <Weight>{pokemonInfo.weight / 10} KG</Weight>
                      </BoxWeight>
                      <BoxHeight>
                        <IconHeight src={images.iconHeight} />
                        <Height>{pokemonInfo.height / 10} M</Height>
                      </BoxHeight>
                    </BoxWeightHeight>
                    <AbilityLabel>Habilidades</AbilityLabel>
                    <BoxAbilities>
                      {pokemonInfo.abilities &&
                        pokemonInfo.abilities.map((currentAbility) => (
                          <Ability
                            key={currentAbility.ability.name}
                            background={
                              PokemonConfig[
                                pokemonInfo.pokemonTypes[0].type.name
                              ].typeColor
                            }
                          >
                            {currentAbility.ability.name.replace(/-/g, " ")}
                          </Ability>
                        ))}
                    </BoxAbilities>
                  </ContainerOtherInfos>
                </SwiperSlide>
              </Swiper>
            </SwiperBox>

            <BoxCompareButton>
              <CompareButton
                disabled={pokemonInfo && verifyCompareFull()}
                onClick={() => {
                  sendToCompare(pokemonInfo);
                  handleCloseModal();
                }}
              >
                Comparar
              </CompareButton>
            </BoxCompareButton>
          </RightContent>
        </>
      )}
    </ContainerModal>
  );
}
