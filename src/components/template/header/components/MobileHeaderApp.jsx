import { HiBars3CenterLeft } from "react-icons/hi2";
import { RiMapPinUserFill } from "react-icons/ri";
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
              <li onClick={() => open_nav()}>
                <HiBars3CenterLeft size={20}></HiBars3CenterLeft>
              </li>
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
        <div className="info-menu">
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
    </>
  );
}

export default MobileHeaderApp;
