import { asusSuggestLaptop } from "@/data/HeroSuggest/asusLaptop";

import InformationProduct from "../../ui/Card/InformationProduct";

import { informationProduct } from "@/data/HeroSuggest/informationProduct";

import SingleProduct from "../../ui/Card/SingleProduct";

import { ps5Game } from "@/data/HeroSuggest/ps5Game";

import FourProduct from "../../ui/Card/FourProduct";

import { easyReturn } from "@/data/HeroSuggest/easyReturn";

function HeroProduct() {
  return (
    <>
      {/* Hero Product */}
      <section id='hero-product'>
        <aside>
          <FourProduct products={asusSuggestLaptop} />
          <SingleProduct product={easyReturn} />
          <FourProduct products={ps5Game} />
          <InformationProduct product={informationProduct} />
        </aside>
      </section>
    </>
  );
}

export default HeroProduct;
