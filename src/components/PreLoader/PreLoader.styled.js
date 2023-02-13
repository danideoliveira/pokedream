import styled from "styled-components";
import { colors } from "../../helpers/ColorPalette";
import { setFlexbox } from "../../helpers/Mixins";

export const Loader = styled.div`
  ${setFlexbox("center", "center", "column")}
  width: 100%;
  height: auto;
`;

export const LoadingText = styled.p`
  font-size: 3rem;
  color: ${colors.loaderColor};
`;
