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
            <img className="foto" src="/mision-empresa2.jpg"></img>
          </div>
          <div className="div-contenedor-texto">
            <h2 className="h2-principal">MISIÓN</h2>
            <div className="posicionamiento-span">
              <p className="span-flechas">》</p>
              <p className="p-texto">
                Proporcionar soluciones integrales en la construcción y reforma
                de viviendas, negocios, comunidades de vecinos, locales
                comerciales, etc., ajustadandonos siempre a las más avanzadas
                tecnologías y normas de calidad.
              </p>
            </div>
            <div className="posicionamiento-span">
              <span className="span-flechas">》</span>
              <p className="p-texto">
                Centrar nuestra acción en las personas con un servicio
                responsable hacia nuestros clientes y los más exigentes valores
                éticos.
              </p>
            </div>
            <div className="posicionamiento-span">
              <span className="span-flechas">》</span>
              <p className="p-texto">
                Satisfacer ampliamente las necesidades y expectativas de
                nuestros clientes a un precio justo y excelente servicio.
              </p>
            </div>
            <div className="posicionamiento-span">
              <span className="span-flechas">》</span>
              <p className="p-texto">
                Ofrecer un amplio abanico de productos y servicios de
                construcción acorde con las necesidades del mercado.
              </p>
            </div>
            <div className="posicionamiento-span">
              <span className="span-flechas">》</span>
              <p className="p-texto">
                Crecer de forma rentable y segura con pleno respeto a la
                sociedad y al medio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-filosofia-vision">
        <div className="div-contenedor-vision">
          <div className="div-contenedor-foto">
            <img className="foto-vision" src="/mision-empresa.jpg"></img>
          </div>
          <div className="div-contenedor-texto-vision">
            <h2 className="h2-principal">MISIÓN</h2>
            <div className="posicionamiento-span">
              <p className="span-flechas">》</p>
              <p className="p-texto">
                Proporcionar soluciones integrales en la construcción y reforma
                de viviendas, negocios, comunidades de vecinos, locales
                comerciales, etc., ajustadandonos siempre a las más avanzadas
                tecnologías y normas de calidad.
              </p>
            </div>
            <div className="posicionamiento-span">
              <span className="span-flechas">》</span>
              <p className="p-texto">
                Centrar nuestra acción en las personas con un servicio
                responsable hacia nuestros clientes y los más exigentes valores
                éticos.
              </p>
            </div>
            <div className="posicionamiento-span">
              <span className="span-flechas">》</span>
              <p className="p-texto">
                Satisfacer ampliamente las necesidades y expectativas de
                nuestros clientes a un precio justo y excelente servicio.
              </p>
            </div>
            <div className="posicionamiento-span">
              <span className="span-flechas">》</span>
              <p className="p-texto">
                Ofrecer un amplio abanico de productos y servicios de
                construcción acorde con las necesidades del mercado.
              </p>
            </div>
            <div className="posicionamiento-span">
              <span className="span-flechas">》</span>
              <p className="p-texto">
                Crecer de forma rentable y segura con pleno respeto a la
                sociedad y al medio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SCFooter></SCFooter>
    </SCFilosofia>
  );
}
