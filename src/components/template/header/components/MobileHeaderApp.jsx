import { HiBars3CenterLeft } from "react-icons/hi2";
import { RiMapPinUserFill } from "react-icons/ri";
import { MdSearch, MdOutlinePlace } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { useGlobalContext } from "@/context/useContext";
import AmazonLogo from "@/assets/media/logo/Amazon-logo.png";

function MobileHeaderApp() {
  const { open_nav } = useGlobalContext();
  return (
    <>
      <nav className='mobile-header'>
        <div className='img-menu'>
          <ul>
            <li>
              <span onClick={() => open_nav()}>
                <HiBars3CenterLeft size={20}></HiBars3CenterLeft>
              </span>
            </li>
            <li>
              <div>
                <img
                  src={AmazonLogo}
                  alt='amazon-logo'
                />
              </div>
            </li>
          </ul>
        </div>
        <div className='info-menu'>
          <div>
            <h4>Hosein ,</h4>
            <RiMapPinUserFill size={20} />
          </div>
          <div className='header-basket'>
            <BsCart2 size={30}></BsCart2>
            <span className='product-count'>99</span>
            <h5>Cart</h5>
          </div>
        </div>
      </nav>
      {/* search-bar */}
      <section className='mobile-search'>
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
      </section>
      {/* Deals */}
      <section className='mobile-deals'>
        <ul>
          <li>
            <p>Deals</p>
          </li>
          <li>
            <p>Amazon Basics</p>
          </li>
          <li>
            <p>Buy Again</p>
          </li>
          <li>
            <p>Video</p>
          </li>
          <li>
            <p>Best Seller</p>
          </li>
        </ul>
      </section>
      {/* Deliver */}
      <section className='mobile-deliver'>
        <div>
          <MdOutlinePlace size={15} />
        </div>
        <div>Deliver to Iran, Bandar-e-Abbas</div>
      </section>
    </>
  );
}

export default MobileHeaderApp;
