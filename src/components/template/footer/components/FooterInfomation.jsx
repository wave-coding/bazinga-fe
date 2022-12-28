import { footerInformation } from "@/constant/footerInformation";

function FooterInformation() {
  return (
    <>
      <section id='footer-information'>
        <div>
          {footerInformation.map((grid, index) => (
            <ul key={index}>
              <h5>{grid.title}</h5>
              {grid.item.map((subtitle, index) => (
                <p key={index}>{subtitle}</p>
              ))}
            </ul>
          ))}
        </div>
      </section>
    </>
  );
}

export default FooterInformation;
