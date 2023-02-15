import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";

export const CounterContainer = styled.div`
  ${setFlexbox("flex-end", "center", "row")}
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3rem;

  @media (min-width: 320px) and (max-width: 850px) {
    ${setFlexbox("center", "center", "row")}
  }
`;

export const CounterText = styled.p`
  font-size: 1.8rem;
  color: ${colors.pokemonCounterColor};
  font-weight: 600;
`;