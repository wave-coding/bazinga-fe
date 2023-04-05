import ProductSliderApp from "@/components/product-slider/components/ProductSliderApp";

import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";

import { boostedBoardProducts } from "@/data/ProductSlider/BoostedBoard";

import "react-image-gallery/styles/css/image-gallery.css";

import Header from "@/components/template/header/Header";

import Footer from "@/components/template/footer/Footer";

import { MdAddShoppingCart } from "react-icons/md";

import ImageGallery from "react-image-gallery";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import Menu from "@/components/menu/Menu";

function BoostedBoard() {
  // set Products
  const [product, setProduct] = useState({});
  // set Gallery
  const [gallery, setGallery] = useState([]);
  // set Loading
  const [loading, setLoading] = useState(false);
  // for show each product
  const id = useParams();
  useEffect(() => {
    boostedBoardProducts.products.forEach((products, idx) => {
      // eslint-disable-next-line
      if (products.id == id.id) {
        setProduct({ ...products });
        setGallery([...products.gallery]);
        setLoading(true);
      }
    });
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
    // eslint-disable-next-line
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
            {loading ? (
              <ImageGallery
                items={gallery}
                showNav={false}
                thumbnailPosition={"left"}
                showPlayButton={false}
              />
            ) : (
              "Is Loading..."
            )}
          </div>
          <div className='product-details-information'>
            <article>
              <h4>{product.name}</h4>
              <p className='brand'>Brand: {product.brand}</p>
              <p className='price'>
                <span>Price:</span>
                <span>$ {product.price}</span>
              </p>
            </article>
            <ul>
              {loading ? (
                <>
                  {product.information.map((info, idx) => (
                    <li key={idx}>
                      <b>{info.title}</b>: {info.description}
                    </li>
                  ))}
                </>
              ) : (
                "Is Loading..."
              )}
            </ul>
          </div>
          <div className='product-details-checkout'>
            <div className='box'>
              <p>$ {product.price}</p>
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

export default BoostedBoard;
