import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";
import ProductSliderApp from "@/components/product-slider/components/ProductSliderApp";
import "react-image-gallery/styles/css/image-gallery.css";
import Header from "@/components/template/header/Header";
import Footer from "@/components/template/footer/Footer";
import { MdAddShoppingCart } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import Menu from "@/components/menu/Menu";
import { useEffect, useState } from "react";
import { ps5Game } from "@/data/HeroSuggest/ps5Game";
import { useParams } from "react-router-dom";
function Ps5Game() {
  const [product, setProduct] = useState({});
  const [gallery, setGallery] = useState([]);
  const [test,setTest] = useState(false)
  const id = useParams();
  useEffect(() => {
    ps5Game[0].products_col_one.forEach((products, idx) => {
      if (products.id == id.id) {
        setProduct({ ...products });
        setGallery([...products.gly]);
        setTest(true)
        console.log(gallery);
      }
    });
    ps5Game[0].products_col_two.forEach((products, idx) => {
      if (products.id == id.id) {
        setProduct({ ...products });
        setGallery(products.gly);
      }
    });
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
  }, []);

  return (
    <>
      <Header />
      <Menu />
      <MobileHeaderApp />
      {/* product Details */}
      <section className='product-details'>
        <div className='product-details-container'>
          <div className='product-details-gallery'>
           {test ?  <ImageGallery
              items={gallery}
              showNav={false}
              thumbnailPosition={"left"}
              showPlayButton={false}
            /> : 'nice'}
          </div>
          <div className='product-details-information'>
            <article>
              <h4>{product.name}</h4>
              <p className='brand'>Brand: Olympus</p>
              <p className='price'>
                <span>Price:</span>
                <span>$1,895.00</span>
              </p>
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

export default Ps5Game;
