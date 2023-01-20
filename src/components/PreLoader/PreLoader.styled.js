import styled from "styled-components";
import { colors } from "../../helpers/ColorPalette";
import { setFlexbox } from "../../helpers/Mixins";

export const Loader = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
  height: 50px;
  font-size: 3rem;
  color: ${colors.loaderColor};
`;
