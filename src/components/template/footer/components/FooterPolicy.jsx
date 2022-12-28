import { useGlobalContext } from "@/context/useContext";

function FooterPolicy() {
  const { lang } = useGlobalContext();

  return (
    <>
      <footer>
        <p>{lang.footer.footer_policy}</p>
      </footer>
    </>
  );
}

export default FooterPolicy;
