import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";

import { ImStarEmpty, ImStarFull } from "react-icons/im";
// ImStarHalf,
import Header from "@/components/template/header/Header";

import Footer from "@/components/template/footer/Footer";

import { allProduct } from "@/data/allProducts";

import Menu from "@/components/menu/Menu";

import { Link } from "react-router-dom";

function ProductListApp() {
  return (
    <>
      <Header />
      <Menu />
      <MobileHeaderApp />
      {/* Product List */}
      <section className='shop-list'>
        <div className='category-shop'>
          <article>
            <h5>Department</h5>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Camera & Photo</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Mobile Phones & Communication</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Computers and Accessories</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Mobile Phones & Communication</span>
            </div>
          </article>
          <article>
            <h5>From Our Brands</h5>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Our Brands</span>
            </div>
          </article>
          <article>
            <h5>Featured Brands</h5>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Olympus</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Panasonic</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Nikon</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Ricoh</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Canon</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Lee</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Champion</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Nothing</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Apple</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Amazon</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>HP</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Nokia</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Sony</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Samsung</span>
            </div>
          </article>
          <article>
            <h5>Avg. Customer Review</h5>
            <div className='check-filter'>
              <span>
                <ImStarFull color='orange' />
              </span>
              <span>
                <ImStarFull color='orange' />
              </span>
              <span>
                <ImStarFull color='orange' />
              </span>
              <span>
                <ImStarFull color='orange' />
              </span>
              <span>
                <ImStarEmpty color='orange' />
              </span>
              <span>& Up</span>
            </div>
            <div className='check-filter'>
              <span>
                <ImStarFull color='orange' />
              </span>
              <span>
                <ImStarFull color='orange' />
              </span>
              <span>
                <ImStarFull color='orange' />
              </span>
              <span>
                <ImStarEmpty color='orange' />
              </span>
              <span>
                <ImStarEmpty color='orange' />
              </span>
              <span>& Up</span>
            </div>
            <div className='check-filter'>
              <span>
                <ImStarFull color='orange' />
              </span>
              <span>
                <ImStarFull color='orange' />
              </span>
              <span>
                <ImStarEmpty color='orange' />
              </span>
              <span>
                <ImStarEmpty color='orange' />
              </span>
              <span>
                <ImStarEmpty color='orange' />
              </span>
              <span>& Up</span>
            </div>
            <div className='check-filter'>
              <span>
                <ImStarFull color='orange' />
              </span>
              <span>
                <ImStarEmpty color='orange' />
              </span>
              <span>
                <ImStarEmpty color='orange' />
              </span>
              <span>
                <ImStarEmpty color='orange' />
              </span>
              <span>
                <ImStarEmpty color='orange' />
              </span>
              <span>& Up</span>
            </div>
          </article>
          <article>
            <h5>Price</h5>
            <div className='check-filter'>
              <span>under $25</span>
            </div>
            <div className='check-filter'>
              <span>$25 to $50</span>
            </div>
            <div className='check-filter'>
              <span>$50 to $100</span>
            </div>
            <div className='check-filter'>
              <span>$100 to $200</span>
            </div>
            <div className='check-filter'>
              <span>$200 and above</span>
            </div>
          </article>
          <article>
            <h5>Seller</h5>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Olympus</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Panasonic</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Nikon</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Ricoh</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Canon</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Nothing</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Apple</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Nokia</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Sony</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Samsung</span>
            </div>
          </article>
          <article>
            <h5>Availability</h5>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Active</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Upcoming</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Missed</span>
            </div>
          </article>
        </div>
        <div className='category-product'>
          {allProduct.map((product, idx) => (
            <Link
              key={idx}
              to={`/product/${product.path}/${product.id}`}>
              <article>
                <img
                  src={product.img}
                  alt={product.name}
                />
                <div>{product.name.substring(0, 29) + "..."}</div>
              </article>
            </Link>
          ))}
        </div>
      </section>
      {/* Product List */}
      <Footer />
    </>
  );
}

export default ProductListApp;
