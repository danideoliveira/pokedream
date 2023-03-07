import {
  ContainerModal,
  ContainerNameId,
  PokemonName,
  PokemonId,
  BoxProgressBar,
  ProgressBar,
  ProgressRevealer,
  BackButton,
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
  ContainerSelectedItem,
  Item,
  BoxSelectedItem,
  SelectedItem,
  ContainerMoveSlots,
  MoveSlot,
  MoveName,
  MoveIcon,
  MiddleContent,
  BoxMoveContent,
  MoveContent,
  ContentTitle,
  ContentValue,
  BoxMoveDescription,
  MoveDescription,
  MoveList,
  ButtonAddMove,
  BoxButtonSelectPokemon,
  ButtonSelectPokemon,
  BoxDeleteMove,
} from "./MoveSelector.styled";
import { PokemonConfig } from "../PokemonConfig/PokemonConfig";
import { StatConfig } from "../StatConfig/StatConfig";
import { colors } from "../../helpers/ColorPalette";
import { verifyPokemon } from "../../helpers/VerifyPokemon";
import PreLoader from "../PreLoader/PreLoader";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { images } from "../Images/Images";
import axios from "axios";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function MoveSelector({
  handleCloseMoveSelector,
  pokemonInfo,
  sendToTeam,
}) {
  const [loading, setLoading] = useState(true);
  const [moveConfig, setMoveConfig] = useState({
    name: "Selecione o movimento...",
    background: "#4C4C4C",
    img: "",
    description: "",
    pp: "",
    power: "",
    class: "",
  });
  const [moveOne, setMoveOne] = useState({ name: "" });
  const [moveTwo, setMoveTwo] = useState({ name: "" });
  const [moveThree, setMoveThree] = useState({ name: "" });
  const [moveFour, setMoveFour] = useState({ name: "" });
  const [isMoveSlotsComplete, setIsMoveSlotsComplete] = useState(false);
  const [allMoves, setAllMoves] = useState([
    moveOne,
    moveTwo,
    moveThree,
    moveFour,
  ]);

  const pokemonVerifyName = (name) => {
    if (!name) return;
    const nameJoin = name.replace(/-/g, "");
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

  const verifyMoves = (moveSelected) => {
    const moveSlots = [
      moveOne.name,
      moveTwo.name,
      moveThree.name,
      moveFour.name,
    ];

    if (!moveSlots.includes(moveSelected.name)) {
      if (moveOne.name.length === 0) {
        setMoveOne(moveSelected);
      } else if (moveTwo.name.length === 0) {
        setMoveTwo(moveSelected);
      } else if (moveThree.name.length === 0) {
        setMoveThree(moveSelected);
      } else if (moveFour.name.length === 0) {
        setMoveFour(moveSelected);
      }
    }
  };

  const getMoveData = async (url) => {
    let moveData = {};
    try {
      await axios
        .get(url)
        .then((response) => response.data)
        .then((data) => {
          moveData = data;
        });

      return moveData;
    } catch (e) {
      console.log(e);
    }
  };

  const verifyIsMoveSlotsComplete = () => {
    const slots = [moveOne, moveTwo, moveThree, moveFour];
    const verifiedSlots = [];

    slots.forEach((slot) => {
      if (slot.name === "") {
        verifiedSlots.push(true);
      }
    });

    setIsMoveSlotsComplete(!verifiedSlots.includes(true));
  };

  useEffect(() => {
    verifyIsMoveSlotsComplete();
    setAllMoves([moveOne, moveTwo, moveThree, moveFour]);
  }, [moveOne, moveTwo, moveThree, moveFour]);

  const deleteMove = (index) => {
    const updateMove = [setMoveOne, setMoveTwo, setMoveThree, setMoveFour];
    updateMove[index]({ name: "" });
  };

  return (
    <ContainerModal>
      <BackButton
        onClick={() => {
          handleCloseMoveSelector();
        }}
      >
        <BsFillArrowLeftSquareFill />
      </BackButton>

      {loading && <PreLoader />}
      <div
        className="wrap-left-content"
        style={{ display: loading ? "none" : "flex" }}
      >
        <LeftContent>
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

          <ContainerMoveSlots>
            {allMoves.map((move, index) => (
              <MoveSlot
                key={index}
                style={move.background && { background: move.background }}
              >
                {move.name && (
                  <BoxDeleteMove>
                    <button
                      className="button-delete-move"
                      onClick={() => {
                        deleteMove(index);
                      }}
                    >
                      X
                    </button>
                  </BoxDeleteMove>
                )}
                <MoveName style={{ margin: move.name ? "initial" : "0 auto" }}>
                  {move.name || "--"}
                </MoveName>
                {move.img && (
                  <MoveIcon width="20px" src={move.img} alt="type icon" />
                )}
              </MoveSlot>
            ))}
          </ContainerMoveSlots>
        </LeftContent>
      </div>

      <div
        className="wrap-right-content"
        style={{ display: loading ? "none" : "flex" }}
      >
        <MiddleContent>
          <ContainerSelectedItem>
            <BoxSelectedItem
              style={{
                background: moveConfig.background,
                color: "white",
              }}
            >
              <SelectedItem>
                {moveConfig.name}{" "}
                {moveConfig.img && (
                  <MoveIcon width="20px" src={moveConfig.img} alt="type icon" />
                )}
              </SelectedItem>
            </BoxSelectedItem>
          </ContainerSelectedItem>

          <BoxMoveContent>
            <MoveContent>
              <ContentTitle style={{ background: moveConfig.background }}>
                PP
              </ContentTitle>
              <ContentValue>{moveConfig.pp || "--"}</ContentValue>
            </MoveContent>
            <MoveContent>
              <ContentTitle style={{ background: moveConfig.background }}>
                POWER
              </ContentTitle>
              <ContentValue>{moveConfig.power || "--"}</ContentValue>
            </MoveContent>
            <MoveContent>
              <ContentTitle style={{ background: moveConfig.background }}>
                CLASS
              </ContentTitle>
              <ContentValue>{moveConfig.class || "--"}</ContentValue>
            </MoveContent>
          </BoxMoveContent>

          <BoxMoveDescription>
            {moveConfig.description && (
              <MoveDescription>{moveConfig.description}</MoveDescription>
            )}
          </BoxMoveDescription>

          <MoveList>
            {pokemonInfo.moves.map((currentMove) => (
              <Item
                key={currentMove.move.name}
                onClick={async (e) => {
                  const moveData = await getMoveData(currentMove.move.url);
                  setMoveConfig({
                    name: e.target.textContent,
                    background: PokemonConfig[moveData.type.name].typeColor,
                    img: PokemonConfig[moveData.type.name].img,
                    description:
                      moveData.effect_entries.length !== 0
                        ? moveData.effect_entries[0].effect.replace(
                            /\$effect_chance/g,
                            moveData.effect_chance
                          )
                        : "",
                    pp: moveData.pp,
                    power: moveData.power,
                    class: moveData.damage_class.name,
                  });
                }}
              >
                {currentMove.move.name.replace(/-/g, " ")}
              </Item>
            ))}
          </MoveList>

          <ButtonAddMove
            onClick={() => {
              if (!moveConfig.name.includes("Selecione o movimento...")) {
                verifyMoves(moveConfig);
              }
            }}
            disabled={isMoveSlotsComplete}
          >
            +
          </ButtonAddMove>
        </MiddleContent>

        <RightContent>
          <ContainerNameId>
            <PokemonName>{pokemonVerifyName(pokemonInfo.name)}</PokemonName>
            <PokemonId>#{pokemonInfo.id}</PokemonId>
          </ContainerNameId>

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
                            PokemonConfig[pokemonInfo.pokemonTypes[0].type.name]
                              .typeColor
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

          <BoxButtonSelectPokemon>
            <ButtonSelectPokemon
              onClick={() => {
                const moveSlots = [
                  moveOne.name,
                  moveTwo.name,
                  moveThree.name,
                  moveFour.name,
                ];

                !moveSlots.includes("") &&
                  sendToTeam({
                    pokemon: pokemonInfo,
                    moves: [moveOne, moveTwo, moveThree, moveFour],
                  });
              }}
              disabled={!isMoveSlotsComplete}
            >
              Selecionar
            </ButtonSelectPokemon>
          </BoxButtonSelectPokemon>
        </RightContent>
      </div>
    </ContainerModal>
  );
}
