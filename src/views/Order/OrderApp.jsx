import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";

import Header from "@/components/template/header/Header";

import Footer from "@/components/template/footer/Footer";

import Menu from "@/components/menu/Menu";

function OrderApp() {
  return (
    <>
      <Header />
      <Menu />
      <MobileHeaderApp />
      <section id='order-views'>
        <h3>Your Orders</h3>
        <div className='order-card'>
          <h4>Order</h4>
          <div className='order-card-info'>
            <p>February 3rd 2021,2:42am</p>
            <p>Order ID: pi_1IGY2tImEgmfO9dxQu9UJ342</p>
          </div>
          <div className='order-card-product'>
            <div>
              <div>
                <img
                  src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71sgAr9atBS._AC_SX466_.jpg'
                  alt=''
                />
              </div>
              <p>
                ASUS ROG Strix Scar 15 Gaming Laptop, 15.6" 300Hz IPS Type FHD
                Display, NVIDIA GeForce RTX 3080, AMD Ryzen 9 5900HX, 16GB DDR4,
                1TB SSD, Opti-Mechanical Per-Key RGB Keyboard, Windows 11,
                G533QS-DS94
              </p>
            </div>
            <div>
              <p>$39.80</p>
            </div>
          </div>
          <div className='total-for-order'>
            <p>$39.80</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default OrderApp;
