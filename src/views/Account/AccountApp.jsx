import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";

import Header from "@/components/template/header/Header";

import Footer from "@/components/template/footer/Footer";

import Menu from "@/components/menu/Menu";

function AccountApp() {
  return (
    <>
      <Header />
      <Menu />
      <MobileHeaderApp />
      <section id='my-account'>
        <h2>My Account</h2>
      </section>
      <Footer />
    </>
  );
}

export default AccountApp;
