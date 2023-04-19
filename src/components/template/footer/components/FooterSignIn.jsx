import { useGlobalContext } from "@/context/useContext";

import AppButton from "../../../ui/Button/AppButton";

import { Link } from "react-router-dom";

function FooterSignIn() {
  const { lang, user } = useGlobalContext();

  return (
    <>
      {!user.auth && (
        <section id='footer-signin'>
          <main>
            <p>{lang.footer.footer_signin_title}</p>
            <Link to={"/login"}>
              <AppButton text={lang.label.login_title} />
            </Link>
            <p>
              New customer? <Link to={"/signup"}>start here</Link>
            </p>
          </main>
        </section>
      )}
    </>
  );
}

export default FooterSignIn;
