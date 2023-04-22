import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";

import Checkout_Sponsored from "@/assets/media/sponsored/Checkout_Img.jpg";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import Header from "@/components/template/header/Header";

import Footer from "@/components/template/footer/Footer";

import { useGlobalContext } from "@/context/useContext";

import { ToastContainer } from "react-toastify";

import { useNavigate } from "react-router-dom";

import Menu from "@/components/menu/Menu";

import { v4 as uuidv4 } from "uuid";

import moment from "moment";

function CheckoutApp() {
  const movePage = useNavigate();
  const {
    cart,
    total_price,
    delete_item,
    increase_product,
    decrease_product,
    add_orders,
  } = useGlobalContext();
  function create_add_orders(product) {
    add_orders({
      product: [...product],
      order_id: uuidv4(),
      date: moment().format("MMMM Do YYYY, h:mm:ss a"),
      total_price,
    });
    movePage("/orders");
  }
  return (
    <>
      <Header />
      <Menu />
      <MobileHeaderApp />
      {/* Checkout Content*/}
      <section className='checkout'>
        <div className='checkout-product'>
          <div className='checkout-sponsered'>
            <img
              src={Checkout_Sponsored}
              alt='Checkout_Sponsored'
            />
          </div>
          {cart.length > 0 ? (
            <div className='checkout-shopping'>
              <h2>Shopping Cart</h2>
              <p>Price</p>
              <div className='checkout-shopping-box'>
                {cart.map((product) => (
                  <article
                    key={product.id}
                    className='checkout-shopping-box-content'>
                    <div>
                      <img
                        src={product.img}
                        alt={product.name}
                        width={"20px"}
                      />
                      <p style={{ textAlign: "start", fontSize: "13px" }}>
                        {product.name}
                        <span
                          onClick={() => delete_item(product.id)}
                          style={{
                            display: "block",
                            textAlign: "start",
                            margin: "0.5rem 0",
                            color: "blue",
                            cursor: "pointer",
                          }}>
                          Delete
                        </span>
                        <span className='checkout-quantity'>
                          <button onClick={() => increase_product(product.id)}>
                            <AiOutlinePlus />
                          </button>
                          <span>{product.quantity}</span>
                          <button onClick={() => decrease_product(product.id)}>
                            <AiOutlineMinus />
                          </button>
                        </span>
                      </p>
                    </div>
                    <div>${product.price}</div>
                  </article>
                ))}
              </div>
              <p className='checkout-subtotal'>
                Subtotal({cart.length} items): <b>{total_price} $</b>
              </p>
            </div>
          ) : (
            <h3 style={{ margin: "1rem 0" }}>Your Amazon Cart is empty.</h3>
          )}
        </div>
        <div className='checkout-price'>
          <div>
            <p>
              Subtotal({cart.length} items): <b>{total_price} $</b>
            </p>
            <button onClick={() => create_add_orders(cart)}>
              Procced to checkout
            </button>
          </div>
        </div>
      </section>
      {/* Checkout Content*/}
      <Footer />
      {/* Toast Container */}
      <ToastContainer></ToastContainer>
    </>
  );
}

export default CheckoutApp;
