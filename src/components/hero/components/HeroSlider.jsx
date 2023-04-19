// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { heroSlider } from "@/data/heroSlider";

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
          {heroSlider.map((slider, index) => (
            <SwiperSlide key={index}>
              <img
                src={slider.img}
                alt={slider.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default HeroSlider;
