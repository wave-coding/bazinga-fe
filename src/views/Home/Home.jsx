// header
import Header from "@/components/template/header/Header";
// sub-menu
import Menu from "@/components/menu/Menu";
// hero
import Hero from "@/components/hero/Hero";
// product-row
import ProductRow from "@/components/product-row/ProductRow";
// product-slider
// import ProductSlider from "@/components/product-slider/ProductSlider";
import ProductSlider from "@/components/template/productSlider/ProductSlider";
// product-category
import ProductCategoryApp from "@/components/prodcut-category/components/ProductCategoryApp";
// footer
import Footer from "@/components/template/footer/Footer";
// mobile header
import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";
// sopnsored
import SponsoredApp from "@/components/sponsored/SponsoredApp";
// products
import { BooksProduct } from "@/data/ProductSlider/Books";
import { smartWatchProduct } from "@/data/ProductSlider/SmartWatch";
import { backpackPorduct } from "@/data/ProductSlider/Backpack";
import { smartPhoneProducts } from "@/data/ProductSlider/SmartPhone";
import { chocolateProducts } from "@/data/ProductSlider/Chocolate";
import { cameraProduct } from "@/data/ProductSlider/Camera";
import { puddleBoardProducts } from "@/data/ProductSlider/PuddleBoard";
import { boostedBoardProducts } from "@/data/ProductSlider/BoostedBoard";
import PCRowOne from "@/components/prodcut-category/PCRowOne";
import PCRowTwo from "@/components/prodcut-category/PCRowTwo";

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
      <ProductCategoryApp />
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
