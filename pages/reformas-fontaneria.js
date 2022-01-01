import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCSliderFontaneria from "../components/slider-fontaneria";
import SCFontaneria from "./reformas-fontaneria.styled";
import SCFormulario from "../components/formulario";

export default function ReformasFontaneria() {
  return (
    <SCFontaneria>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Fontanería y Lampistería</h1>
        <p className="p-obra-nueva">
          Instalaciones eléctricas y de agua, calefacción, calderas, aires
          acondicionados ¡y mucho más!
        </p>
      </div>

      <section className="section-obra-formulario">
        <div className="div-general-obra">
          <p className="p1-obra">
            Nuestros profesionales realizarán las variaciones de electricidad,
            agua o gas que su vivienda necesite. También estamos especializados
            en la instalación de aparatos de aire acondicionado, calefacciones y
            calderas. Para todo ello, utilizamos materiales de la mejor calidad
            y que se adapten a sus necesidades. Puede encontrarnos en Rubí y
            trabajamos en toda la provincia de Barcelona y alrededores.
          </p>
          <h2 className="h2-formulario">¿QUÉ SERVICIOS OFRECEMOS?</h2>
          <hr className="hr-formulario"></hr>
          <div className="div-general-cartas">
            <div className="div-primera-carta">
              <img className="imagen-carta" src="/logo-aire.png"></img>
              <div className="div-primera-subcarta">
                <p className="p2-obra">AIRES ACONDICIONADOS</p>
                <p className="p3-obra">
                  Aumenta el confort de su hogar tanto en invierno como en
                  verano. Le instalamos aires acondicionados de las mejores
                  marcas, al mejor precio y con garantía.
                </p>
              </div>
            </div>
            <div className="div-primera-carta2">
              <div className="div-primera-subcarta2">
                <p className="p2-obra">CALEFACCIÓN</p>
                <p className="p3-obra2">
                  Di adiós a los inviernos fríos e instala un sistema de
                  calefacción eléctrico o de agua. Nosotros le recomendaremos
                  los mejores equipos y nos encargaremos de todo.
                </p>
              </div>
              <img className="imagen-carta" src="/logo-calefaccion.png"></img>
            </div>
            <div className="div-primera-carta">
              <img className="imagen-carta" src="/logo-caldera.png"></img>
              <div className="div-primera-subcarta">
                <p className="p2-obra">CALDERAS</p>
                <p className="p3-obra">
                  También ofrecemos servicio de instalación de calderas a la
                  mejor relación calidad - precio, tenemos en cuenta su
                  eficiencia energética y así ayudamos a controlar los gastos de
                  su hogar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h2 className="h2-formulario">¡INSPÍRATE!</h2>
      <hr className="hr-formulario"></hr>
      <SCSliderFontaneria></SCSliderFontaneria>
      <SCFormulario></SCFormulario>
      <SCFooter></SCFooter>
    </SCFontaneria>
  );
}
