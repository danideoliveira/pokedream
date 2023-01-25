import {
  ContainerModal,
  ContainerNameId,
  PokemonName,
  PokemonId,
  ProgressBar,
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
} from "./Modal.styled";
import { PokemonConfig } from "../PokemonConfig/PokemonConfig";
import { images } from "../Images/Images";
import { colors } from "../../helpers/ColorPalette";
ContainerModal.setAppElement("#root");

export default function Modal({ modalIsOpen, handleCloseModal, pokemonInfo }) {
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

  const pokemonVerifyName = (name) => {
    if (!name) return;
    const nameJoin = name.replace("-", "");
    if (verify[nameJoin]) {
      const { newName, img, altText } = verify[nameJoin];
      return (
        <>
          {newName.charAt(0).toUpperCase() + newName.slice(1)}
          <TypeIcon width="4rem" height="4rem" marginLeft="7px" src={img} alt={altText} />
        </>
      );
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  };

  return (
    <ContainerModal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0, 0, 0, 80%)",
        },
      }}
    >
      <CloseButton onClick={handleCloseModal}>X</CloseButton>

      {pokemonInfo.pokemonTypes && (
        <Gradient
          background={
            PokemonConfig[pokemonInfo.pokemonTypes[0].type.name].gradientColor
          }
        />
      )}

      <LeftContent>
        <ContainerPokemonImage>
          <PokemonImage
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonInfo.id}.png`}
            alt={`${pokemonInfo.name}`}
          />
        </ContainerPokemonImage>

        <ContainerType>
          {pokemonInfo.pokemonTypes && (
            <>
              {pokemonInfo.pokemonTypes.map((pokemonType) => (
                <TypeCard
                  key={PokemonConfig[pokemonType.type.name].typeColor}
                  typeColor={PokemonConfig[pokemonType.type.name].gradientColor}
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

      <RightContent>
        <ContainerNameId>
          <PokemonName>{pokemonVerifyName(pokemonInfo.name)}</PokemonName>
          <PokemonId>#{pokemonInfo.id}</PokemonId>
        </ContainerNameId>

        <ContainerStats>
          {pokemonInfo.stats && (
            <>
              <ContainerStatName>
                <StatName>HP</StatName>
                <ProgressBar
                  max="100"
                  value={pokemonInfo.stats[0].base_stat}
                  barColor={colors.modalProgressBackground}
                  valueColor={colors.statsHp}
                />
                <StatValue>{pokemonInfo.stats[0].base_stat}</StatValue>
              </ContainerStatName>

              <ContainerStatName>
                <StatName>ATK</StatName>
                <ProgressBar
                  max="100"
                  value={pokemonInfo.stats[1].base_stat}
                  barColor={colors.modalProgressBackground}
                  valueColor={colors.statsAtk}
                />
                <StatValue>{pokemonInfo.stats[1].base_stat}</StatValue>
              </ContainerStatName>

              <ContainerStatName>
                <StatName>DEF</StatName>
                <ProgressBar
                  max="100"
                  value={pokemonInfo.stats[2].base_stat}
                  barColor={colors.modalProgressBackground}
                  valueColor={colors.statsDef}
                />
                <StatValue>{pokemonInfo.stats[2].base_stat}</StatValue>
              </ContainerStatName>

              <ContainerStatName>
                <StatName>SP.ATK</StatName>
                <ProgressBar
                  max="100"
                  value={pokemonInfo.stats[3].base_stat}
                  barColor={colors.modalProgressBackground}
                  valueColor={colors.statsSpAtk}
                />
                <StatValue>{pokemonInfo.stats[3].base_stat}</StatValue>
              </ContainerStatName>

              <ContainerStatName>
                <StatName>SP.DEF</StatName>
                <ProgressBar
                  max="100"
                  value={pokemonInfo.stats[4].base_stat}
                  barColor={colors.modalProgressBackground}
                  valueColor={colors.statsSpDef}
                />
                <StatValue>{pokemonInfo.stats[4].base_stat}</StatValue>
              </ContainerStatName>

              <ContainerStatName>
                <StatName>SPEED</StatName>
                <ProgressBar
                  max="100"
                  value={pokemonInfo.stats[5].base_stat}
                  barColor={colors.modalProgressBackground}
                  valueColor={colors.statsSpeed}
                />
                <StatValue>{pokemonInfo.stats[5].base_stat}</StatValue>
              </ContainerStatName>
            </>
          )}
        </ContainerStats>
      </RightContent>
    </ContainerModal>
  );
}
