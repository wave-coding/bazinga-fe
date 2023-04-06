import {
  BeautyPicks,
  FitAtHome,
  ComputersAndAccessories,
  DealsTools,
} from "@/data/ProductRow/SingleRowProduct";
import SingleProduct from "../ui/Card/SingleProduct";

function PCRowOne() {
  return (
    <>
      <section id='product-category'>
        <aside>
          <SingleProduct product={BeautyPicks} />
          <SingleProduct product={FitAtHome} />
          <SingleProduct product={ComputersAndAccessories} />
          <SingleProduct product={DealsTools} />
          {/* <div>
              <h4>Gaming accessories</h4>
              <div className='column'>
                <div className='column-1'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                    alt=''
                  />
                  <p>headset</p>
                </div>
                <div className='column-2'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                    alt=''
                  />
                  <p>keyboards</p>
                </div>
              </div>
              <div className='column'>
                <div className='column-1'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                    alt=''
                  />
                  <p>headset</p>
                </div>
                <div className='column-2'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                    alt=''
                  />
                  <p>keyboards</p>
                </div>
              </div>
            </div> */}
          {/* <div>
              <h4>Gaming accessories</h4>
              <div className='column'>
                <div className='column-1'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                    alt=''
                  />
                  <p>headset</p>
                </div>
                <div className='column-2'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                    alt=''
                  />
                  <p>keyboards</p>
                </div>
              </div>
              <div className='column'>
                <div className='column-1'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                    alt=''
                  />
                  <p>headset</p>
                </div>
                <div className='column-2'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                    alt=''
                  />
                  <p>keyboards</p>
                </div>
              </div>
            </div> */}
          {/* <div>
              <h4>Gaming accessories</h4>
              <div className='column'>
                <div className='column-1'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                    alt=''
                  />
                  <p>headset</p>
                </div>
                <div className='column-2'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                    alt=''
                  />
                  <p>keyboards</p>
                </div>
              </div>
              <div className='column'>
                <div className='column-1'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                    alt=''
                  />
                  <p>headset</p>
                </div>
                <div className='column-2'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                    alt=''
                  />
                  <p>keyboards</p>
                </div>
              </div>
            </div> */}
          {/* <div>
              <h4>Gaming accessories</h4>
              <div className='column'>
                <div className='column-1'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                    alt=''
                  />
                  <p>headset</p>
                </div>
                <div className='column-2'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                    alt=''
                  />
                  <p>keyboards</p>
                </div>
              </div>
              <div className='column'>
                <div className='column-1'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
                    alt=''
                  />
                  <p>headset</p>
                </div>
                <div className='column-2'>
                  <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
                    alt=''
                  />
                  <p>keyboards</p>
                </div>
              </div>
            </div> */}
        </aside>
      </section>
    </>
  );
}

export default PCRowOne;
