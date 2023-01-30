import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";

export const Container = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
  height: 100vh;
  background: ${colors.homeBackground};
`;

export const LeftContent = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 50%;
  height: 100%;
`;

export const RightContent = styled.div`
  ${setFlexbox("center", "center", "column")}
  width: 50%;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 5.6rem;
  font-weight: 700;
  color: ${colors.homeTitleColor};
`;

export const PokemonImage = styled.img`
  width: 35rem;
`;
