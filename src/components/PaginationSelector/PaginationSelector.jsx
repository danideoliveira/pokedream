import {
  SelectorContainer,
  BoxSelect,
  Option,
  SelectBox,
  Title,
} from "./PaginationSelector.styled";

export default function PaginationSelector({ itemsPerPage, setItemsPerPage }) {
  return (
    <SelectorContainer>
      <BoxSelect>
        <Title>Pokemon por página:</Title>
        <SelectBox
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <Option value={12}>12</Option>
          <Option value={18}>18</Option>
          <Option value={24}>24</Option>
          <Option value={30}>30</Option>
        </SelectBox>
      </BoxSelect>
    </SelectorContainer>
  );
}
