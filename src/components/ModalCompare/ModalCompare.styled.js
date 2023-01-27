import styled from "styled-components";
import { colors } from "../../helpers/ColorPalette";
import { setFlexbox } from "../../helpers/Mixins";
import ReactModal from "react-modal";

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
`;

// LEFT CONTENT
export const LeftContent = styled.div`
  ${setFlexbox("center", "center", "column")}
  z-index: 2;
`;

// POKEMON IMAGE
export const ContainerPokemonImage = styled.div`
  ${setFlexbox("center", "flex-end", "row")}
  position: relative;
  margin: 2rem 0;
  height: 80px;
`;

export const PokemonImage = styled.img`
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
  height: 35px;
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

// NAME AND ID
export const ContainerNameId = styled.div`
  ${setFlexbox("center", "center", "row")}
  z-index: 2;
`;

export const PokemonName = styled.h2`
  font-size: 2.8rem;
  color: ${colors.modalPokemonNameColor};
  margin-right: 10px;
  z-index: 2;
`;

export const PokemonId = styled.h2`
  font-size: 2.8rem;
  color: ${colors.modalPokemonIdColor};
  z-index: 2;
`;

// STATS
export const ContainerStats = styled.div`
  ${setFlexbox("flex-start", "center", "column")}
  width: 100%;
  z-index: 999;
  margin-top: 2rem;
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

// PROGRESS BAR
export const ProgressBar = styled.progress`
  width: 15rem;
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
