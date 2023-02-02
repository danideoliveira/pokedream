import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";

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

  &:hover {
    background: ${colors.cardBackgroundHover};
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

export const BoxPokemonImage = styled.div`
  ${setFlexbox("center", "center", "column")};
  height: 100%;
  width: 100%;
  background: ${(props) => props.background};
`;

export const PokemonImage = styled.img``;

export const BoxPokemonName = styled.div`
  ${setFlexbox("center", "center", "column")};
  gap: 2px;
  margin-bottom: 2rem;
`;

export const CardPokemonType = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: 100%;
  height: 100%;
  gap: 5px;
  background: ${(props) => props.typeColor};
  padding: 15px;
  border-radius: 5px;
`;

export const BoxPokemonType = styled.div`
  ${setFlexbox("center", "center", "row")};
  gap: 10px;
  height: 2.5rem;

  img {
    width: 2rem;
  }
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
