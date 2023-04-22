// product-category
// import ProductCategoryApp from "@/components/prodcut-category/components/ProductCategoryApp";
// mobile header
import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";
// product-slider
import ProductSlider from "@/components/template/productSlider/ProductSlider";
// products from data
import { boostedBoardProducts } from "@/data/ProductSlider/BoostedBoard";

import { puddleBoardProducts } from "@/data/ProductSlider/PuddleBoard";

import { smartPhoneProducts } from "@/data/ProductSlider/SmartPhone";

import { smartWatchProduct } from "@/data/ProductSlider/SmartWatch";

import { chocolateProducts } from "@/data/ProductSlider/Chocolate";

import PCRowThree from "@/components/prodcut-category/PCRowThree";

import { backpackPorduct } from "@/data/ProductSlider/Backpack";
// sopnsored
import SponsoredApp from "@/components/sponsored/SponsoredApp";
// product category
import PCRowOne from "@/components/prodcut-category/PCRowOne";

import PCRowTwo from "@/components/prodcut-category/PCRowTwo";
// product-row
import ProductRow from "@/components/product-row/ProductRow";
// products
import { cameraProduct } from "@/data/ProductSlider/Camera";

import { BooksProduct } from "@/data/ProductSlider/Books";
// header
import Header from "@/components/template/header/Header";
// footer
import Footer from "@/components/template/footer/Footer";
// sub-menu
import Menu from "@/components/menu/Menu";
// hero
import Hero from "@/components/hero/Hero";

function Home() {
  return (
    <>
      {/* Template */}
      <Header />
      <Menu />
      <MobileHeaderApp />
      <Hero />
      <ProductRow />
      <ProductSlider
        key={"books"}
        products={BooksProduct}
      />
      <ProductSlider
        key={"smartwatch"}
        products={smartWatchProduct}
      />
      <SponsoredApp />
      {/* <ProductCategoryApp /> */}
      <PCRowThree />
      <ProductSlider
        key={"runningshoes"}
        products={backpackPorduct}
      />
      <ProductSlider
        key={"smartphone"}
        products={smartPhoneProducts}
      />
      <ProductSlider
        key={"chocolate"}
        products={chocolateProducts}
      />
      {/* sponser img */}
      <PCRowOne />
      <ProductSlider
        key={"camera"}
        products={cameraProduct}
      />
      <ProductSlider
        key={"puddleboard"}
        products={puddleBoardProducts}
      />
      <PCRowTwo />
      <ProductSlider
        key={"boostedboard"}
        products={boostedBoardProducts}
      />
      <Footer />
    </>
  );
}

export default Home;
