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
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
        </select>
      </div>
    </SelectorContainer>
  );
}
