import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";

export const ContainerNotFound = styled.div`
  ${setFlexbox("center", "center", "row")}
  margin: 5rem 0;
  width: 100%;
  height: 100%;
`;

export const TextNotFound = styled.h3`
  font-size: 2.5rem;
  text-align: center;
  color: ${colors.pokemonNotFoundColor};
`;
