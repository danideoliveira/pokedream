import {keyframes} from "styled-components";

export const AnimationProgressValue = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const FadeLeft = keyframes`
 0% {
  opacity: 0;
  margin-left: -20px;
 }
 100% {
  opacity: 1;
  margin-left: 0;
 }
`;

export const OpenBoxPokemonCompare = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 90%;
  }
`;