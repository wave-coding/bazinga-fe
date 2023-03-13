import Header from "@/components/template/header/Header";
import Menu from "@/components/menu/Menu";
import Footer from "@/components/template/footer/Footer";
import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";
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
              <span>Camera & Photo</span>
            </div>
            <div className='check-filter'>
              <input type='checkbox' />
              <span>Camera & Photo</span>
            </div>
          </article>
        </div>
        <div className='category-product'>
          <article>
            <img
              src='https://images-fe.ssl-images-amazon.com/images/I/41jwbCD0khL._AC_AA160_.jpg'
              alt=''
            />
            <div>Name</div>
          </article>
          <article>
            <img
              src='https://images-fe.ssl-images-amazon.com/images/I/413eVsQoYeL._AC_AA160_.jpg'
              alt=''
            />
            <div>Name</div>
          </article>
          <article>
            <img
              src='https://m.media-amazon.com/images/I/71M8ocFNBgL._AC_UL320_.jpg'
              alt=''
            />
            <div>Name</div>
          </article>
          <article>
            <img
              src='https://images-fe.ssl-images-amazon.com/images/I/41jwbCD0khL._AC_AA160_.jpg'
              alt=''
            />
            <div>Name</div>
          </article>
          <article>
            <img
              src='https://images-fe.ssl-images-amazon.com/images/I/41jwbCD0khL._AC_AA160_.jpg'
              alt=''
            />
            <div>Name</div>
          </article>
          <article>
            <img
              src='https://images-fe.ssl-images-amazon.com/images/I/413eVsQoYeL._AC_AA160_.jpg'
              alt=''
            />
            <div>Name</div>
          </article>
          <article>
            <img
              src='https://m.media-amazon.com/images/I/71M8ocFNBgL._AC_UL320_.jpg'
              alt=''
            />
            <div>Name</div>
          </article>
          <article>
            <img
              src='https://images-fe.ssl-images-amazon.com/images/I/41jwbCD0khL._AC_AA160_.jpg'
              alt=''
            />
            <div>Name</div>
          </article>
          <article>
            <img
              src='https://images-fe.ssl-images-amazon.com/images/I/41jwbCD0khL._AC_AA160_.jpg'
              alt=''
            />
            <div>Name</div>
          </article>
          <article>
            <img
              src='https://images-fe.ssl-images-amazon.com/images/I/413eVsQoYeL._AC_AA160_.jpg'
              alt=''
            />
            <div>Name</div>
          </article>
          <article>
            <img
              src='https://m.media-amazon.com/images/I/71M8ocFNBgL._AC_UL320_.jpg'
              alt=''
            />
            <div>Name</div>
          </article>
          <article>
            <img
              src='https://images-fe.ssl-images-amazon.com/images/I/41jwbCD0khL._AC_AA160_.jpg'
              alt=''
            />
            <div>Name</div>
          </article>
          <article>
            <img
              src='https://images-fe.ssl-images-amazon.com/images/I/41jwbCD0khL._AC_AA160_.jpg'
              alt=''
            />
            <div>Name</div>
          </article>
          <article>
            <img
              src='https://images-fe.ssl-images-amazon.com/images/I/41jwbCD0khL._AC_AA160_.jpg'
              alt=''
            />
            <div>Name</div>
          </article>
          <article>
            <img
              src='https://images-fe.ssl-images-amazon.com/images/I/41jwbCD0khL._AC_AA160_.jpg'
              alt=''
            />
            <div>Name</div>
          </article>
        </div>
      </section>
      {/* Product List */}
      <Footer />
    </>
  );
}

export default ProductListApp;
