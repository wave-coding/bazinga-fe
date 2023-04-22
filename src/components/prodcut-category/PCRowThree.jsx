import SingleProduct from "../ui/Card/SingleProduct";

import {
  FashionTrends,
  StripLights,
  Tracker,
  PetSupplies,
} from "@/data/ProductRow/SingleRowProduct";

function PCRowThree() {
  return (
    <>
      <section id='product-category'>
        <aside>
          <SingleProduct product={FashionTrends} />
          <SingleProduct product={StripLights} />
          <SingleProduct product={Tracker} />
          <SingleProduct product={PetSupplies} />
        </aside>
      </section>
    </>
  );
}

export default PCRowThree;
