import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCSliderFontaneria from "../components/slider-fontaneria";
import SCFontaneria from "./reformas-fontaneria.styled";

export default function ReformasFontaneria() {
  return (
    <SCFontaneria>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Reforma tu Fontaneria</h1>
        <p className="p-obra-nueva">¿Te gusta tu fontaneria?</p>
      </div>

      <section className="section-obra-formulario">
        <div className="div-general-obra">
          <p className="p1-obra">
            Nuestro equipo de profesionales se encargará de la reforma de su
            baño, desde su diseño hasta su ejecución, dandole una nueva vida.
            Utilizamos materiales de la mejor calidad y que se adapten a sus
            gustos y necesidades. Puede encontrarnos en Rubí y trabajamos en
            toda la provincia de Barcelona y alrededores.
          </p>
          <h2 className="h2-formulario">¿COMO FUNCIONAMOS?</h2>
          <hr className="hr-formulario"></hr>
          <div className="div-general-cartas">
            <div className="div-primera-carta">
              <img className="imagen-carta" src="/reforma5.png"></img>
              <div className="div-primera-subcarta">
                <p className="p2-obra">ESTAMOS CERCA DE TÍ</p>
                <p className="p3-obra">
                  ¿Quieres reformar tu baño? Puedes contactar con nosotos por
                  teléfono, via mail, pagina web, redes sociales o en nuesta
                  tienda física. Escucharemos todas tus propuestas y juntos
                  crearemos el diseño que deseas.
                </p>
              </div>
            </div>
            <div className="div-primera-carta2">
              <div className="div-primera-subcarta2">
                <p className="p2-obra">PRESUPUESTO GRATUITO</p>
                <p className="p3-obra2">
                  A tu lado crearemos el presupuesto que se adapate mejor a tus
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
                  diseño 3D que te permitira visualizar el resultado final de tu
                  reforma. Este diseño no tendrá ningun coste añadido.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedor">
          <div className="wrapper animated bounceInLeft">
            <div className="info-empresa">
              <h3>¿Desea un presupuesto GRATUITO?</h3>
            </div>
            <div className="contacto">
              <h3>Rellene el Formulario</h3>
              <form
                class="formulario"
                action="#"
                method="post"
                name="contacto"
                id="contacto"
              >
                <p>
                  <label>Nombre</label>
                  <input
                    className="input-formulario"
                    type="text"
                    name="nombre"
                    required
                  ></input>
                </p>
                <p>
                  <label>Población</label>
                  <input
                    className="input-formulario"
                    type="text"
                    name="empresa"
                    required
                  ></input>
                </p>
                <p>
                  <label>Correo</label>
                  <input
                    className="input-formulario"
                    type="email"
                    name="email"
                    required
                  ></input>
                </p>
                <p>
                  <label>Teléfono</label>
                  <input
                    className="input-formulario"
                    type="text"
                    name="teléfono"
                    required
                  ></input>
                </p>
                <p className="full">
                  <label>Mensaje</label>
                  <textarea
                    className="input-formulario"
                    name="mensaje"
                    required
                  ></textarea>
                </p>
                <p className="full full2">
                  <button className="boton-enviar" type="submit">
                    Enviar
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <h2 className="h2-formulario">¡INSPIRATE!</h2>
      <hr className="hr-formulario"></hr>
      <SCSliderFontaneria></SCSliderFontaneria>
      <SCFooter></SCFooter>
    </SCFontaneria>
  );
}