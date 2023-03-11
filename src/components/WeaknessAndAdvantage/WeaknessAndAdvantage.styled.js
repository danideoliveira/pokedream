import styled from "styled-components";
import { colors } from "../../helpers/ColorPalette";
import { setFlexbox } from "../../helpers/Mixins";

// WEAKNESS

export const BoxWeaks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 40%;

  .card-box-weaks {
    ${setFlexbox("center", "center", "row")}
    font-size: 1.6rem;
    font-weight: 600;
    margin: 0 auto;
    width: 90%;
    height: 40px;
    text-align: center;
    color: ${colors.abilitiesColor};
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px;

    img {
      width: 20px;
    }
  }
`;
