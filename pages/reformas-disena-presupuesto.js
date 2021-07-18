import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCDiseñaPresupuesto from "./reformas-disena-presupuesto.styled";
import SCCarrouselPresupuestos from "../components/reformas-carrousel-presupuestos";
import SCCards from "../components/cards";

export default function ReformasDiseñaPresupuesto() {
  return (
    <SCDiseñaPresupuesto>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Diseña tu Presupuesto</h1>
        <p className="p-obra-nueva">
          Pasos para saber el precio de su reforma ¿Empezamos?
        </p>
      </div>
      <div className="div-general-obra">
        <h2 className="h2-formulario">COMO CALCULAR EL PRECIO DE TU REFORMA</h2>
        <hr className="hr-formulario"></hr>
      </div>
      <SCCards></SCCards>
      <section className="section-obra-formulario">
        <div className="div-general-obra">
          <h2 className="h2-formulario">NUESTROS PRECIOS</h2>
          <hr className="hr-formulario"></hr>
          <p className="p1-obra">
            En este apartado puede consultar los precios orientativos de los
            distintos tipos de reformas. Estos siempre contemplan el uso de
            materiales de calidad así como el coste de mano de obra.
          </p>
          <SCCarrouselPresupuestos></SCCarrouselPresupuestos>
        </div>
      </section>

      <div>
        <h2 className="h2-formulario">¡CALCULA EL PRECIO DE TU REFORMA!</h2>
        <hr className="hr-formulario"></hr>
        <p className="p1-obra">
          A continuación puede seleccionar las reformas que tiene pensado
          realizar y obtendrá una estimación del coste toal de su reforma en
          base a los precios aproximados que puede consultar en el apartado
          anterior.
        </p>
      </div>
      <div className="div-general-input">
        <div className="div-subgeneral-input">
          <p className="titulo-input">PRESUPUESTO BAÑO</p>
          <div className="div-trigeneral-input">
            <input type="checkbox" />
            Baño completo
          </div>
          <div className="div-trigeneral-input">
            <input type="checkbox" />
            Aseo
          </div>
          <div className="div-trigeneral-input">
            <input type="checkbox" />
            Cambio bañera por plato
          </div>
        </div>

        <div className="div-subgeneral-input">
          <p className="titulo-input">PRESUPUESTO FONTANERÍA</p>
          <div className="div-trigeneral-input">
            <input type="checkbox" />
            Calefacción
          </div>
          <div className="div-trigeneral-input">
            <input type="checkbox" />
            Aire Acondicionado
          </div>
          <div className="div-trigeneral-input">
            <input type="checkbox" />
            Caldera
          </div>
        </div>

        <div className="div-subgeneral-input">
          <p className="titulo-input">OTROS</p>
          <div className="caja3">
            <div className="subcaja3">
              <div className="div-trigeneral-input">
                <input type="checkbox" />
                Cocina
              </div>
              <div className="div-trigeneral-input">
                <input type="checkbox" />
                Parquet
              </div>
              <div className="div-trigeneral-input">
                <input type="checkbox" />
                Puertas
              </div>
            </div>
            <div className="subcaja3">
              <div className="div-trigeneral-input">
                <input type="checkbox" />
                Pintura
              </div>
              <div className="div-trigeneral-input">
                <input type="checkbox" />
                Electricidad
              </div>
              <div className="div-trigeneral-input">
                <input type="checkbox" />
                Aluminio
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-total">
        <p className="p-total">Total de la reforma:</p>
        <input className="input-total" />
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
      <SCFooter></SCFooter>
    </SCDiseñaPresupuesto>
  );
}