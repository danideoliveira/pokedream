import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";

export const Container = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
  height: 100vh;
  background: ${colors.homeBackground};
`;

export const LeftContent = styled.div`
  ${setFlexbox("center", "center", "row")}
  position: relative;
  width: 50%;
  height: 100%;
  z-index: 1;
`;

export const LineDivider = styled.div`
  width: 2px;
  height: 50%;
  background-color: ${colors.homeLineDivider};
  border-radius: 50%;
`;

export const RightContent = styled.div`
  ${setFlexbox("center", "center", "column")}
  position: relative;
  width: 50%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
`;

export const BoxTitle = styled.div`
  ${setFlexbox("center", "flex-start", "column")}
  width: 70%;
  height: auto;
`;

export const Title = styled.h1`
  font-size: 5.6rem;
  font-weight: 700;
  color: ${colors.homeTitleColor};
  line-height: 5rem;
  margin-bottom: 15px;
  width: 50%;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: justify;
  color: ${colors.homeDescriptionColor};
`;

export const Button = styled.a`
  ${setFlexbox("center", "center", "row")}
  width: 200px;
  height: 4rem;
  margin-top: 2rem;
  border-radius: 5px;
  background: ${colors.homeButtonBackground};
  color: ${colors.homeButtonColor};
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${colors.homeButtonBackgroundHover};
    color: ${colors.homeButtonColorHover};
  }
`;

export const TypeBackground = styled.img`
  position: absolute;
  opacity: 1.5%;
  width: 70%;
  bottom: 0;
  right: -20%;
`;

export const PokemonImage = styled.img`
  width: 80%;
  z-index: 1;
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${(props) => props.background};
  z-index: 0;
  clip-path: polygon(0% 100%, 0% 0%, 0% 0%, 100% 0%);
`;
