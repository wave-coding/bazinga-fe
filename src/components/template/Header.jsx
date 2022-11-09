import { useGlobalContext } from "../../context/useContext";
import AmazonLogo from "../../assets/media/logo/Amazon-logo.png";
import { MdOutlinePlace } from "react-icons/md";

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
            <MdOutlinePlace></MdOutlinePlace>
            <article>
              <p>Iran</p>
              <p>Bndar-e-abbas</p>
            </article>
          </div>
        </main>
      </header>
    </>
  );
}

export default Header;
