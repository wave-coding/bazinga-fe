import SingleProduct from "../ui/Card/SingleProduct";

import {
  ShopAndLaptops,
  FitnessNeeds,
  Cellphones,
  SmallKitchenProduct,
} from "@/data/ProductRow/SingleRowProduct";

function PCRowTwo() {
  return (
    <>
      <section id='product-category'>
        <aside>
          <SingleProduct product={ShopAndLaptops} />
          <SingleProduct product={FitnessNeeds} />
          <SingleProduct product={Cellphones} />
          <SingleProduct product={SmallKitchenProduct} />
        </aside>
      </section>
    </>
  );
}

export default PCRowTwo;
