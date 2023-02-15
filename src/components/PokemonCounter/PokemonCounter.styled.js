import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";

export const CounterContainer = styled.div`
  ${setFlexbox("flex-end", "center", "row")}
  width: 89.4%;
  margin: 0 auto;
  margin-bottom: 3rem;

  @media (min-width: 851px) and (max-width: 1280px) {
    width: 90%;
  }

  @media (min-width: 320px) and (max-width: 850px) {
    ${setFlexbox("center", "center", "row")}
  }
`;

export const CounterText = styled.p`
  font-size: 1.8rem;
  color: ${colors.pokemonCounterColor};
  font-weight: 600;
`;
