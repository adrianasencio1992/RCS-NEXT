import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCFilosofia from "./filosofia-empresa.styled";

export default function ReformasSolicitaPresupuesto() {
  return (
    <SCFilosofia>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Nuestra Filosofía</h1>
        <p className="p-obra-nueva">Misión, Visión y Valores</p>
      </div>
      <section className="section-filosofia">
        <div className="div-contenedor-mision">
          <div className="div-contenedor-foto">
            <img className="foto" src="/mision-empresa.jpg"></img>
          </div>
          <div className="div-contenedor-texto">
            <h2 className="h2-principal">Nuesta Misión</h2>
            <hr className="hr-principal"></hr>
            <p className="span-flechas">
              --
              <h3 className="h3-texto">Seguridad</h3>
            </p>
            <p className="p-texto">
              Construir obras y viviendas de excelencia, con el respaldo de una
              trayectoria basada en la calidad y servicio responsable hacia
              nuestros clientes.
            </p>
            <span className="span-flechas">--</span>
            <h3 className="h3-texto">Seguridad</h3>
            <p className="p-texto">
              Construir obras y viviendas de excelencia, con el respaldo de una
              trayectoria basada en la calidad y servicio responsable hacia
              nuestros clientes.
            </p>
            <span className="span-flechas">--</span>
            <h3 className="h3-texto">Seguridad</h3>
            <p className="p-texto">
              Construir obras y viviendas de excelencia, con el respaldo de una
              trayectoria basada en la calidad y servicio responsable hacia
              nuestros clientes.
            </p>
          </div>
        </div>
      </section>
      <SCFooter></SCFooter>
    </SCFilosofia>
  );
}
