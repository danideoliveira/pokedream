import styled from "styled-components";
import ReactModal from "react-modal";
import { colors } from "../../helpers/ColorPalette";
import { setFlexbox } from "../../helpers/Mixins";

// CONTAINER MODAL
export const ContainerModal = styled(ReactModal)`
  ${setFlexbox("space-around", "flex-start", "row")}
  background: ${colors.modalBackground};
  width: 95%;
  height: 95%;
  margin: 0 auto;
  position: relative;
  border-radius: 5px;
  z-index: 5;
  position: relative;
  overflow: hidden;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.scrollbarModalColor};
  }

  &::-webkit-scrollbar-track {
    background: ${colors.scrollbarModalBackground};
  }

  &:focus {
    border: none;
    outline: none;
  }

  @media (min-width: 320px) and (max-width: 870px) {
    height: 90%;
  }
`;

// CHOOSE LIST - CHOOSE POKEMON CONTAINER
export const ChoosePokemonContainer = styled.div`
  ${setFlexbox("center", "center", "column")}
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  position: relative;

  @media (min-width: 701px) and (max-width: 1280px) {
    padding-top: 40px;
  }

  @media (min-width: 320px) and (max-width: 700px) {
    padding-top: 50px;
  }

  .choose-pokemon-box {
    ${setFlexbox("center", "center", "column")}
    width: 100%;
    height: 100%;
    transition: 0.3s ease-in;
  }
`;

// CHOOSE POKEMON
export const ChoosePokemonList = styled.section`
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  height: 100%;
  width: 100%;
  left: -100%;
  background: #141414;
  transition: 0.3s;
  z-index: 999;
  overflow: hidden;
  border-radius: 10px 0 0 10px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.scrollbarModalColor};
  }

  &::-webkit-scrollbar-track {
    background: ${colors.scrollbarModalBackground};
  }

  @media (min-width: 320px) and (max-width: 900px) {
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

// CHOOSE POKEMON - CLOSE BUTTON
export const CloseListBox = styled.div`
  ${setFlexbox("center", "center", "row")}
  height: 100%;
  background: #2c2c2c;
  cursor: pointer;

  .close-list-button {
    ${setFlexbox("center", "center", "row")}
    height: 40px;
    background: none;
    color: #adadad;
    font-size: 3rem;
    cursor: pointer;
    transform: rotate(180deg);
  }
`;

// CHOOSE POKEMON - CHOOSE LIST CONTAINER
export const ChooseListBox = styled.div`
  ${setFlexbox("center", "center", "column")}
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

// CHOOSE POKEMON - SEARCH CONTAINER
export const SearchContainer = styled.div`
  ${setFlexbox("flex-end", "center", "row")}
  width: 95%;
  height: 10%;

  &:nth-child(2) {
    max-width: none;
    width: 20rem;
    margin-right: 0;
  }

  @media (min-width: 671px) and (max-width: 1000px) {
    ${setFlexbox("center", "center", "row")}
  }

  @media (min-width: 320px) and (max-width: 670px) {
    ${setFlexbox("center", "center", "column")}
    height: auto;

    &:nth-child(1),
    &:nth-child(2) {
      width: 90%;
    }
  }
`;

// POKEMON NOT FOUND
export const PokemonNotFound = styled.div`
  font-size: 3rem;
  color: #fff;
`;

// CHOOSE LIST - POKEMON LIST CONTAINER
export const PokemonListContainer = styled.div`
  padding: 10px 0;
  ${setFlexbox("center", "center", "column")}
  width: 100%;
  height: 65%;
  margin: 10px 0;
  background: #0e0e0e00;
  border-radius: 10px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.scrollbarModalColor};
  }

  &::-webkit-scrollbar-track {
    background: ${colors.scrollbarModalBackground};
  }

  .pokemon-list-grid {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 20px;
    place-items: center;

    @media (min-width: 721px) and (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 320px) and (max-width: 720px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

// SLOT - PRINCIPAL CONTAINER
export const SlotContainer = styled.div`
  width: 95%;
  height: 90%;
  background: #0d0d0d;
  border-radius: 10px 10px 0 0;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.scrollbarModalColor};
  }

  &::-webkit-scrollbar-track {
    background: ${colors.scrollbarModalBackground};
  }

  @media (min-width: 320px) and (max-width: 1280px) {
    height: initial;
  }
`;

// SLOT - GRID
export const SlotGrid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  gap: 15px 0;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.scrollbarModalColor};
  }

  &::-webkit-scrollbar-track {
    background: ${colors.scrollbarModalBackground};
  }

  @media (min-width: 901px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
  }

  @media (min-width: 320px) and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
  }
`;

// SLOT - CARD
export const Slot = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 380px;
  height: 225px;
  position: relative;
  background: #1c1c1c;
  border-radius: 5px;

  &:hover {
    .button-remove-pokemon {
      right: 0;
    }
  }

  @media (min-width: 320px) and (max-width: 1280px) {
    width: 90%;
  }
