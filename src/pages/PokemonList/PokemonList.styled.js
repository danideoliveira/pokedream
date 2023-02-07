import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";

export const Container = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: 100%;
  height: auto;
`;

export const ContainerSecondary = styled.div`
  ${setFlexbox("center", "flex-start", "column")};
  width: 100%;
  height: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  place-items: center;
  margin-bottom: 5rem;

  @media (min-width: 851px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 320px) and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
