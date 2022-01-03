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
      <section
        className="section-filosofia"
        data-aos="fade-right"
        data-aos-offset="50"
        data-aos-easing="ease-in-sine"
      >
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
                comerciales, etc., ajustándonos siempre a las más avanzadas
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
      <section
        className="section-filosofia-vision"
        data-aos="fade-left"
        data-aos-offset="50"
        data-aos-easing="ease-in-sine"
      >
        <div className="div-contenedor-vision">
          <div className="div-contenedor-foto-vision">
            <img className="foto-vision" src="/señor-vision.jpg"></img>
          </div>
          <div className="div-contenedor-texto-vision">
            <h2 className="h2-principal-vision">VISIÓN</h2>
            <div className="posicionamiento-span">
              <p className="span-numeros">✔</p>
              <p className="p-texto-vision">
                Posicionarnos como una empresa constructora líder caracterizada
                por nuestro “sello” de calidad, confianza y garantía.
              </p>
            </div>
            <div className="posicionamiento-span">
              <span className="span-numeros">✔</span>
              <p className="p-texto-vision">
                Ser una compañía responsable, eficiente y competitiva,
                comprometida con la calidad, la seguridad, la salud y el medio
                ambiente.
              </p>
            </div>
            <div className="posicionamiento-span">
              <span className="span-numeros">✔</span>
              <p className="p-texto-vision">
                Entregar el mejor servicio e innovación en todos y cada uno de
                nuestros proyectos, ofreciendo un amplio abanico de productos y
                servicios punteros en el mercado.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-filosofia-valores"
        data-aos="fade-right"
        data-aos-offset="50"
        data-aos-easing="ease-in-sine"
      >
        <div className="div-contenedor-valores">
          <div className="div-contenedor-foto">
            <img className="foto-valores" src="/valores-foto.jpg"></img>
          </div>
          <div className="div-contenedor-texto-valores">
            <h2 className="h2-principal-valores">VALORES</h2>
            <div className="columnas">
              <div className="div-contenedor-valores-4">
                <div className="posicionamiento-span2">
                  <div className="div-valores">
                    <p className="span-ticks">❶</p>
                    <p className="p-texto-valores">Nuestra gente</p>
                  </div>
                  <p className="p-texto2">
                    Desarrollo de los recursos humanos y construcción de
                    conocimiento.
                  </p>
                </div>
                <div className="posicionamiento-span2">
                  <div className="div-valores">
                    <p className="span-ticks">❷</p>
                    <p className="p-texto-valores">Transparencia</p>
                  </div>
                  <p className="p-texto2">
                    Explicamos y detallamos con plena transparencia.
                  </p>
                </div>
                <div className="posicionamiento-span2">
                  <div className="div-valores">
                    <p className="span-ticks">❸</p>
                    <p className="p-texto-valores">Atención al cliente</p>
                  </div>
                  <p className="p-texto2">
                    Consideramos clave satisfacer todas las necesidades de los
                    clientes.
                  </p>
                </div>
                <div className="posicionamiento-span2">
                  <div className="div-valores">
                    <p className="span-ticks">❹</p>
                    <p className="p-texto-valores">Innovación</p>
                  </div>
                  <p className="p-texto2">
                    Potenciamos el desarrollo de nuevas técnicas promoviendo la
                    mejora continua para alcanzar la máxima calidad.
                  </p>
                </div>
              </div>
              <div className="div-contenedor-valores-4">
                <div className="posicionamiento-span2">
                  <div className="div-valores">
                    <p className="span-ticks">❺</p>
                    <p className="p-texto-valores">Seguridad</p>
                  </div>
                  <p className="p-texto2">
                    Nos comprometemos con la seguridad de las personas y el
                    medio ambiente.
                  </p>
                </div>
                <div className="posicionamiento-span2">
                  <div className="div-valores">
                    <p className="span-ticks">❻</p>
                    <p className="p-texto-valores">Raíz local</p>
                  </div>
                  <p className="p-texto2">
                    Potenciamos el negocio local y de proximidad.
                  </p>
                </div>
                <div className="posicionamiento-span2">
                  <div className="div-valores">
                    <p className="span-ticks">❼</p>
                    <p className="p-texto-valores">Excelencia</p>
                  </div>
                  <p className="p-texto2">
                    Priorizamos el trabajo minucioso y de calidad para lograr
                    unos resultados sublimes.
                  </p>
                </div>
                <div className="posicionamiento-span2">
                  <div className="div-valores">
                    <p className="span-ticks">❽</p>
                    <p className="p-texto-valores">Ética</p>
                  </div>
                  <p className="p-texto2">
                    Nuestras actuaciones y decisiones se basan en la
                    profesionalidad, integridad moral, lealtad y respeto a las
                    personas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SCFooter></SCFooter>
    </SCFilosofia>
  );
}
