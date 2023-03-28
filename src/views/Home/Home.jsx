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
      {/* <ProductSlider /> */}
      <SponsoredApp />
      <ProductCategoryApp />
      {/* <ProductSlider /> */}
      {/* <ProductSlider /> */}
      {/* <ProductSlider /> */}
      {/* sponser img */}
      <ProductCategoryApp />
      {/* <ProductSlider /> */}
      {/* <ProductSlider /> */}
      <ProductCategoryApp />
      {/* <ProductSlider /> */}
      <Footer />
    </>
  );
}

export default Home;
