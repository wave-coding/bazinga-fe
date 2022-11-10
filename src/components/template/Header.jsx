import { useGlobalContext } from "../../context/useContext";
import AmazonLogo from "../../assets/media/logo/Amazon-logo.png";
import { MdOutlinePlace, MdSearch } from "react-icons/md";
import ReactCountryFlag from "react-country-flag";
import { BsCart2, BsFillCaretDownFill } from "react-icons/bs";

function Header() {
  console.log(useGlobalContext());
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
          </div>
          <div className='header-signin'>
            <p>Hello, sign in</p>
            <div className='header-signin-bottom-article'>
              <h5>Account & Lists</h5>
              <BsFillCaretDownFill size={10}></BsFillCaretDownFill>
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
    </>
  );
}

export default Header;
