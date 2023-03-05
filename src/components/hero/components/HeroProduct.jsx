import { gameProduct } from "@/data/gameProduct";

import { easyReturn } from "@/data/easyReturn";

import { categoryShop } from "@/data/categoryShop";

import { informationProduct } from "@/data/informationProduct";

import FourProduct from "../../ui/Card/FourProduct";

import SingleProduct from "../../ui/Card/SingleProduct";

import InformationProduct from "../../ui/Card/InformationProduct";

function HeroProduct() {
  return (
    <>
      {/* Hero Product */}
      <section id='hero-product'>
        <aside>
          <FourProduct products={gameProduct} />
          <SingleProduct product={easyReturn} />
          <FourProduct products={categoryShop} />
          <InformationProduct product={informationProduct} />
        </aside>
      </section>
    </>
  );
}

export default HeroProduct;
