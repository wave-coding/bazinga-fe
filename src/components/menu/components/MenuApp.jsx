import { HiBars3CenterLeft } from "react-icons/hi2";

function MenuApp() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.opacity = "0.9";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.opacity = "1";
  }
  return (
    <>
      <aside id='sub-menu'>
        <ul>
          <li onClick={() => openNav()}>
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
      <nav
        id='mySidenav'
        class='sidenav'>
        <h4>test</h4>
        <h4 onClick={() => closeNav()}>close Nav</h4>
      </nav>
    </>
  );
}

export default MenuApp;
