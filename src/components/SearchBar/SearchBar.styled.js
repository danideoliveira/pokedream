import styled from "styled-components";
import { colors } from "../../helpers/ColorPalette";
import { setFlexbox } from "../../helpers/Mixins";
import { images } from "../Images/Images";

// SEARCH BAR CONTAINER
export const SearchBarContainer = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
  height: auto;
  margin-bottom: 50px;
  background-color: ${colors.searchBarBackground};
  padding: 5rem 0;

  @media (min-width: 320px) and (max-width: 1100px) {
    ${setFlexbox("center", "center", "column")}
  }
`;

// BOXES
export const BoxAllSearch = styled.div`
  ${setFlexbox("center", "center", "row")}
  margin-right: 3rem;

  @media (min-width: 320px) and (max-width: 1070px) {
    margin-right: 0;
  }

  @media (min-width: 320px) and (max-width: 670px) {
    ${setFlexbox("center", "center", "column")}
    width: 80%;
    margin-right: 0;
  }
`;

export const BoxCompare = styled.div`
  ${setFlexbox("center", "center", "row")}

  @media (min-width: 616px) and (max-width: 1100px) {
    width: 50%;
    margin-top: 3rem;
  }

  @media (min-width: 320px) and (max-width: 670px) {
    width: 50%;
  }
`;

// INPUT SEARCH - NAME ID
export const InputSearch = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: auto;
  height: auto;
  margin-right: 2rem;

  @media (min-width: 320px) and (max-width: 670px) {
    width: 100%;
    margin-right: 0;
    margin-top: 2rem;
  }
`;

export const InputNameId = styled.input`
  font-size: 1.7rem;
  height: 4rem;
  color: ${colors.searchInputColor};
  background: ${colors.searchInputBackground};
  text-indent: 1rem;
  font-weight: 600;
  border-radius: 5px 0 0 5px;

  &:focus {
    border: none;
    outline: none;
  }

  @media (min-width: 320px) and (max-width: 670px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const BoxIconSearch = styled.div`
  cursor: pointer;
`;

export const IconSearch = styled.img`
  ${setFlexbox("center", "center", "row")}
  height: 4rem;
  color: ${colors.searchButtonColor};
  background: ${colors.searchButtonBackground};
  border-radius: 0 5px 5px 0;
  padding: 0 0.5rem;
`;

// DROPDOWN MENU
export const Dropdown = styled.div`
  width: 15%;
  min-width: 16rem;
  max-width: 16rem;
  position: relative;
  border-radius: 5px;
  margin-right: 2rem;

  .menu-open {
    display: block;
    opacity: 1;
  }

  @media (min-width: 320px) and (max-width: 670px) {
    width: 100%;
    max-width: initial;
    margin-right: 0;
    margin-top: 2rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  background: ${colors.menuBackground};
  border: 1px ${colors.menuBorder} solid;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  color: ${colors.menuColor};
  position: absolute;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  opacity: 0;
  display: none;
  transition: 0.2s;
  z-index: 1;
  height: auto;
  max-height: 200px;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.scrollbarDropdownColor};
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.scrollbarDropdownBackground};
  }
`;

export const Item = styled.li`
  padding: 0.7rem 0.5rem;
  cursor: pointer;
  color: ${colors.listItemColor};
  font-size: 1.7rem;
  font-weight: 600;

  &:hover {
    background: ${colors.listItemBackgroundHover};
    color: ${colors.listItemColorHover};
  }
`;

export const BoxSelectedItem = styled.div`
  ${setFlexbox("space-between", "center", "row")}
  border: 2px ${colors.selectedItemBorder} solid;
  background: ${colors.selectedItemBackground};
  color: ${colors.selectedItemColor};
  padding: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 5px;
  height: 4rem;
  width: 100%;

  &:hover {
    background: ${colors.selectedItemBackgroundHover};
  }
`;

export const SelectedItem = styled.span`
  font-size: 1.7rem;
  line-height: 18px;
`;

export const IconDownArrow = styled.img`
  margin-left: 1rem;
`;

// POKEMON COMPARE
export const PokemonCompare = styled.div`
  ${setFlexbox("space-evenly", "center", "row")}
  width: 100%;
  height: 100%;

  @media (min-width: 320px) and (max-width: 780px) {
    width: 60%;
    margin-top: 3rem;
  }

  @media (min-width: 320px) and (max-width: 670px) {
    ${setFlexbox("center", "center", "column")}
    width: 100%;
    margin-right: 0;
  }
`;

export const PokemonCompareImage = styled.img``;

export const Versus = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.versusColor};
  margin: 0 2rem;
`;

export const BoxCompareButton = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 80%;

  @media (min-width: 320px) and (max-width: 670px) {
    margin-top: 3rem;
  }
`;

export const CompareButton = styled.button`
  ${setFlexbox("center", "center", "row")}
  height: 30px;
  font-size: 1.7rem;
  font-weight: 700;
  padding: 0.7rem;
  border-radius: 5px;
  color: ${colors.compareButtonColor};
  background: ${colors.compareButtonBackground};
  cursor: pointer;
  margin-left: 2rem;

  &:hover {
    background: ${colors.compareButtonBackgroundHover};
  }

  &:disabled {
    background: ${colors.compareButtonDisabledBackground};
    color: ${colors.compareButtonDisabledColor};
    cursor: default;
  }

  @media (min-width: 320px) and (max-width: 1100px) {
    height: 50px;
  }

  @media (min-width: 320px) and (max-width: 670px) {
    width: 70%;
    margin-left: 0;
  }
`;

export const ButtonRemovePokemon = styled.button`
  ${setFlexbox("center", "center", "row")}
  visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 3rem;
  font-weight: 600;
  color: red;
  top: 0;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  z-index: 999;
  background: #000000a6;
`;

export const BoxSelectedPokemon = styled.div`
  ${setFlexbox("center", "center", "row")}
`;

export const SelectedPokemon = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 120px;
  height: 120px;
  background: ${(props) => props.gradientColor};
  background-image: ${(props) =>
    props.gradientColor === "none" && `url(${images.iconPokeball})`};
  background-repeat: round;
  filter: contrast(0.9);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  box-shadow: ${(props) =>
    props.gradientColor === "none" && "inset 0px 0px 12px 1px black"};

  &:hover {
    ${ButtonRemovePokemon} {
      visibility: visible;
    }
  }
`;
