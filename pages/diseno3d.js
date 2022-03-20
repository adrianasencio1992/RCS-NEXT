import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCDiseno3d from "./diseno3d.styled";
import SCFormulario from "../components/formulario";
import SCWatsap from "../components/watsap";
import SCSlider3d from "../components/slider-3d";

export default function Diseno3d() {
  return (
    <SCDiseno3d>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1
          className="h1-obra-nueva"
          data-aos="flip-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
          Diseño 3D
        </h1>
        <p
          className="p-obra-nueva"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
          ¡Visualiza como será el resultado final!
        </p>
      </div>

      <section className="section-obra-formulario">
        <div className="div-general-obra">
          <p className="p1-obra">
            Cuando solicite su presupuesto gratuito, nuestros profesionales
            concertaran con usted una visita, donde escucharan todas sus
            necesidades y preferencias. A continuación le enviaremos su
            presupuesto detallado junto al Diseño 3D de su estancia para que
            pueda visualizar como sería el resultado final.<br></br>
            <br></br>Este servicio es totalmente GRATUITO y puede solicitarlo
            sin compromiso.
          </p>
          <h2 className="h2-formulario">¿QUÉ SOFTWARE UTILIZAMOS?</h2>
          <hr className="hr-formulario"></hr>
          <div className="div-general-cartas">
            <div className="div-primera-carta">
              <img className="imagen-carta" src="/bolita-sketchup.png"></img>
              <div className="div-primera-subcarta">
                <p className="p2-obra">SKETCHUP</p>
                <p className="p3-obra">
                  Todos nuestros diseños son realizados mediante el software 3D
                  SketchUp. Dicho aplicativo es el número uno en el mercado,
                  empleado por arquitectos y diseñadores de interiorismo.
                </p>
              </div>
            </div>
            <div className="div-primera-carta2">
              <div className="div-primera-subcarta2">
                <p className="p2-obra">V-RAY</p>
                <p className="p3-obra2">
                  V-Ray es el motor de renderizado que empleamos para dar
                  realismo al diseño creado mediante el software SketchUp. Con
                  él obtendremos las imágenes finales de su diseño.
                </p>
              </div>
              <img className="imagen-carta" src="/bolita-vray.png"></img>
            </div>
          </div>
        </div>
      </section>
      <h2 className="h2-formulario">¡INSPÍRATE!</h2>
      <hr className="hr-formulario"></hr>
      <SCSlider3d></SCSlider3d>
      <SCFormulario></SCFormulario>
      <SCWatsap></SCWatsap>
      <SCFooter></SCFooter>
    </SCDiseno3d>
  );
}
