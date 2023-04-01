// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";

import { Link } from "react-router-dom";

function ProductSlider({ products }) {
  return (
    <>
      {/* Product Slider */}
      <section id='product-slider'>
        <h3>{products.title}</h3>
        <div className='product-slider-container'>
          <div className='product-gallery'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              spaceBetween={50}
              breakpoints={{
                576: {
                  // width: 576,
                  slidesPerView: 1,
                },
                768: {
                  // width: 768,
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}>
              {products.products.map((slider, index) => (
                <SwiperSlide key={index}>
                  <Link to={`/product/${slider.path}/${slider.id}`}>
                    <img
                      src={slider.img}
                      alt={slider.name}
                    />
                    <p>{slider.name.substring(0, 25) + " ..."}</p>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductSlider;
