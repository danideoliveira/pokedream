import styled, { keyframes } from "styled-components";
import ReactModal from "react-modal";
import { colors } from "../../helpers/ColorPalette";
import { setFlexbox } from "../../helpers/Mixins";
import { AnimationProgressValue, FadeLeft } from "../../helpers/Animations";

// CONTAINER MODAL
export const ContainerModal = styled.div`
  ${setFlexbox("space-around", "center", "row")}
  background: ${colors.modalBackground};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  padding: 25px;
  border-radius: 5px;
  z-index: 5;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.scrollbarModalColor};
  }

  &::-webkit-scrollbar-track {
    background: ${colors.scrollbarModalBackground};
  }

  &:focus {
    border: none;
    outline: none;
  }

  @media (min-width: 871px) and (max-width: 1200px) {
    ${setFlexbox("flex-start", "center", "column")};
    overflow-y: auto;
    overflow-x: hidden;
    height: 90%;
  }

  @media (min-width: 320px) and (max-width: 870px) {
    ${setFlexbox("flex-start", "center", "column")};
    height: 100%;
    padding: 0;
  }

  .wrap-left-content {
    ${setFlexbox("center", "center", "row")};
    width: 40%;

    @media (min-width: 320px) and (max-width: 1200px) {
      width: 90%;
    }
  }

  .wrap-right-content {
    ${setFlexbox("space-evenly", "center", "row")};
    width: 60%;
    height: 90%;

    @media (min-width: 871px) and (max-width: 1200px) {
      width: 90%;
      height: 100%;
    }

    @media (min-width: 320px) and (max-width: 870px) {
      ${setFlexbox("space-evenly", "center", "column")};
      height: auto;
      width: 90%;
    }
  }
`;

// LEFT CONTENT
export const LeftContent = styled.div`
  ${setFlexbox("space-between", "center", "column")}
  height: 90%;
  width: 90%;
  z-index: 2;

  @media (min-width: 871px) and (max-width: 1200px) {
    width: 80%;
    margin: 5rem 0;
  }

  @media (min-width: 320px) and (max-width: 870px) {
    width: 90%;
    margin: 5rem 0;
  }
`;

// MOVE SLOTS
export const ContainerMoveSlots = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  place-items: center;
  width: 100%;

  @media (min-width: 320px) and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MoveSlot = styled.div`
  ${setFlexbox("space-between", "center", "row")}
  width: 100%;
  height: 60px;
  font-size: 2rem;
  border-radius: 5px;
  background: #161616;
  text-align: center;
  color: white;
  padding: 0 2rem;
  position: relative;

  &:hover {
    .button-delete-move {
      right: 0;
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;

export const MoveName = styled.p`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
  height: 60px;
  font-size: 2rem;
`;

export const MoveIcon = styled.img``;

export const BoxDeleteMove = styled.div`
  ${setFlexbox("flex-end", "flex-start", "row")}
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  left: 0;

  .button-delete-move {
    position: relative;
    right: -25%;
    background: #f25050;
    color: #fff;
    font-weight: 600;
    font-size: 1.6rem;
    height: 100%;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 5px;
    width: 25%
  }
`;

// MIDDLE CONTENT
export const MiddleContent = styled.section`
  ${setFlexbox("space-between", "center", "column")}
  width: 35%;
  height: 100%;

  @media (min-width: 981px) and (max-width: 1200px) {
    width: 40%;
    margin-left: 6rem;
  }

  @media (min-width: 871px) and (max-width: 980px) {
    margin-left: 3rem;
  }

  @media (min-width: 320px) and (max-width: 870px) {
    margin-left: 0;
    width: 90%;
  }
`;

// MOVE SELECTOR
export const ContainerSelectedItem = styled.div`
  width: 100%;
  min-width: 16rem;
  position: relative;
  border-radius: 5px;

  @media (min-width: 320px) and (max-width: 670px) {
    width: 100%;
    margin-right: 0;
    margin-top: 2rem;
  }
`;

export const BoxMoveContent = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
  margin: 2rem 0;
  gap: 5px;
`;

export const MoveContent = styled.div`
  ${setFlexbox("center", "center", "column")}
  border-radius: 5px;
  background: #959595;
  width: 100%;
  height: 6rem;
  overflow: hidden;
`;

export const ContentTitle = styled.h3`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
  height: 40%;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  transition: background 0.3s;
  color: white;
`;

export const ContentValue = styled.p`
  ${setFlexbox("center", "center", "row")}
  height: 60%;
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const BoxMoveDescription = styled.div`
  width: 100%;
  height: 10rem;
  border-radius: 5px;
  overflow-x: hidden;
  overflow-y: auto;
  background: #959595;
