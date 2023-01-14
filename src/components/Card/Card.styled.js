import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";

export const CardContainer = styled.div`
  ${setFlexbox("center", "center", "column")};
  /* width: 200px; */
  width: 100%;
  height: 300px;
  grid-row-gap: 10px;
  background-color: #1e1e1e;
  padding: 10px;
  border-radius: 10px;

  .div-pokemon-img {
    ${setFlexbox("center", "center", "column")};
    height: 70%;
    width: 70%;
    background-color: white;
    clip-path: circle();
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

    img {
      width: 20px;
    }
  }
`;

export const PokemonTypeContainer = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: 100%;
  height: 100%;
  gap: 5px;
  background-color: ${(props) => props.typeColor};
  padding: 15px;
  border-radius: 5px;
`;

export const Text = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

export const PokemonType = styled.img`
  width: 20px;
`;
