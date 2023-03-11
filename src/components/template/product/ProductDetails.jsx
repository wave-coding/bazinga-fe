import Header from "@/components/template/header/Header";
import Menu from "@/components/menu/Menu";
import Footer from "@/components/template/footer/Footer";
import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";
import ProductSliderApp from "../../product-slider/components/ProductSliderApp";
import { MdAddShoppingCart } from "react-icons/md";
function ProductDetails() {
  return (
    <>
      <Header />
      <Menu />
      <MobileHeaderApp />
      {/* product Details */}
      <section className='product-details'>
        <div className='product-details-container'>
          <div className='product-details-gallery'>
            <img
              src='https://images-na.ssl-images-amazon.com/images/I/71jT8sUbriL._AC_SL1500_.jpg'
              alt=''
            />
          </div>
          <div className='product-details-information'>
            <article>
              <h4>
                Olympus OM-D E-M5 Mark III Camera - Kit with 14-150mm Lens
                (Silver)
              </h4>
              <p>Brand: Olympus</p>
              <p>Price: $1,895.00</p>
            </article>
            <ul>
              <li>20MP live MOS sensor</li>
              <li>Portable, weather sealed design</li>
              <li>121-point all-cross-type on-chip phase detection AF</li>
              <li>
                Compact, in-body 5-axis image stabilization (up to approx. 5.5
                EV steps of compensation)
              </li>
              <li>50MP tripod high-res shot</li>
            </ul>
          </div>
          <div className='product-details-checkout'>
            <div className='box'>
              <p>$1,895.00</p>
              <button>
                <MdAddShoppingCart size={20} />
                <p>Add to Cart</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* product Details */}
      <ProductSliderApp />
      <Footer />
    </>
  );
}

export default ProductDetails;
