import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCSolicitaPresupuesto from "./reformas-solicita-presupuesto.styled";

export default function ReformasSolicitaPresupuesto() {
  return (
    <SCSolicitaPresupuesto>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Solicita tu Presupuesto</h1>
        <p className="p-obra-nueva">Pasos para pedir cita.</p>
      </div>
      <section className="section-formulario">
        <div className="contenedor">
          <div className="wrapper animated bounceInLeft">
            <div className="info-empresa">
              <h3>¿Desea un presupuesto GRATUITO?</h3>
            </div>
            <div className="contacto">
              <h3>Rellene el Formulario</h3>
              <form
                action="https://formspree.io/f/xyyoynvg"
                method="POST"
                class="formulario"
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
      <SCFooter></SCFooter>
    </SCSolicitaPresupuesto>
  );
}
