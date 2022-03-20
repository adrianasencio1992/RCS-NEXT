import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCSliderAluminio from "../components/slider-aluminio";
import SCAluminio from "./reformas-aluminio.styled";
import SCFormulario from "../components/formulario";
import SCWatsap from "../components/watsap";

export default function ReformasAluminio() {
  return (
    <SCAluminio>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1
          className="h1-obra-nueva"
          data-aos="flip-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
          Carpintería Metálica y de Aluminio
        </h1>
        <p
          className="p-obra-nueva"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
          ¡Innovación que hará tu vida más fácil!
        </p>
      </div>

      <section className="section-obra-formulario">
        <div className="div-general-obra">
          <p className="p1-obra">
            Disfrutar de unas vistas inigualables sobre el espectáculo de la
            ciudad o del mar, aprovechar los efectos benéficos de los rayos de
            sol en cualquier momento del día, respetar el estilo original de una
            vivienda y, al mismo tiempo, modernizarla: el acierto en la elección
            de las carpinterías facilita la vida familiar y garantiza el
            bienestar cotidiano.
          </p>
          <h2 className="h2-formulario">¿CÓMO FUNCIONAMOS?</h2>
          <hr className="hr-formulario"></hr>
          <div className="div-general-cartas">
            <div className="div-primera-carta">
              <img className="imagen-carta" src="/reforma5.png"></img>
              <div className="div-primera-subcarta">
                <p className="p2-obra">ESTAMOS CERCA DE TI</p>
                <p className="p3-obra">
                  Puedes contactar con nosotros por teléfono, vía mail, página
                  web, redes sociales o en nuestra tienda física. Escucharemos
                  todas tus propuestas y juntos crearemos el diseño que deseas.
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
          </div>
        </div>
      </section>
      <h2 className="h2-formulario">¡INSPÍRATE!</h2>
      <hr className="hr-formulario"></hr>
      <SCSliderAluminio></SCSliderAluminio>
      <SCFormulario></SCFormulario>
      <SCWatsap></SCWatsap>
      <SCFooter></SCFooter>
    </SCAluminio>
  );
}
