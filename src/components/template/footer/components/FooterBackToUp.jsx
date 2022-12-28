import { useGlobalContext } from "@/context/useContext";

function FooterBackToUp() {
  const { lang, back_to_top } = useGlobalContext();

  return (
    <>
      <section id='back-to-top'>
        <main onClick={() => back_to_top()}>
          <p>{lang.footer.footer_back_to_top}</p>
        </main>
      </section>
    </>
  );
}

export default FooterBackToUp;
