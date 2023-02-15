import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";

export const SelectorContainer = styled.div`
  ${setFlexbox("center", "center", "row")};
  margin: 0 auto;
  width: 90%;
`;

export const BoxSelect = styled.div`
  ${setFlexbox("center", "center", "row")};
  margin-bottom: 2rem;
`;

export const Title = styled.p`
  color: ${colors.perPageColor};
  font-size: 1.8rem;
  font-weight: 700;
  margin-right: 1rem;
`;

export const SelectBox = styled.select`
  font-size: 1.7rem;
  font-weight: 700;
  background: ${colors.perPageBackground};
  padding: 0 5px;
  border-radius: 5px;
  cursor: pointer;

  &:focus {
    border: none;
    outline: none;
  }
`;
export const Option = styled.option`
  font-weight: 700;
  background: ${colors.perPageOptionBackground};

  &:focus {
    border: none;
    outline: none;
  }
`;
