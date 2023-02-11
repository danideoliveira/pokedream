import styled, { keyframes } from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";

export const AnimationPokeball = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const BasePokeball = styled.div`
  ${setFlexbox("center", "center", "column")}
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #000000;
  overflow: hidden;
  border: 15px solid #000000;
  animation: ${AnimationPokeball} infinite;
  animation-duration: 3s;
  margin-bottom: 15px;
`;

export const BaseRed = styled.div`
  width: 100%;
  height: 50%;
  background-color: red;
`;
export const BaseRedShadow = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c90000;
  clip-path: polygon(50% 100%, 0% 100%, 0% 0%, 0% 0%);
`;

export const LineCenter = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
  height: 20px;
  background-color: #000000;
  z-index: 999;
`;

export const CenterBall = styled.div`
  position: absolute;
  ${setFlexbox("center", "center", "row")}
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #000000;
`;

export const CenterWhiteButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffffff;
`;

export const BaseWhite = styled.div`
  width: 100%;
  background-color: white;
  height: 50%;
`;
export const BaseWhiteShadow = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d7d7d7;
  clip-path: polygon(100% 100%, 0% 100%, 0% 0%, 60% 0%);
`;
