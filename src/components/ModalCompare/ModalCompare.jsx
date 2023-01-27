import {
  ContainerModal,
  LeftContent,
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
import { useState } from "react";
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

          <LeftContent>
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
                  <ContainerStatName>
                    <StatName>HP</StatName>
                    <ProgressBar
                      max="100"
                      value={firstPokemon.stats[0].base_stat}
                      barColor={colors.modalProgressBackground}
                      valueColor={colors.statsHp}
                    />
                    <StatValue>{firstPokemon.stats[0].base_stat}</StatValue>
                  </ContainerStatName>

                  <ContainerStatName>
                    <StatName>ATK</StatName>
                    <ProgressBar
                      max="100"
                      value={firstPokemon.stats[1].base_stat}
                      barColor={colors.modalProgressBackground}
                      valueColor={colors.statsAtk}
                    />
                    <StatValue>{firstPokemon.stats[1].base_stat}</StatValue>
                  </ContainerStatName>

                  <ContainerStatName>
                    <StatName>DEF</StatName>
                    <ProgressBar
                      max="100"
                      value={firstPokemon.stats[2].base_stat}
                      barColor={colors.modalProgressBackground}
                      valueColor={colors.statsDef}
                    />
                    <StatValue>{firstPokemon.stats[2].base_stat}</StatValue>
                  </ContainerStatName>

                  <ContainerStatName>
                    <StatName>SP.ATK</StatName>
                    <ProgressBar
                      max="100"
                      value={firstPokemon.stats[3].base_stat}
                      barColor={colors.modalProgressBackground}
                      valueColor={colors.statsSpAtk}
                    />
                    <StatValue>{firstPokemon.stats[3].base_stat}</StatValue>
                  </ContainerStatName>

                  <ContainerStatName>
                    <StatName>SP.DEF</StatName>
                    <ProgressBar
                      max="100"
                      value={firstPokemon.stats[4].base_stat}
                      barColor={colors.modalProgressBackground}
                      valueColor={colors.statsSpDef}
                    />
                    <StatValue>{firstPokemon.stats[4].base_stat}</StatValue>
                  </ContainerStatName>

                  <ContainerStatName>
                    <StatName>SPEED</StatName>
                    <ProgressBar
                      max="100"
                      value={firstPokemon.stats[5].base_stat}
                      barColor={colors.modalProgressBackground}
                      valueColor={colors.statsSpeed}
                    />
                    <StatValue>{firstPokemon.stats[5].base_stat}</StatValue>
                  </ContainerStatName>
                </>
              )}
            </ContainerStats>
          </LeftContent>

          <LeftContent>
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
                  <ContainerStatName>
                    <StatName>HP</StatName>
                    <ProgressBar
                      max="100"
                      value={secondPokemon.stats[0].base_stat}
                      barColor={colors.modalProgressBackground}
                      valueColor={colors.statsHp}
                    />
                    <StatValue>{secondPokemon.stats[0].base_stat}</StatValue>
                  </ContainerStatName>

                  <ContainerStatName>
                    <StatName>ATK</StatName>
                    <ProgressBar
                      max="100"
                      value={secondPokemon.stats[1].base_stat}
                      barColor={colors.modalProgressBackground}
                      valueColor={colors.statsAtk}
                    />
                    <StatValue>{secondPokemon.stats[1].base_stat}</StatValue>
                  </ContainerStatName>

                  <ContainerStatName>
                    <StatName>DEF</StatName>
                    <ProgressBar
                      max="100"
                      value={secondPokemon.stats[2].base_stat}
                      barColor={colors.modalProgressBackground}
                      valueColor={colors.statsDef}
                    />
                    <StatValue>{secondPokemon.stats[2].base_stat}</StatValue>
                  </ContainerStatName>

                  <ContainerStatName>
                    <StatName>SP.ATK</StatName>
                    <ProgressBar
                      max="100"
                      value={secondPokemon.stats[3].base_stat}
                      barColor={colors.modalProgressBackground}
                      valueColor={colors.statsSpAtk}
                    />
                    <StatValue>{secondPokemon.stats[3].base_stat}</StatValue>
                  </ContainerStatName>

                  <ContainerStatName>
                    <StatName>SP.DEF</StatName>
                    <ProgressBar
                      max="100"
                      value={secondPokemon.stats[4].base_stat}
                      barColor={colors.modalProgressBackground}
                      valueColor={colors.statsSpDef}
                    />
                    <StatValue>{secondPokemon.stats[4].base_stat}</StatValue>
                  </ContainerStatName>

                  <ContainerStatName>
                    <StatName>SPEED</StatName>
                    <ProgressBar
                      max="100"
                      value={secondPokemon.stats[5].base_stat}
                      barColor={colors.modalProgressBackground}
                      valueColor={colors.statsSpeed}
                    />
                    <StatValue>{secondPokemon.stats[5].base_stat}</StatValue>
                  </ContainerStatName>
                </>
              )}
            </ContainerStats>
          </LeftContent>
        </>
      )}
    </ContainerModal>
  );
}
