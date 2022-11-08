import { useGlobalContext } from "../context/useContext";

function Header() {
  console.log(useGlobalContext());
  return (
    <>
      <header>
        <h3>Amazon ✌😉</h3>
      </header>
    </>
  );
}

export default Header;
