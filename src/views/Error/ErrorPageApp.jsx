import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";

import Header from "@/components/template/header/Header";

import Footer from "@/components/template/footer/Footer";

import Menu from "@/components/menu/Menu";

import { Link } from "react-router-dom";

function ErrorPageApp() {
  return (
    <>
      <Header />
      <Menu />
      <MobileHeaderApp />
      <section className='error-page'>
        <div className='error-content'>
          <div>
            <Link to={"/"}>
              <img
                src='https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png'
                alt='error-content'
              />
            </Link>
          </div>
          <div>
            <div className='meet-the-dog'>
              <img
                src='https://images-na.ssl-images-amazon.com/images/G/01/error/198._TTD_.jpg'
                alt='meet-the-dog'
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ErrorPageApp;