`;

// SLOT - ADD POKEMON
export const ContainerAddToSlot = styled.section`
  ${setFlexbox("center", "center", "row")}
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    opacity: 0.5;
  }
`;

// SLOT - REMOVE POKEMON BUTTON
export const BoxRemovePokemon = styled.div`
  ${setFlexbox("flex-end", "flex-start", "row")}
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;

  .button-remove-pokemon {
    position: relative;
    right: -15%;
    background: #f25050;
    color: #fff;
    font-weight: 600;
    font-size: 1.6rem;
    height: 100%;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 5px;
    width: 15%;
  }
`;

// SLOT - POKEMON INFORMATIONS
export const BoxPokemonInfo = styled.section`
  ${setFlexbox("center", "center", "column")}
  width: 40%;
  height: 100%;

  .container-pokemon-image {
    ${setFlexbox("center", "center", "row")}
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #303030;
    overflow: hidden;

    @media (min-width: 320px) and (max-width: 870px) {
      width: 100px;
      height: 100px;
    }
  }

  .selected-pokemon-name {
    font-size: 1.8rem;
    font-weight: 600;
    color: white;
  }

  .selected-pokemon-id {
    font-size: 1.6rem;
    font-weight: 600;
    color: #adadad;
  }
`;

// SLOT - POKEMON MOVES BOX
export const BoxSelectedMoves = styled.div`
  ${setFlexbox("space-evenly", "center", "column")}
  width: 50%;
  height: 100%;
  transition: 0.5s;
`;

// SLOT - POKEMON MOVE
export const Move = styled.div`
  ${setFlexbox("space-between", "center", "row")}
  width: 90%;
  height: 3.5rem;
  padding: 1rem;
  border-radius: 5px;

  .move-name {
    font-size: 1.6rem;
    color: white;
    font-weight: 600;
    line-height: 1.5rem;
  }
`;

// NEXT STEP BUTTON
export const NextStepBox = styled.div`
  ${setFlexbox("center", "center", "row")}
  width: 90%;
  height: 10%;
  margin: 5px 0;

  @media (min-width: 320px) and (max-width: 1280px) {
    margin: 15px 0;
  }

  .next-step-button {
    padding: 0.5rem 3rem;
    background: ${colors.compareButtonBackground};
    color: ${colors.compareButtonColor};
    border-radius: 5px;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: ${colors.compareButtonBackgroundHover};
    }

    &:disabled {
      background: ${colors.compareButtonDisabledBackground};
      color: ${colors.compareButtonDisabledColor};
      cursor: default;
    }
  }
`;

// SLOT - POKEMON TYPE BOX
export const BoxPokemonType = styled.div`
  ${setFlexbox("center", "center", "row")};
  gap: 10px;
  margin-top: 1rem;

  img {
    width: 2rem;
  }

  @media (min-width: 851px) and (max-width: 1200px) {
    margin-top: 1rem;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 25%;
    ${setFlexbox("center", "center", "row")};
  }
`;

// SLOT - POKEMON TYPE
export const CardPokemonType = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: 100%;
  height: 1rem;
  gap: 5px;
  background: ${(props) => props.typeColor};
  padding: 1.5rem 1.8rem;
  border-radius: 5px;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 12px;
  }
`;

// CLOSE MODAL BUTTON
export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  z-index: 2;
  font-size: 3rem;
  font-weight: 800;
  background: none;
  color: ${colors.favoriteStarSelectedColor};
  margin: 5px 5px;

  @media (min-width: 320px) and (max-width: 900px) {
    margin: 5px 15px;
  }
`;

// CONFIRM TEAM MODAL
export const ModalConfirmTeam = styled(ReactModal)`
  ${setFlexbox("center", "center", "row")}
  background: ${colors.modalBackground};
  width: 30rem;
  height: 28rem;
  margin: 0 auto;
  position: relative;
  border-radius: 5px;
  z-index: 5;
  position: relative;
  overflow: hidden;

  &:focus {
    border: none;
    outline: none;
  }

  .team-name-box {
    ${setFlexbox("space-between", "center", "column")}
    height: 50%;

    input {
      background: none;
      color: grey;
      width: 25rem;
      height: 3.5rem;
      font-size: 2rem;
      font-weight: 600;
      border-bottom: 1px solid #353535;
      text-align: center;

      &:focus {
        outline: none;
      }

      @media (min-width: 320px) and (max-width: 700px) {
        width: 22rem;
      }
    }
  }

  .confirm-team-button {
    padding: 0.5rem 3rem;
    background: ${colors.compareButtonBackground};
    color: ${colors.compareButtonColor};
    border-radius: 5px;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: ${colors.compareButtonBackgroundHover};
    }

    &:disabled {
      background: ${colors.compareButtonDisabledBackground};
      color: ${colors.compareButtonDisabledColor};
      cursor: default;
    }
  }
`;
