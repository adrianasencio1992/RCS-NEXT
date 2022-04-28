import React from "react";
import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCContacto from "./contacto.styled";
import SCFormulario from "../components/formulario";
import SCWatsap from "../components/watsap";

export default function Contacto() {
  return (
    <SCContacto>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1
          className="h1-obra-nueva"
          data-aos="flip-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
          Contacto
        </h1>
        <p
          className="p-obra-nueva"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
          Estamos a tu disposición
        </p>
      </div>
      <section className="section-contacto">
        <h2 className="h2-contacto">CONTÁCTANOS</h2>
        <hr className="hr-contacto"></hr>
        <p className="p-contacto">
          Contáctanos sin compromiso. ¡Te atenderemos con mucho gusto!
        </p>
        <div className="div-todo">
          <div className="div-maps">
            <h2 className="h2-rubi">RUBÍ</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.512021904245!2d2.033412392041502!3d41.49571623110594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4917b01b9d4ef%3A0xf9090257adc3a351!2sCalle%20del%20Gral.%20Casta%C3%B1os%2C%2049%2C%2008191%20Rub%C3%AD%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1651172031167!5m2!1ses!2ses"
              width="350"
              height="300"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="div-general-contacto">
            <h2 className="h2-encontrar">Puedes encontrarnos en:</h2>
            <div className="div-subgeneral-contacto">
              <div className="div-circulo-contacto">◉</div>
              <div className="div-p-contacto">
                C/ General Castaños 49, Rubí (08191)
              </div>
            </div>
            <div className="div-subgeneral-contacto">
              <div className="div-circulo-contacto">✆</div>
              <div className="div-p-contacto">635126596 - 674686045</div>
            </div>
            <div className="div-subgeneral-contacto">
              <a className="a-contacto" href="mailto:rcs.reformas@hotmail.com">
                <div className="div-circulo-contacto">✉</div>
              </a>
              <div className="div-p-contacto">rcs.reformas@hotmail.com</div>
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
      <SCFormulario></SCFormulario>
      <SCWatsap></SCWatsap>
      <SCFooter></SCFooter>
    </SCContacto>
  );
}
