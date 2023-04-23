import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";

import order_img from "@/assets/media/order/order_Img.png";

import Header from "@/components/template/header/Header";

import Footer from "@/components/template/footer/Footer";

import { useGlobalContext } from "@/context/useContext";

import Menu from "@/components/menu/Menu";

import AuthApp from "../Auth/AuthApp";

function OrderApp() {
  const { orders, user } = useGlobalContext();
  if (!user.auth) {
    return <AuthApp path={"/login"}></AuthApp>;
  } else {
    return (
      <>
        <Header />
        <Menu />
        <MobileHeaderApp />
        <section id='order-views'>
          <h2>Your Orders</h2>
          {orders.length > 0 ? (
            <>
              {orders.map((order, idx) => (
                <div
                  className='order-card'
                  key={idx}>
                  <h4>Order</h4>
                  <div className='order-card-info'>
                    <p>{order.date}</p>
                    <p>Order ID: {order.order_id}</p>
                  </div>
                  {order.product.map((product, idx) => (
                    <div
                      className='order-card-product'
                      key={idx}>
                      <div>
                        <div>
                          <img
                            src={product.img}
                            alt={product.name}
                          />
                        </div>
                        <p>{product.name}</p>
                      </div>
                      <div>
                        <p>${product.price}</p>
                      </div>
                    </div>
                  ))}
                  <div className='total-for-order'>
                    <p>${order.total_price}</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className='order-empty'>
                <div>
                  <img
                    src={order_img}
                    alt='order_img'
                  />
                </div>
                <h4>Your Order List Is Empty</h4>
              </div>
            </>
          )}
        </section>
        <Footer />
      </>
    );
  }
}

export default OrderApp;
