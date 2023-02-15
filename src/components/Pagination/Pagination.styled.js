import styled from "styled-components";
import { setFlexbox } from "../../helpers/Mixins";
import { colors } from "../../helpers/ColorPalette";
import "swiper/css";

export const ContainerPagination = styled.div`
  ${setFlexbox("center", "center", "row")};
  width: auto;
  max-width: 225px;
  gap: 10px;
  margin: 0 auto;
  margin-bottom: 50px;

  .swiper-button-next {
    margin-right: -50px;
  }

  .swiper-button-prev {
    margin-left: -55px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    ${setFlexbox("center", "center", "row")};
    background: ${colors.paginationButtonBackground};
    color: ${colors.paginationButtonColor};
    border-radius: 5px;
    border: 1px solid ${colors.paginationButtonBorder};
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    ${setFlexbox("center", "center", "row")};
    font-size: 1.8rem;
    font-weight: 700;
  }

  .swiper-horizontal > .swiper-scrollbar,
  .swiper-scrollbar.swiper-scrollbar-horizontal {
    overflow: hidden;
  }

  .swiper-scrollbar-drag {
    background: ${colors.paginationScrollbarColor};
  }
`;

export const SwiperBox = styled.div`
  position: relative;
  width: 225px;
`;

export const OptionButton = styled.button`
  width: 40px;
  background-color: ${colors.paginationOptionBackground};
  font-weight: 600;
  padding: 3px 10px;
  margin: 25px 2px;
  cursor: pointer;
  background: ${(props) => props.background};
  border-radius: 5px;

  &:hover {
    background: ${colors.paginationOptionBackgroundHover};
    color: ${colors.paginationOptionColorHover};
  }
`;
