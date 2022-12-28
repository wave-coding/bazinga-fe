import AmazonLogo from "@/assets/media/logo/Amazon-logo.png";
import { MdOutlinePlace, MdSearch } from "react-icons/md";
import ReactCountryFlag from "react-country-flag";
import { BsCart2, BsFillCaretDownFill } from "react-icons/bs";
import { HiBars3CenterLeft } from "react-icons/hi2";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

function Header() {
  return (
    <>
      <header>
        <main>
          <div className='main-logo'>
            <img
              src={AmazonLogo}
              alt='Amazon-logo'
            />
          </div>
          <div className='header-address'>
            <div>
              <MdOutlinePlace size={20}></MdOutlinePlace>
            </div>
            <article>
              <p>Iran</p>
              <p>Bndar-e-abbas</p>
            </article>
          </div>
          <div className='header-search'>
            <div>
              <select
                name='category'
                id='category'>
                <option value='laptop'>laptop</option>
                <option value='smartphone'>smart phone</option>
                <option value='smartwatch'>smart watch</option>
              </select>
            </div>
            <div>
              <input
                type='text'
                name='search'
                id='search'
              />
            </div>
            <div>
              <button>
                <MdSearch size={25}></MdSearch>
              </button>
            </div>
          </div>
          <div className='header-country'>
            <p>English</p>
            <div className='header-signin-bottom-article'>
              <ReactCountryFlag
                className='country-flag-m'
                countryCode='US'
                svg
              />
              <BsFillCaretDownFill size={10}></BsFillCaretDownFill>
            </div>
            {/* hover country language choose */}
            <div className='header-country-choose'>
              <p>
                <input
                  type='radio'
                  name='language'
                  id='english'
                  value='english'
                  checked
                />
                <span>English - EN</span>
              </p>
              <p>
                <input
                  type='radio'
                  name='language'
                  id='espain'
                  value='espain'
                />
                <span>Espanol - ES</span>
                <a
                  href='learnmore'
                  className='header-country-choose-link'>
                  Learn more
                </a>
              </p>
              <p>
                <ReactCountryFlag
                  countryCode='US'
                  svg
                />
                <span>You are shopping on Amazon.com</span>
                <a
                  href='changecountry'
                  className='header-country-choose-link'>
                  Change country/region
                </a>
              </p>
            </div>
          </div>
          <div className='header-signin'>
            <p>Hello, sign in</p>
            <div className='header-signin-bottom-article'>
              <h5>Account & Lists</h5>
              <BsFillCaretDownFill size={10}></BsFillCaretDownFill>
            </div>
            {/* Signin Hover */}
            <div className='header-signin-card'>
              <div className='signin-btn'>
                <button>Sign in</button>
              </div>
              <p className='login-start'>
                New customer? <a href='login'>start here</a>
              </p>
              <div className='login-content'>
                <div>
                  <h5>Your Lists</h5>
                  <p>Create a List</p>
                  <p>Find a List or Registry</p>
                  <p>AmazonSmile Charity Lists</p>
                </div>
                <div>
                  <h5>Your Accounts</h5>
                  <p>Account</p>
                  <p>Orders</p>
                  <p>Recommendations</p>
                  <p>Browsing History</p>
                  <p>Watchlist</p>
                  <p>Video Purchases & Rentals</p>
                  <p>Kindle Unlimited</p>
                  <p>Content & Devices</p>
                  <p>Subscribe & Save Items</p>
                  <p>Memberships & Subscriptions</p>
                  <p>Prime Membership</p>
                  <p>Amazon Credit Cards</p>
                  <p>Music Library</p>
                  <p>Start a Selling Account</p>
                  <p>Register for a Business Account</p>
                  <p>Customer Service</p>
                </div>
              </div>
            </div>
          </div>
          <div className='header-r-o'>
            <p>Returns</p>
            <h5>& Orders</h5>
          </div>
          <div className='header-basket'>
            <BsCart2 size={30}></BsCart2>
            <span className='product-count'>99</span>
            <h5>Cart</h5>
          </div>
        </main>
      </header>
      {/* Sub Menu */}
      <aside id='sub-menu'>
        <ul>
          <li>
            <HiBars3CenterLeft size={20}></HiBars3CenterLeft>
            <h4>All</h4>
          </li>
          <li>
            <p>Today's Deals</p>
          </li>
          <li>
            <p>Customer Service</p>
          </li>
          <li>
            <p>Registry</p>
          </li>
          <li>
            <p>Gift Cards</p>
          </li>
          <li>
            <p>Sell</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Shop deals in Electronics</p>
          </li>
        </ul>
      </aside>
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
      {/* Hero Product */}
      <section id='hero-product'>
        <aside>
          <div>
            <h4>Gaming accessories</h4>
            <div className='column'>
              <div className='column-1'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                  alt=''
                />
                <p>headset</p>
              </div>
              <div className='column-2'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                  alt=''
                />
                <p>keyboards</p>
              </div>
            </div>
            <div className='column'>
              <div className='column-1'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg'
                  alt=''
                />
                <p>Computre mice</p>
              </div>
              <div className='column-2'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg'
                  alt=''
                />
                <p>Chairs</p>
              </div>
            </div>
          </div>
          <div>
            <h4>Gaming accessories</h4>
            <div className='column'>
              <div className='column-1'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                  alt=''
                />
                <p>headset</p>
              </div>
              <div className='column-2'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                  alt=''
                />
                <p>keyboards</p>
              </div>
            </div>
            <div className='column'>
              <div className='column-1'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                  alt=''
                />
                <p>headset</p>
              </div>
              <div className='column-2'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                  alt=''
                />
                <p>keyboards</p>
              </div>
            </div>
          </div>
          <div className='column-single-product'>
            <article>
              <h4>Easy returns</h4>
              <img
                src='https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg'
                alt=''
              />
            </article>
          </div>
          <div className='column-info'>
            <div>
              <h4>Sign in for the best experience</h4>
              <button>Sign in securely</button>
            </div>
            <div>
              <img
                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg'
                alt=''
              />
            </div>
          </div>
        </aside>
      </section>
      <section id='independ-product'>
        <aside>
          <div>
            <h4>Gaming accessories</h4>
            <div className='column'>
              <div className='column-1'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                  alt=''
                />
                <p>headset</p>
              </div>
              <div className='column-2'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                  alt=''
                />
                <p>keyboards</p>
              </div>
            </div>
            <div className='column'>
              <div className='column-1'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                  alt=''
                />
                <p>headset</p>
              </div>
              <div className='column-2'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                  alt=''
                />
                <p>keyboards</p>
              </div>
            </div>
          </div>
          <div className='column-single-product'>
            <article>
              <h4>Health & Personal Care</h4>
              <img
                src='https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg'
                alt=''
              />
            </article>
          </div>
          <div>
            <h4>Gaming accessories</h4>
            <div className='column'>
              <div className='column-1'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                  alt=''
                />
                <p>headset</p>
              </div>
              <div className='column-2'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                  alt=''
                />
                <p>keyboards</p>
              </div>
            </div>
            <div className='column'>
              <div className='column-1'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                  alt=''
                />
                <p>headset</p>
              </div>
              <div className='column-2'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                  alt=''
                />
                <p>keyboards</p>
              </div>
            </div>
          </div>
          <div>
            <h4>Gaming accessories</h4>
            <div className='column'>
              <div className='column-1'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                  alt=''
                />
                <p>headset</p>
              </div>
              <div className='column-2'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                  alt=''
                />
                <p>keyboards</p>
              </div>
            </div>
            <div className='column'>
              <div className='column-1'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                  alt=''
                />
                <p>headset</p>
              </div>
              <div className='column-2'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                  alt=''
                />
                <p>keyboards</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
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

export default Header;
