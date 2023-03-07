import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;

  .box {
    margin: 0 auto;
    max-width: 1280px;
    width: 95%;
  }

  .box-title {
    ${setFlexbox("center", "center", "row")}
    margin-top: 2rem;
    h3 {
      font-size: 2.5rem;
      color: white;
    }
  }

  .create-team {
    ${setFlexbox("flex-end", "center", "row")}
    margin-bottom: 2rem;

    @media (min-width: 320px) and (max-width: 870px) {
      ${setFlexbox("center", "center", "row")}
    }
  }

  .container-team {
    ${setFlexbox("center", "center", "column")}
    width: 100%;

    .team {
      transition: 0.3s;
    }

    .toggle-show {
      ${setFlexbox("center", "center", "row")}
      width: 50px;
      height: 100%;
      font-size: 3rem;
      position: absolute;
      left: 0;

      svg {
        color: black;
      }
    }
  }

  .container-grid-team {
    ${setFlexbox("center", "center", "column")}
    width: 100%;
    height: auto;
    min-height: 100%;

    @media (min-width: 320px) and (max-width: 870px) {
      width: 90%;
      margin: 0 auto;
    }
  }

  .toggle-show-team {
    ${setFlexbox("space-between", "center", "row")}
    border-radius: 5px;
    width: 100%;
    height: 5rem;
    margin-bottom: 1rem;
    cursor: pointer;
    position: relative;
    background: none;

    .box-team-name {
      ${setFlexbox("center", "center", "row")}
      background: #ffc800;
      width: 90%;
      height: 100%;
      border-radius: 5px;

      @media (min-width: 320px) and (max-width: 870px) {
        width: 80%;
      }
    }

    .box-remove-team {
      ${setFlexbox("center", "center", "row")}
      width: 50px;
      height: 100%;
      background: grey;
      right: 0;
      overflow: hidden;
      border-radius: 5px;
      position: relative;

      &:hover {
        button {
          right: 0;
        }
      }

      button {
        background: red;
        color: white;
        border-radius: 5px;
        width: 50px;
        height: 100%;
        right: -50px;
        position: absolute;
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }
`;

// DROPDOWN MENU
export const Dropdown = styled.div`
  width: 30%;
  min-width: 16rem;
  position: relative;
  border-radius: 5px;
  margin-right: 2rem;

  .menu-open {
    display: block;
    opacity: 1;
  }

  @media (min-width: 320px) and (max-width: 870px) {
    width: 90%;
    max-width: initial;
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
