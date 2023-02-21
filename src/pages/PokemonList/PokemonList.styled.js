import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";

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
  max-width: 1180px;

  @media (min-width: 851px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 320px) and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const BoxButtonFavorite = styled.div`
  ${setFlexbox("flex-start", "center", "row")}
  margin: 0 auto;
  width: 90%;
  gap: 20px;
  max-width: 1180px;
`;

export const ButtonShowFavorites = styled.button`
  width: 20rem;
  margin: 20px 0;
  padding: 10px 30px;
  background: ${colors.favoriteButtonBackground};
  color: ${colors.favoriteButtonColor};
  border-radius: 5px;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
