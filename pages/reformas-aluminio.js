import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCSliderAluminio from "../components/slider-aluminio";
import SCAluminio from "./reformas-aluminio.styled";
import SCFormulario from "../components/formulario";

export default function ReformasAluminio() {
  return (
    <SCAluminio>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Carpintería Metálica y de Aluminio</h1>
        <p className="p-obra-nueva">¡Innovación que hará tu vida más fácil!</p>
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
      <SCSliderAluminio></SCSliderAluminio>
      <SCFormulario></SCFormulario>
      <SCFooter></SCFooter>
    </SCAluminio>
  );
}
