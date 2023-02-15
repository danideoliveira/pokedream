import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";

// CONTAINER
export const CardContainer = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: 380px;
  height: 150px;
  grid-row-gap: 10px;
  background-color: ${colors.cardBackground};
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.1s;
  box-shadow: 1px 1px 5px 1px #101010;

  &:hover {
    background: ${colors.cardBackgroundHover};
  }

  @media (min-width: 481px) and (max-width: 1280px) {
    width: 100%;
    height: 200px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 220px;
    width: 100%;
  }
`;

// DIVIDERS
export const LeftContent = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: 35%;
  height: 100%;

  @media (min-width: 851px) and (max-width: 1280px) {
    width: 50%;
  }

  @media (min-width: 320px) and (max-width: 850px) {
    width: 35%;
  }
`;

export const RightContent = styled.div`
  ${setFlexbox("center", "center", "column")};
  width: 65%;
  height: 100%;

  @media (min-width: 851px) and (max-width: 1280px) {
    width: 50%;
  }

  @media (min-width: 320px) and (max-width: 850px) {
    width: 65%;
  }
`;

// POKEMON
export const BoxPokemonImage = styled.div`
  ${setFlexbox("center", "center", "column")};
  height: 100%;
  width: 100%;
  background: ${(props) => props.background};
  overflow: hidden;
`;

export const PokemonImage = styled.img``;

// POKEMON NAME
export const BoxPokemonName = styled.div`
  ${setFlexbox("center", "center", "column")};
  gap: 2px;
  margin-bottom: 2rem;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 20%;
  }
`;

// POKEMON TYPE
export const BoxPokemonType = styled.div`
  ${setFlexbox("center", "center", "row")};
  gap: 10px;
  height: 2.5rem;

  img {
    width: 2rem;
  }

  @media (min-width: 851px) and (max-width: 1200px) {
    margin-top: 1rem;
    ${setFlexbox("center", "center", "column")};
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 25%;
    ${setFlexbox("center", "center", "column")};
  }
`;

export const CardPokemonType = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: 100%;
  height: 100%;
  gap: 5px;
  background: ${(props) => props.typeColor};
  padding: 15px 8px;
  border-radius: 5px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 20%;
    padding: 12px;
  }
`;

export const PokemonType = styled.img`
  width: 20px;
`;

export const Icon = styled.img``;

// TEXTOS
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
