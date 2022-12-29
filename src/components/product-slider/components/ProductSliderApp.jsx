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
        <div className='product-slider-container'>
          <div className='product-gallery'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              spaceBetween={110}
              slidesPerView={5}>
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
