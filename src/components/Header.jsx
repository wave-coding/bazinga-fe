import { useGlobalContext } from "../context/useContext";

function Header() {
  console.log(useGlobalContext());
  return (
    <>
      <header>
        <h3>Start Amazon Project ✌😉</h3>
      </header>
    </>
  );
}

export default Header;
