import MobileHeaderApp from "@/components/template/header/components/MobileHeaderApp";

import { accountFeatures } from "@/data/Account/accountFeatures";

import { accountDatatable } from "@/data/Account/accountDatatable";

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
        <h2>Your Account</h2>
        <div className='account-card'>
          {accountFeatures.map((features, idx) => (
            <div
              className='account-card-data'
              key={idx}>
              <div className='account-card-data-img'>
                <img
                  src={features.img}
                  alt={features.title}
                />
              </div>
              <div className='account-card-data-text'>
                <h4>{features.title}</h4>
                <p>{features.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='account-data-table'>
          {accountDatatable.map((datatable, idx) => (
            <div
              className='account-data-table-list'
              key={idx}>
              <h4>{datatable.title}</h4>
              {datatable.subtitle.map((sub, idx) => (
                <p key={idx}>{sub}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AccountApp;
