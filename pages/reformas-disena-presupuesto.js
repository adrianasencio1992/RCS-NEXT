import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCDiseñaPresupuesto from "./reformas-disena-presupuesto.styled";
import SCCarrouselPresupuestos from "./reformas-carrousel-presupuestos";

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

      <section className="section-obra-formulario">
        <div className="div-general-obra">
          <h2 className="h2-formulario">Precios de nuestras reformas</h2>
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
      <h2 className="h2-formulario">¡INSPIRATE!</h2>
      <hr className="hr-formulario"></hr>
      <SCFooter></SCFooter>
    </SCDiseñaPresupuesto>
  );
}
