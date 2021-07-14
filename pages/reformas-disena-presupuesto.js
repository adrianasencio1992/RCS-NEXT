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
          Pasos para saber el precio de una reforma integral ¿empezamos?
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
            Nuestro equipo de profesionales se encargará de la reforma de su
            baño, desde su diseño hasta su ejecución, dandole una nueva vida.
            Utilizamos materiales de la mejor calidad y que se adapten a sus
            gustos y necesidades. Puede encontrarnos en Rubí y trabajamos en
            toda la provincia de Barcelona y alrededores.
          </p>
          <SCCarrouselPresupuestos></SCCarrouselPresupuestos>
        </div>
      </section>
      <div>
        <h2 className="h2-formulario">¡CALCULA EL PRECIO DE TU REFORMA!</h2>
        <hr className="hr-formulario"></hr>
        <p className="p1-obra-2">
          Selecciona las reformas que tienes pensado realizar y obtén una
          estimación del coste de la reforma en base a los precios aproximados.
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
      <SCFooter></SCFooter>
    </SCDiseñaPresupuesto>
  );
}
