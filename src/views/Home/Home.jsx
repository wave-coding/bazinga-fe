// header
import Header from "@/components/template/header/Header";
// sub-menu
import Menu from "@/components/menu/Menu";
// hero
import Hero from "@/components/hero/Hero";
// product-row
import ProductRow from "@/components/product-row/ProductRow";
// product-slider
import ProductSlider from "@/components/product-slider/ProductSlider";
// footer
import Footer from "@/components/template/footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Hero />
      <ProductRow />
      <ProductSlider />
      <Footer />
    </>
  );
}

export default Home;
