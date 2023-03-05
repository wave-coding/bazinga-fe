import { HiBars3CenterLeft } from "react-icons/hi2";
import { RiMapPinUserFill } from "react-icons/ri";
import { useGlobalContext } from "@/context/useContext";

function MenuApp() {
  const { open_nav, close_nav } = useGlobalContext();
  return (
    <>
      <aside id='sub-menu'>
        <ul>
          <li onClick={() => open_nav()}>
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
      {/* side nav */}
      <nav
        id='mySidenav'
        className='sidenav'>
        <div className='side-profile-nav'>
          <RiMapPinUserFill size={20} />
          <h4>Hello, Hosein</h4>
        </div>
        <div className="side-content-nav">
          <div>
            <h3>Trending</h3>
            <li>Best Sellers</li>
            <li>Best Sellers</li>
          </div>
        </div>
        <h4 onClick={() => close_nav()}>close Nav</h4>
      </nav>
    </>
  );
}

export default MenuApp;
