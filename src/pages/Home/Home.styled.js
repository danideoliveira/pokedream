import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";
import { FadeLeft } from "../../helpers/Animations";

export const Container = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
  height: 100vh;
  min-height: 550px;
  background: ${colors.homeBackground};

  @media (min-width: 320px) and (max-width: 780px) {
    height: 90rem;
    ${setFlexbox("center", "center", "column")}
  }
`;

export const LeftContent = styled.div`
  ${setFlexbox("center", "center", "row")}
  position: relative;
  width: 50%;
  height: 100%;
  z-index: 1;

  @media (min-width: 320px) and (max-width: 780px) {
    width: 100%;
    height: 50%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 40%;
  }
`;

export const LineDivider = styled.div`
  width: 2px;
  height: 50%;
  background-color: ${colors.homeLineDivider};
  border-radius: 50%;

  @media (min-width: 320px) and (max-width: 780px) {
    display: none;
  }
`;

export const RightContent = styled.div`
  ${setFlexbox("center", "center", "column")}
  position: relative;
  width: 50%;
  height: 100%;
  z-index: 1;
  overflow: hidden;

  @media (min-width: 320px) and (max-width: 780px) {
    ${setFlexbox("flex-start", "center", "column")}
    width: 100%;
    height: 50%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 60%;
  }
`;

export const BoxTitle = styled.div`
  ${setFlexbox("center", "flex-start", "column")}
  width: 70%;
  height: auto;

  @media (min-width: 320px) and (max-width: 780px) {
    ${setFlexbox("center", "center", "column")}
    width: 70%;
  }
`;

export const Title = styled.h1`
  font-size: 5.6rem;
  font-weight: 700;
  color: ${colors.homeTitleColor};
  line-height: 5rem;
  margin-bottom: 15px;
  width: 50%;

  @media (min-width: 320px) and (max-width: 780px) {
    text-align: center;
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    ${setFlexbox("center", "center", "column")}
  }
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
    background: ${(props) => props.background};
    color: ${colors.homeButtonColorHover};
  }
`;

export const TypeBackground = styled.img`
  position: absolute;
  opacity: 1.5%;
  width: 70%;
  bottom: 0;
  right: -20%;

  @media (min-width: 320px) and (max-width: 780px) {
    width: 50%;
  }
`;

export const PokemonImage = styled.img`
  width: 70%;
  z-index: 1;
  animation: ${FadeLeft};
  animation-duration: 1s;

  @media (min-width: 320px) and (max-width: 780px) {
    width: 50%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 80%;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${(props) => props.background};
  z-index: 0;
  clip-path: polygon(0% 100%, 0% 0%, 0% 0%, 100% 0%);
`;
