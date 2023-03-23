// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function ProductSliderApp() {
  return (
    <>
      {/* Product Slider */}
      <section id='product-slider'>
        <h3>Books</h3>
        <div className='product-slider-container'>
          <div className='product-gallery'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              spaceBetween={110}
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
              <SwiperSlide>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Electronics_1x._CB608464074_.jpg'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51vf1R1wS9L._AC_UY327_FMwebp_QL65_.jpg'
                  alt=''
                />
                <p>Nokia G50</p>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Electronics_1x._CB608464074_.jpg'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Electronics_1x._CB608464074_.jpg'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Electronics_1x._CB608464074_.jpg'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Electronics_1x._CB608464074_.jpg'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Electronics_1x._CB608464074_.jpg'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/DesktopShoveler/Shoveler_Electronics_1x._CB608464074_.jpg'
                  alt=''
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductSliderApp;
