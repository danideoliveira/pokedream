import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";

export const CardContainer = styled.div`
  ${setFlexbox("center", "center", "column")};
  /* width: 200px; */
  width: 100%;
  height: 250px;
  grid-row-gap: 10px;
  background-color: #a9a9a9;
  padding: 10px;
  border-radius: 10px;

  .div-pokemon-img {
    ${setFlexbox("center", "center", "column")};
    height: 70%;
  }

  .div-pokemon-name {
    ${setFlexbox("center", "center", "column")};
    height: 20%;
    gap: 2px;
  }

  .div-pokemon-type {
    ${setFlexbox("center", "center", "row")};
    height: 10%;
    gap: 10px;
  }
`;

export const Text = styled.p`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
`;
