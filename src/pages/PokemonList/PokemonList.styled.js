import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";

export const Container = styled.div`
  ${setFlexbox("center", "flex-start", "row")};
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
`;