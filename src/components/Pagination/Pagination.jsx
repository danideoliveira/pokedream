import {
  ContainerPagination,
  OptionButton,
  SwiperBox,
} from "./Pagination.styled";
import { colors } from "../../helpers/ColorPalette";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function PaginationComponent({
  setCurrentPage,
  currentPage,
  pages,
}) {
  return (
    <ContainerPagination>
      <SwiperBox>
        <Swiper
          style={{ position: "initial" }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={4}
          scrollbar={{ draggable: true }}
          navigation
        >
          {Array.from(Array(pages), (item, index) => {
            return (
              <SwiperSlide key={index}>
                <OptionButton
                  background={
                    index === currentPage
                      ? colors.paginationOptionSelected
                      : "null"
                  }
                  value={index}
                  onClick={(e) => setCurrentPage(Number(e.target.value))}
                >
                  {index + 1}
                </OptionButton>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SwiperBox>
    </ContainerPagination>
  );
}
