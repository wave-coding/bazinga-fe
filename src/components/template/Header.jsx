import { useGlobalContext } from "../../context/useContext";
import AmazonLogo from "../../assets/media/logo/Amazon-logo.png";

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
        </main>
      </header>
    </>
  );
}

export default Header;
