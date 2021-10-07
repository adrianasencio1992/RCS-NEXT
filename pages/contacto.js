import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCContacto from "./contacto.styled";

export default function Contacto() {
  return (
    <SCContacto>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Contacto</h1>
        <p className="p-obra-nueva">Estamos a tu disposición</p>
      </div>
      <section className="section-contacto">
        <h2 className="h2-contacto">CONTÁCTANOS</h2>
        <hr className="hr-contacto"></hr>
        <p className="p-contacto">
          Pide un presupuesto sin compromiso y de forma gratuita.
        </p>
        <div className="div-todo">
          <div className="div-maps">
            <h2>Rubí</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.5382656428524!2d2.0356736145765866!3d41.49260899742996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4916fefb862fb%3A0xe368ae922ae7b5f4!2sCarrer%20de%20Lope%20de%20Vega%2C%2022%2C%2008191%20Rub%C3%AD%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1632135941696!5m2!1ses!2ses"
              width="350"
              height="300"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="div-general-contacto">
            <div className="div-subgeneral-contacto">
              <div className="div-circulo-contacto">◉</div>
              <div className="div-p-contacto">
                C/ Lope de Vega 22 LOCAL, Rubí
              </div>
            </div>
            <div className="div-subgeneral-contacto">
              <div className="div-circulo-contacto">✆</div>
              <div className="div-p-contacto">937 234 618</div>
            </div>
            <div className="div-subgeneral-contacto">
              <a className="a-contacto" href="mailto:rcs.reformas@hotmail.com">
                <div className="div-circulo-contacto">✉</div>
              </a>
              <div className="div-p-contacto">info@grupgres.cat</div>
            </div>
            <div className="div-subgeneral-contacto">
              <div className="div-circulo-contacto-redes">
                <a
                  className="a"
                  href="https://www.instagram.com/rcs_reformas/"
                  target="_blank"
                >
                  <img
                    className="img-instagram"
                    src="/instagram-logo.png"
                  ></img>
                </a>
              </div>
              <div className="div-p-contacto">Instagram</div>
            </div>
            <div className="div-subgeneral-contacto">
              <div className="div-circulo-contacto-redes">
                <a
                  href="https://www.facebook.com/rcs.empresadereformas/"
                  target="_blank"
                >
                  <img className="img-facebook" src="/facebook-logo.png"></img>
                </a>
              </div>
              <div className="div-p-contacto">Facebook</div>
            </div>
          </div>
        </div>
      </section>
      <SCFooter></SCFooter>
    </SCContacto>
  );
}
