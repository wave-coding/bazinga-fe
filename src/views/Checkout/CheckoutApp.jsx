import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";
import Checkout_Sponsored from "@/assets/media/sponsored/Checkout_Img.jpg";
import Header from "@/components/template/header/Header";
import Footer from "@/components/template/footer/Footer";
import Menu from "@/components/menu/Menu";
function CheckoutApp() {
  return (
    <>
      <Header />
      <Menu />
      <MobileHeaderApp />
      {/* Checkout Cotent */}
      <section className='checkout'>
        <div className='checkout-product'>
          <div className='checkout-sponsered'>
            <img
              src={Checkout_Sponsored}
              alt='Checkout_Sponsored'
            />
          </div>
          <div className='checkout-shopping'>
            <h2>Shopping Cart</h2>
            <p>Price</p>
            <div className='checkout-shopping-box'>
              <article className='checkout-shopping-box-content'>
                <div>
                  <img
                    src='https://images-fe.ssl-images-amazon.com/images/I/31jNXNVKclL._AC_AA160_.jpg'
                    alt=''
                    width={"20px"}
                  />
                  <p>text</p>
                </div>
                <div>$599.99</div>
              </article>
              <article className='checkout-shopping-box-content'>
                <div>
                  <img
                    src='https://images-fe.ssl-images-amazon.com/images/I/31jNXNVKclL._AC_AA160_.jpg'
                    alt=''
                    width={"20px"}
                  />
                  <p>text</p>
                </div>
                <div>$599.99</div>
              </article>
            </div>
            <p className='checkout-subtotal'>
              Subtotal(2 items): <b>$628.08</b>
            </p>
          </div>
        </div>
        <div className='checkout-price'>
          <div>
            <p>
              Subtotal(2 items): <b>$628.08</b>
            </p>
            <button>Procced to checkout</button>
          </div>
        </div>
      </section>
      {/* Checkout Cotent */}
      <Footer />
    </>
  );
}

export default CheckoutApp;