`;

export const MoveDescription = styled.div`
  padding: 5px;
  width: 100%;
  height: auto;
  font-size: 1.6rem;
`;

export const MoveList = styled.ul`
  list-style: none;
  background: ${colors.menuBackground};
  border: 1px ${colors.menuBorder} solid;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  color: ${colors.menuColor};
  margin: 2rem 0;
  left: 50%;
  width: 100%;
  transition: 0.2s;
  z-index: 1;
  height: auto;
  max-height: 150px;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.scrollbarDropdownColor};
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.scrollbarDropdownBackground};
  }
`;

export const Item = styled.li`
  padding: 0.7rem 0.5rem;
  cursor: pointer;
  color: ${colors.listItemColor};
  font-size: 1.7rem;
  font-weight: 600;

  &:hover {
    background: ${colors.listItemBackgroundHover};
    color: ${colors.listItemColorHover};
  }
`;

export const ButtonAddMove = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 2.5rem;
  font-weight: 600;
  background: ${colors.compareButtonBackground};
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background: ${colors.compareButtonDisabledBackground};
    color: ${colors.compareButtonDisabledColor};
    cursor: default;
  }
`;

export const BoxSelectedItem = styled.div`
  ${setFlexbox("space-between", "center", "row")}
  background: ${colors.selectedItemBackground};
  color: ${colors.selectedItemColor};
  padding: 1rem;
  transition: background 0.3s;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 5px;
  height: 4rem;
  width: 100%;
`;

export const SelectedItem = styled.span`
  ${setFlexbox("space-between", "center", "row")}
  font-size: 1.7rem;
  width: 100%;
  line-height: 18px;
  gap: 10px;
`;

export const IconDownArrow = styled.img`
  margin-left: 1rem;
`;

// POKEMON IMAGE
export const ContainerPokemonImage = styled.div`
  ${setFlexbox("center", "center", "row")}
  position: relative;
  margin-bottom: 2rem;
`;

export const PokemonImage = styled.img`
  width: 35rem;
  z-index: 999;
  animation: ${FadeLeft};
  animation-duration: 1s;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 20rem;
  }
`;

// TYPES
export const ContainerType = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: 30%;
  height: 10%;
  gap: 10px;
  margin: 0 auto;
  margin-bottom: 25px;
`;

export const TypeCard = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: 100%;
  height: 45px;
  gap: 5px;
  background: ${(props) => props.typeColor};
  padding: 15px;
  border-radius: 5px;
`;

export const TypeName = styled.p`
  ${setFlexbox("center", "center", "row")};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

export const TypeIcon = styled.img`
  width: ${(props) => props.width || "2rem"};
  height: ${(props) => props.height || "auto"};
  margin-left: ${(props) => props.marginLeft || 0};
`;

// RIGHT CONTENT
export const RightContent = styled.div`
  ${setFlexbox("space-between", "center", "column")};
  height: 100%;
  width: 60%;

  @media (min-width: 871px) and (max-width: 1200px) {
    width: 50%;
  }

  @media (min-width: 320px) and (max-width: 870px) {
    width: 100%;
    margin-top: 3rem;
  }
`;

export const BoxButtonSelectPokemon = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
`;

export const ButtonSelectPokemon = styled.button`
  padding: 1rem 4rem;
  font-size: 2rem;
  background: ${colors.compareButtonBackground};
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;

  &:disabled {
    background: ${colors.compareButtonDisabledBackground};
    color: ${colors.compareButtonDisabledColor};
    cursor: default;
  }

  @media (min-width: 320px) and (max-width: 870px) {
    margin: 4rem 0;
    width: 90%;
  }
`;

// PROGRESS BAR
export const BoxProgressBar = styled.div`
  ${setFlexbox("flex-start", "center", "row")};
  margin: 0 1.5rem;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 15rem;
  }
`;

export const ProgressRevealer = styled.div`
  ${setFlexbox("flex-start", "center", "row")};
  width: 20rem;

  @media (min-width: 641px) and (max-width: 870px) {
    width: 35rem;
  }

  @media (min-width: 320px) and (max-width: 640px) {
    width: 25rem;
  }
`;

export const ProgressBar = styled.progress`
  width: 100%;
  height: 7px;
  --webkit-appearance: none;
  border-radius: 10px;
  z-index: 2;
  animation: ${AnimationProgressValue};
  animation-duration: 1s;

  &::-webkit-progress-bar {
    background-color: ${(props) => props.barColor};
    border-radius: 10px;
  }

  &::-moz-progress-bar {
    background-color: ${(props) => props.barColor};
    border-radius: 10px;
  }

  &::-webkit-progress-value {
    background-color: ${(props) => props.valueColor};
    border-radius: 10px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 15rem;
  }
`;

