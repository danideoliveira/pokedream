import styled, { keyframes } from "styled-components";
import { colors } from "../../helpers/ColorPalette";
import { setFlexbox } from "../../helpers/Mixins";

export const Loader = styled.div`
  ${setFlexbox("center", "center", "column")}
  width: 100%;
  height: auto;
`;

export const LoadingText = styled.p`
  font-size: 3rem;
  margin: 2.5rem 0 8rem 0;
  color: ${colors.loaderColor};
`;
