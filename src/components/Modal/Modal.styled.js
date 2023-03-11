import styled, { keyframes } from "styled-components";
import ReactModal from "react-modal";
import { colors } from "../../helpers/ColorPalette";
import { setFlexbox } from "../../helpers/Mixins";
import { AnimationProgressValue, FadeLeft } from "../../helpers/Animations";

// CONTAINER MODAL
export const ContainerModal = styled(ReactModal)`
  ${setFlexbox("space-around", "center", "row")}
  background: ${colors.modalBackground};
  width: 85%;
  height: 50rem;
  margin: 0 auto;
  position: relative;
  padding: 25px;
  border-radius: 5px;
  z-index: 999;

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

  @media (min-width: 320px) and (max-width: 870px) {
    ${setFlexbox("flex-start", "center", "column")};
    overflow-y: auto;
    overflow-x: hidden;
    height: 90%;
  }
`;

// LEFT CONTENT
export const LeftContent = styled.div`
  ${setFlexbox("center", "center", "column")}
  z-index: 2;

  @media (min-width: 320px) and (max-width: 1200px) {
    margin-bottom: 5rem;
  }
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
    margin-bottom: 2rem;
  }
`;

// TYPES
export const ContainerType = styled.div`
  ${setFlexbox("center", "center", "row")};
  height: 10%;
  gap: 10px;
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
  @media (min-width: 320px) and (max-width: 870px) {
    height: 0;
  }
`;

// PROGRESS BAR
export const BoxProgressBar = styled.div`
  ${setFlexbox("flex-start", "center", "row")};
  margin: 0 1.5rem;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 12rem;
  }
`;

export const ProgressRevealer = styled.div`
  ${setFlexbox("flex-start", "center", "row")};
  width: 20rem;
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
    width: 12rem;
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
  font-size: 4.8rem;
  color: ${colors.modalPokemonNameColor};
  margin-right: 15px;
  text-align: center;
  z-index: 2;

  @media (min-width: 320px) and (max-width: 1200px) {
    font-size: 4rem;
    margin-right: 0;
  }
`;

export const PokemonId = styled.h2`
  font-size: 4.8rem;
  color: ${colors.modalPokemonIdColor};
  z-index: 2;

  @media (min-width: 320px) and (max-width: 1200px) {
    font-size: 4rem;
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

// GRADIENT
export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${(props) => props.background};
  z-index: 0;
  clip-path: polygon(0% 200px, 0% 0%, 0% 0%, 200px 0%);
  border-radius: 5px;

  @media (min-width: 320px) and (max-width: 1200px) {
    clip-path: polygon(0% 80px, 0% 0%, 0% 0%, 80px 0%);
    top: 0;
  }
`;

// CLOSE BUTTON
export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  z-index: 2;
  font-size: 2rem;
  font-weight: 800;
  background: none;
  color: ${colors.modalCloseButtonColor};
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
  width: 40rem;

  @media (min-width: 481px) and (max-width: 1200px) {
    width: 35rem;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 25rem;
  }

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

