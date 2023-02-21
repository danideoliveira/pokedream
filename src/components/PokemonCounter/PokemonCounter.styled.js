import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";

export const CounterContainer = styled.div`
  ${setFlexbox("flex-start", "center", "row")}
  width: 89.4%;
  margin: 0 auto;

  @media (min-width: 851px) and (max-width: 1280px) {
    width: 90%;
  }

`;

export const CounterText = styled.p`
  font-size: 1.8rem;
  color: ${colors.pokemonCounterColor};
  font-weight: 600;
`;
