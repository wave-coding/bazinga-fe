import AmazonLogo from "@/assets/media/logo/Amazon-logo.png";

import { MdOutlinePlace, MdSearch } from "react-icons/md";

import ReactCountryFlag from "react-country-flag";

import { BsCart2, BsFillCaretDownFill } from "react-icons/bs";

import { Link } from "react-router-dom";

function HeaderApp() {
  return (
    <>
      <header>
        <main>
          <Link to={"/"}>
            <div className='main-logo'>
              <img
                src={AmazonLogo}
                alt='Amazon-logo'
              />
            </div>
          </Link>
          <div className='header-address'>
            <div>
              <MdOutlinePlace size={20}></MdOutlinePlace>
            </div>
            <article>
              <p>Iran</p>
              <p>Bandar-e-abbas</p>
            </article>
          </div>
          <div className='header-search'>
            <div>
              <select
                name='category'
                id='category'>
                <option value='All'>All</option>
                <option value='Books'>Books</option>
                <option value='Movies'>Movies</option>
                <option value='Series'>Series</option>
                <option value='Sport'>Sport</option>
                <option value='Music'>Music</option>
                <option value='Gaming'>Gaming</option>
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
    </>
  );
}

export default HeaderApp;
