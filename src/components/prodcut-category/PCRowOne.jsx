import SingleProduct from "../ui/Card/SingleProduct";

import {
  BeautyPicks,
  FitAtHome,
  ComputersAndAccessories,
  DealsTools,
} from "@/data/ProductRow/SingleRowProduct";

function PCRowOne() {
  return (
    <>
      <section id='product-category'>
        <aside>
          <SingleProduct product={BeautyPicks} />
          <SingleProduct product={FitAtHome} />
          <SingleProduct product={ComputersAndAccessories} />
          <SingleProduct product={DealsTools} />
        </aside>
      </section>
    </>
  );
}

export default PCRowOne;
