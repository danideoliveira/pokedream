import styled from "styled-components";
import { colors } from "../../helpers/ColorPalette";
import { setFlexbox } from "../../helpers/Mixins";

// SEARCH BAR CONTAINER
export const SearchBarContainer = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
  height: auto;
  margin-bottom: 50px;
  background-color: ${colors.searchBarBackground};
  padding: 2rem 0;
`;

// INPUT SEARCH - NAME ID
export const InputSearch = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: auto;
  height: auto;
`;

export const InputNameId = styled.input`
  font-size: 1.4rem;
  height: 4rem;
  color: ${colors.searchInputColor};
  background: ${colors.searchInputBackground};
  text-indent: 1rem;
  font-weight: 600;
  padding-right: 2rem;
  border-radius: 5px 0 0 5px;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const BoxIconSearch = styled.div``;

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
  position: relative;
  margin: 2rem;
  border-radius: 5px;

  .menu-open {
    display: block;
    opacity: 1;
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
`;

export const Item = styled.li`
  padding: 0.7rem 0.5rem;
  cursor: pointer;
  color: ${colors.listItemColor};
  font-size: 1.2rem;
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

export const SelectedItem = styled.span``;

export const IconDownArrow = styled.img`
  margin-left: 1rem;
`;

// POKEMON COMPARE
export const PokemonCompare = styled.div`
  ${setFlexbox("space-evenly", "center", "row")}
  width: 50%;
  height: 100%;
`;

export const PokemonCompareImage = styled.img``;

export const Versus = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.versusColor};
`;

export const CompareButton = styled.button`
  ${setFlexbox("center", "center", "row")}
  height: 30px;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.7rem;
  border-radius: 5px;
  color: ${colors.compareButtonColor};
  background: ${colors.compareButtonBackground};
  cursor: pointer;

  &:hover {
    background: ${colors.compareButtonBackgroundHover};
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

export const SelectedPokemon = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 120px;
  height: 120px;
  background: ${(props) => props.gradientColor};
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  &:hover {
    ${ButtonRemovePokemon} {
      visibility: visible;
    }
  }
`;
