import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";

export const CardContainer = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: 380px;
  height: 150px;
  grid-row-gap: 10px;
  background-color: ${colors.cardBackground};
  /* padding: 10px; */
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background: ${colors.cardBackgroundHover};
  }

  .div-pokemon-img {
    ${setFlexbox("center", "center", "column")};
    height: 70%;
    width: 70%;
    background-color: white;
    clip-path: circle();
  }

  .div-pokemon-name {
    ${setFlexbox("center", "center", "column")};
    /* height: 20%; */
    gap: 2px;
    margin-bottom: 2rem;
  }

  .div-pokemon-type {
    ${setFlexbox("center", "center", "row")};
    /* height: 10%; */
    gap: 10px;
    height: 2.5rem;

    img {
      width: 2rem;
    }
  }

  .div-pokemon-base {
    ${setFlexbox("space-evenly", "center", "row")};
    width: 70%;

    .pokemon-weight,
    .pokemon-height {
      ${setFlexbox("center", "center", "column")};
      width: 100%;

      img {
        width: 2rem;
        margin: 10px 5px;
      }
    }
  }

  .div-show-stats {
    width: 150%;
    height: 5rem;
    cursor: pointer;

    button {
      ${setFlexbox("center", "center", "row")};
      width: 100%;
      height: 100%;
      cursor: pointer;

      &:hover {
        background-color: ${colors.cardButtonHover};
      }
    }
  }
`;

export const LeftContent = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: 35%;
  height: 100%;
`;

export const RightContent = styled.div`
  ${setFlexbox("center", "center", "column")};
  width: 70%;
  height: 100%;
`;

export const PokemonImageContainer = styled.div`
  ${setFlexbox("center", "center", "column")};
  height: 100%;
  width: 100%;
  background: ${(props) => props.background};
  /* clip-path: circle(); */
`;

export const PokemonTypeContainer = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: 100%;
  height: 100%;
  gap: 5px;
  background: ${(props) => props.typeColor};
  padding: 15px;
  border-radius: 5px;
`;

export const Text = styled.p`
  ${setFlexbox("center", "center", "row")};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};

  img {
    width: 2.2rem;
    height: 2.2rem;
    margin-left: 5px;
  }
`;

export const PokemonType = styled.img`
  width: 20px;
`;

export const Icon = styled.img``;
