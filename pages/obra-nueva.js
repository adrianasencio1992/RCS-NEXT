import React from "react";
import SCObraNueva from "./obra-nueva.styled";
import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCSlider from "../components/slider";
import SCFormulario from "../components/formulario";

const ObraNueva = () => (
  <SCObraNueva>
    <Layout></Layout>
    <div className="div-obra-nueva">
      <h1 className="h1-obra-nueva">Obra nueva</h1>
      <p className="p-obra-nueva">Construye tu vivienda de ensueño</p>
    </div>

    <section className="section-obra-formulario">
      <div className="div-general-obra">
        <p className="p1-obra">
          Nuestro equipo de profesionales se encargará de la construcción de su
          nuevo hogar, desde su diseño hasta su ejecución. Utilizamos materiales
          de la mejor calidad y que se adapten a sus gustos y necesidades. Puede
          encontrarnos en Rubí y trabajamos en toda la provincia de Barcelona y
          alrededores.
        </p>
        <h2 className="h2-formulario">¿CÓMO FUNCIONAMOS?</h2>
        <hr className="hr-formulario"></hr>
        <div className="div-general-cartas">
          <div className="div-primera-carta">
            <img className="imagen-carta" src="/reforma5.png"></img>
            <div className="div-primera-subcarta">
              <p className="p2-obra">ESTAMOS CERCA DE TI</p>
              <p className="p3-obra">
                ¿Quieres construir tu nuevo hogar? Puedes contactar con nosotros
                por teléfono, vía mail, página web, redes sociales o en nuestra
                tienda física. Escucharemos todas tus propuestas y juntos
                crearemos el diseño que deseas.
              </p>
            </div>
          </div>
          <div className="div-primera-carta2">
            <div className="div-primera-subcarta2">
              <p className="p2-obra">PRESUPUESTO GRATUITO</p>
              <p className="p3-obra2">
                A tu lado crearemos el presupuesto que se adapte mejor a tus
                necesidades, pudiendo elegir todos los elementos de tu hogar.
                Elaboramos este presupuesto sin ningún tipo de compromiso en un
                plazo de 24 a 48 horas.
              </p>
            </div>
            <img className="imagen-carta" src="/reforma7.png"></img>
          </div>
          <div className="div-primera-carta">
            <img className="imagen-carta" src="/reforma6.png"></img>
            <div className="div-primera-subcarta">
              <p className="p2-obra">DISEÑO 3D GRATUITO</p>
              <p className="p3-obra">
                Una vez elijas todos los elementos de tu hogar, elaboraremos un
                diseño 3D que te permitirá visualizar el resultado final de tu
                nuevo proyecto. Este diseño no tendrá ningún coste añadido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <h2 className="h2-formulario">¡INSPÍRATE!</h2>
    <hr className="hr-formulario"></hr>
    <SCSlider></SCSlider>
    <SCFormulario></SCFormulario>
    <SCFooter></SCFooter>
  </SCObraNueva>
);

export default ObraNueva;
