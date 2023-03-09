import styled from "styled-components";
import { colors } from "../../helpers/ColorPalette";
import { setFlexbox } from "../../helpers/Mixins";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
  height: 8rem;
  position: ${(props) => props.position || "relative"};
  top: ${(props) => props.position && "0"};
  z-index: 995;
  transition: 0.3s;

  @media (min-width: 320px) and (max-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 65%;
    height: 100%;
    left: -65%;
    background: #1c1c1c;

    &.active {
      left: 0;
    }
  }
`;

export const BoxLink = styled.div`
  ${setFlexbox("flex-end", "center", "row")}
  width: 95%;
  height: 100%;

  @media (min-width: 320px) and (max-width: 900px) {
    ${setFlexbox("flex-start", "center", "column")}
    height: 65%;
  }
`;

export const NavLink = styled(Link)`
  padding: 5px 20px;
  color: #1c1c1c;
  font-size: 2rem;
  font-weight: 600;
  background: grey;
  border-radius: 5px;
  margin: 0 10px;
  transition: 0.3s;

  &:hover {
    background: ${(props) => props.background || "#ffc255"};
    color: ${(props) => props.background && "white"};
  }

  @media (min-width: 320px) and (max-width: 900px) {
    width: 90%;
    text-align: center;
    padding: 10px;
    margin: 10px 0;
  }
`;

export const HamburguerButton = styled.button`
  ${setFlexbox("center", "center", "row")}
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  margin: 20px;
  display: none;
  background: none;

  svg {
    background: #1c1c1c;
    width: 5rem;
    height: 4rem;
    color: white;
    border-radius: 5px;
    filter: drop-shadow(10%, 10%, 10%, 10%);
  }

  @media (min-width: 320px) and (max-width: 900px) {
    display: block;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: none;
  z-index: 994;
  display: none;
  transition: 0.3s;

  @media (min-width: 320px) and (max-width: 900px) {
    &.active {
      display: block;
      background: #0e0e0e7b;
    }
  }
`;
