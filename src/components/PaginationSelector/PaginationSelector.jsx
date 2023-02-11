import { SelectorContainer } from "./PaginationSelector.styled";

export default function PaginationSelector({ itemsPerPage, setItemsPerPage }) {
  return (
    <SelectorContainer>
      <div className="select-container">
        <p>Pokemons por página:</p>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={12}>12</option>
          <option value={18}>18</option>
          <option value={24}>24</option>
          <option value={30}>30</option>
        </select>
      </div>
    </SelectorContainer>
  );
}