// NAME AND ID
export const ContainerNameId = styled.div`
  ${setFlexbox("center", "center", "row")}
  z-index: 2;
  margin-bottom: 25px;

  @media (min-width: 320px) and (max-width: 1200px) {
    ${setFlexbox("center", "center", "column")};
  }

  @media (min-width: 320px) and (max-width: 480px) {
  }
`;

export const PokemonName = styled.h2`
  font-size: 3.6rem;
  color: ${colors.modalPokemonNameColor};
  margin-right: 15px;
  text-align: center;
  z-index: 2;

  @media (min-width: 320px) and (max-width: 1200px) {
    font-size: 3rem;
    margin-right: 0;
  }
`;

export const PokemonId = styled.h2`
  font-size: 3.6rem;
  color: ${colors.modalPokemonIdColor};
  z-index: 2;

  @media (min-width: 320px) and (max-width: 1200px) {
    font-size: 3rem;
  }
`;

// STATS
export const ContainerStats = styled.div`
  ${setFlexbox("flex-start", "center", "column")}
  width: 100%;
  z-index: 999;
`;

export const ContainerStatName = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
  margin-bottom: 15px;
  z-index: 2;
`;

export const StatName = styled.p`
  ${setFlexbox("flex-start", "center", "row")}
  font-size: 1.8rem;
  font-weight: 600;
  width: 70px;
  color: ${colors.modalStatsColor};

  @media (min-width: 320px) and (max-width: 1200px) {
    ${setFlexbox("flex-start", "center", "row")}
  }
`;

export const StatValue = styled.p`
  ${setFlexbox("flex-end", "center", "row")}
  font-size: 1.8rem;
  font-weight: 600;
  width: 35px;
  color: ${colors.modalStatsColor};

  @media (min-width: 320px) and (max-width: 1200px) {
    ${setFlexbox("flex-end", "center", "row")}
  }
`;

// BACK BUTTON
export const BackButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 2;
  font-size: 3rem;
  font-weight: 800;
  background: none;
  color: ${colors.favoriteStarSelectedColor};
  margin: 15px 20px;
`;

// COMPARE BUTTON
export const BoxCompareButton = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
`;

export const CompareButton = styled.button`
  margin-top: 2.5rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  background: ${colors.modalCompareButtonBackground};
  color: ${colors.modalCompareButtonColor};
  font-size: 2rem;
  font-weight: 600;
  border-radius: 10px;

  &:disabled {
    background: ${colors.modalCompareButtonDisabledBackground};
    color: ${colors.modalCompareButtonDisabledColor};
    cursor: default;
  }

  @media (min-width: 481px) and (max-width: 870px) {
    margin: 3rem 0;
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 3rem 0;
    width: 70%;
  }
`;

export const SwiperBox = styled.div`
  ${setFlexbox("center", "center", "row")}
  position: relative;
  width: 100%;
  margin: 0 auto;

  .swiper-pagination {
    position: relative;
  }

  .swiper-pagination-bullet {
    background: white;
  }
`;

// WEIGHT, HEIGHT AND ABILITIES
export const ContainerOtherInfos = styled.div`
  ${setFlexbox("center", "center", "column")}
  width: 100%;
  height: 25rem;
`;

export const BoxWeightHeight = styled.div`
  ${setFlexbox("space-evenly", "center", "row")}
  width: 100%;
`;

export const BoxWeight = styled.div`
  ${setFlexbox("center", "center", "column")}
`;

export const IconWeight = styled.img`
  width: 2rem;
  margin-bottom: 1rem;
`;

export const Weight = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${colors.weightColor};
`;

export const BoxHeight = styled.div`
  ${setFlexbox("center", "center", "column")}
`;

export const IconHeight = styled.img`
  width: 2rem;
  margin-bottom: 1rem;
`;

export const Height = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${colors.heightColor};
`;

export const AbilityLabel = styled.label`
  font-size: 1.4rem;
  color: white;
  margin: 3rem 0 1rem 0;
`;

export const BoxAbilities = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 40%;
`;

export const Ability = styled.div`
  ${setFlexbox("center", "center", "row")}
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0 auto;
  width: 90%;
  height: 40px;
  text-align: center;
  color: ${colors.abilitiesColor};
  padding: 10px;
  background-color: ${(props) => props.background};
  border-radius: 5px;
`;
