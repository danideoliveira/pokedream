import styled from "styled-components";
import ReactModal from "react-modal";
import { colors } from "../../helpers/ColorPalette";
import { setFlexbox } from "../../helpers/Mixins";

export const ContainerModal = styled(ReactModal)`
  ${setFlexbox("space-around", "center", "row")}
  background: ${colors.modalBackground};
  width: 85%;
  height: 75%;
  margin: 0 auto;
  position: relative;
  padding: 25px;
  border-radius: 5px;

  button {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  .left-content {
    ${setFlexbox("center", "center", "column")}
  }

  .name-id {
    ${setFlexbox("center", "center", "row")}
  }

  .stats {
    ${setFlexbox("flex-start", "center", "column")}
    width: 100%;

    div {
      ${setFlexbox("center", "center", "row")}
      width: 100%;
      margin-bottom: 15px;
    }

    p {
      ${setFlexbox("flex-end", "center", "row")}
      font-size: 1.8rem;
      font-weight: 600;
      width: 35px;
      color: ${colors.modalStatsColor};
    }

    .stat-name {
      ${setFlexbox("flex-start", "center", "row")}
      font-size: 1.8rem;
      font-weight: 600;
      width: 70px;
      color: ${colors.modalStatsColor};
    }
  }
`;

export const ProgressBar = styled.progress`
  width: 20rem;
      height: 7px;
      --webkit-appearance: none;
      border-radius: 10px;
      margin: 0 15px;

      &::-webkit-progress-bar {
        background-color: ${props => props.barColor};
        border-radius: 10px;
      }

      &::-moz-progress-bar {
        background-color: ${props => props.barColor};
        border-radius: 10px;
      }

      &::-webkit-progress-value {
        background-color: ${props => props.valueColor};
        border-radius: 10px;
      }
`;

export const PokemonName = styled.h2`
  font-size: 4.8rem;
  color: ${colors.modalPokemonNameColor};
  margin-right: 15px;
`;

export const PokemonId = styled.h2`
  font-size: 4.8rem;
  color: ${colors.modalPokemonIdColor};
`;
