import { FavoritesProduct } from "@/data/ProductRow/FourRowProduct";

import SingleProduct from "../../ui/Card/SingleProduct";

import RecommendedProdcut from "./RecommendedProduct";

import FourProductApp from "./FourProductApp";

import {
  HealthProduct,
  DressProduct,
} from "@/data/ProductRow/SingleRowProduct";

function ProductRowApp() {
  return (
    <>
      <section id='independ-product'>
        <aside>
          <SingleProduct
            key={"HealthProduct"}
            product={HealthProduct}
          />
          <SingleProduct
            key={"Kindleproduct"}
            product={DressProduct}
          />
          <FourProductApp
            key={"FavoritesProduct"}
            products={FavoritesProduct}
          />
          <RecommendedProdcut />
        </aside>
      </section>
    </>
  );
}

export default ProductRowApp;
