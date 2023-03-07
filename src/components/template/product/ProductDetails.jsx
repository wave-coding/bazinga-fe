import Header from "@/components/template/header/Header";
import Menu from "@/components/menu/Menu";
import Footer from "@/components/template/footer/Footer";
import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";
function ProductDetails() {
  return (
    <>
      <Header />
      <Menu />
      <MobileHeaderApp />
      <h4 style={{ padding: "2.2rem" }}>This is Product Details Page</h4>
      <Footer />
    </>
  );
}

export default ProductDetails;
