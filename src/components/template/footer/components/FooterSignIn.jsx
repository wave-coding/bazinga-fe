import { useGlobalContext } from "@/context/useContext";

import AppButton from "../../../ui/Button/AppButton";

function FooterSignIn() {
  const { lang } = useGlobalContext();

  return (
    <>
      <section id='footer-signin'>
        <main>
          <p>{lang.footer.footer_signin_title}</p>
          <AppButton text={lang.label.login_title} />
          <p>
            New customer? <a href='login'>start here</a>
          </p>
        </main>
      </section>
    </>
  );
}

export default FooterSignIn;
