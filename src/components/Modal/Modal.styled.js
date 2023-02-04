import styled from "styled-components";
import ReactModal from "react-modal";
import { colors } from "../../helpers/ColorPalette";
import { setFlexbox } from "../../helpers/Mixins";

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
  z-index: 2;

  &:focus {
    border: none;
    outline: none;
  }
`;

// LEFT CONTENT
export const LeftContent = styled.div`
  ${setFlexbox("center", "center", "column")}
  z-index: 2;
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
export const RightContent = styled.div``;

// PROGRESS BAR
export const ProgressBar = styled.progress`
  width: 20rem;
  height: 7px;
  --webkit-appearance: none;
  border-radius: 10px;
  margin: 0 15px;
  z-index: 2;

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
`;

// NAME AND ID
export const ContainerNameId = styled.div`
  ${setFlexbox("center", "center", "row")}
  z-index: 2;
  margin-bottom: 25px;
`;

export const PokemonName = styled.h2`
  font-size: 4.8rem;
  color: ${colors.modalPokemonNameColor};
  margin-right: 15px;
  z-index: 2;
`;

export const PokemonId = styled.h2`
  font-size: 4.8rem;
  color: ${colors.modalPokemonIdColor};
  z-index: 2;
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
`;

export const StatValue = styled.p`
  ${setFlexbox("flex-end", "center", "row")}
  font-size: 1.8rem;
  font-weight: 600;
  width: 35px;
  color: ${colors.modalStatsColor};
`;

// GRADIENT
export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${(props) => props.background};
  z-index: 0;
  clip-path: polygon(0% 40%, 0% 0%, 0% 0%, 20% 0%);
  border-radius: 5px;
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
`;
