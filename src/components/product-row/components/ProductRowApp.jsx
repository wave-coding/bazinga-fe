function ProductRowApp() {
  return (
    <>
      <section id='independ-product'>
        <aside>
          <div className='column-single-product'>
            <article>
              <h4>Health & Personal Care</h4>
              <img
                src='https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg'
                alt=''
              />
            </article>
          </div>
          <div className='column-single-product'>
            <article>
              <h4>Kindle Unlimited</h4>
              <img
                src='https://m.media-amazon.com/images/I/415Tfn6RqiL._SX370_.jpg'
                alt=''
              />
            </article>
          </div>
          <div>
            <h4>Your wellness favorites</h4>
            <div className='column'>
              <div className='column-1'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Consumables/Events/Deepi/BeautynWellnessGuide/AMZ-Winter23-BeautyWellnessGuide_QuadCard_Supplements-D-186x116_EG._SY116_CB613978413_.jpg'
                  alt=''
                />
                <p>Supplements</p>
              </div>
              <div className='column-2'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Consumables/Events/Deepi/BeautynWellnessGuide/AMZ-Winter23-BeautyWellnessGuide_QuadCard_Fitness-D-186x116_EG._SY116_CB613978413_.jpg'
                  alt=''
                />
                <p>Fitness</p>
              </div>
            </div>
            <div className='column'>
              <div className='column-1'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Consumables/Events/Deepi/BeautynWellnessGuide/AMZ-Winter23-BeautyWellnessGuide_QuadCard_Snacks-D-186x116_EG._SY116_CB613978413_.jpg'
                  alt=''
                />
                <p>Snacks</p>
              </div>
              <div className='column-2'>
                <img
                  src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumables/XCM_CUTTLE_1543938_2922214_186x116_1X_en_US._SY116_CB612443914_.jpg'
                  alt=''
                />
                <p>Beverages</p>
              </div>
            </div>
          </div>
          <div>
            <h4>Recommended for you from our brands</h4>
            <div className='column'>
              <div className='column-1'>
                <img
                  src='https://m.media-amazon.com/images/I/814XcLAe02L._AC_SY170_.jpg'
                  alt=''
                />
                {/* <p>headset</p> */}
              </div>
              <div className='column-2'>
                <img
                  src='https://m.media-amazon.com/images/I/81nc9mU1XwL._AC_SY170_.jpg'
                  alt=''
                />
                {/* <p>keyboards</p> */}
              </div>
            </div>
            <div className='column'>
              <div className='column-1'>
                <img
                  src='https://m.media-amazon.com/images/I/71lcImJBwrS._AC_SY170_.jpg'
                  alt=''
                />
                {/* <p>headset</p> */}
              </div>
              <div className='column-2'>
                <img
                  src='https://m.media-amazon.com/images/I/81BHlUPQDhL._AC_SY170_.jpg'
                  alt=''
                />
                {/* <p>keyboards</p> */}
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

export default ProductRowApp;
