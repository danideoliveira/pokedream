import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";

export const StyledFooter = styled.footer`
  ${setFlexbox("center", "center", "row")};
  padding: 1.5rem 0;

  a {
    color: ${colors.footerColor};
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;