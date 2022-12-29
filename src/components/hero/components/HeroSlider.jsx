// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
function HeroSlider() {
  return (
    <>
      {/* Hero */}
      <section id='hero'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          loop={true}
          spaceBetween={50}
          slidesPerView={1}>
          <SwiperSlide>
            <img
              src='https://m.media-amazon.com/images/I/71aQ3u78A3L._SX3000_.jpg'
              alt=''
              width={"50px"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg'
              alt=''
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default HeroSlider;
