import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCSliderComunidad from "../components/slider-comunidad";
import SCComunidad from "./reformas-comunidad.styled";
import SCFormulario from "../components/formulario";

export default function ReformasComunidad() {
  return (
    <SCComunidad>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1
          className="h1-obra-nueva"
          data-aos="flip-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
          Reforma tu Comunidad de Vecinos
        </h1>
        <p
          className="p-obra-nueva"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
          ¿Desea remodelar su Comunidad?
        </p>
      </div>

      <section className="section-obra-formulario">
        <div className="div-general-obra">
          <p className="p1-obra">
            Nuestro equipo de profesionales se encargará de la reforma de su
            comunidad de vecinos, desde su diseño hasta su ejecución, dándole
            una nueva vida. Utilizamos materiales de la mejor calidad y que se
            adapten a sus gustos y necesidades. Puede encontrarnos en Rubí y
            trabajamos en toda la provincia de Barcelona y alrededores.
          </p>
          <h2 className="h2-formulario">¿CÓMO FUNCIONAMOS?</h2>
          <hr className="hr-formulario"></hr>
          <div className="div-general-cartas">
            <div className="div-primera-carta">
              <img className="imagen-carta" src="/reforma5.png"></img>
              <div className="div-primera-subcarta">
                <p className="p2-obra">ESTAMOS CERCA DE TI</p>
                <p className="p3-obra">
                  ¿Quieres reformar tu comunidad de vecinos? Puedes contactar
                  con nosotros por teléfono, vía mail, página web, redes
                  sociales o en nuestra tienda física. Escucharemos todas tus
                  propuestas y juntos crearemos el diseño que deseas.
                </p>
              </div>
            </div>
            <div className="div-primera-carta2">
              <div className="div-primera-subcarta2">
                <p className="p2-obra">PRESUPUESTO GRATUITO</p>
                <p className="p3-obra2">
                  A tu lado crearemos el presupuesto que se adapte mejor a tus
                  necesidades, pudiendo elegir todos los elementos de tu baño.
                  Elaboramos este presupuesto sin ningún tipo de compromiso en
                  un plazo de 24 a 48 horas.
                </p>
              </div>
              <img className="imagen-carta" src="/reforma7.png"></img>
            </div>
            <div className="div-primera-carta">
              <img className="imagen-carta" src="/reforma6.png"></img>
              <div className="div-primera-subcarta">
                <p className="p2-obra">DISEÑO 3D GRATUITO</p>
                <p className="p3-obra">
                  Una vez elijas todos los elementos de tu baño, elaboraremos un
                  diseño 3D que te permitirá visualizar el resultado final de tu
                  reforma. Este diseño no tendrá ningún coste añadido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h2 className="h2-formulario">¡INSPÍRATE!</h2>
      <hr className="hr-formulario"></hr>
      <SCSliderComunidad></SCSliderComunidad>
      <SCFormulario></SCFormulario>
      <SCFooter></SCFooter>
    </SCComunidad>
  );
}
