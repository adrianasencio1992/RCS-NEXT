import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCQuienesSomos from "./quienes-somos.styled";

export default function QuienesSomos() {
  return (
    <SCQuienesSomos>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1
          className="h1-obra-nueva"
          data-aos="flip-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
          ¿Quiénes Somos?
        </h1>
        <p
          className="p-obra-nueva"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
          Conoce nuestra empresa
        </p>
      </div>
      <section className="section-financiacion">
        <h2 className="h2-formulario">¿Quiénes Somos?</h2>
        <hr className="hr-titulo"></hr>
      </section>
      <section className="section-obra-formulario">
        <div className="div-general-obra">
          <div className="div-general-cartas">
            <div className="div-primera-carta">
              <img className="imagen-carta" src="/reforma5.png"></img>
              <div className="div-primera-subcarta">
                <p className="p2-obra">NOSOTROS</p>
                <p className="p3-obra">
                  En RCS - Reformas, Construcciones y Servicios llevamos más de
                  30 años en el mundo de la construcción, creando nuevos hogares
                  y reformando todo tipo de estancias.
                </p>
              </div>
            </div>
            <div className="div-primera-carta2">
              <div className="div-primera-subcarta2">
                <p className="p2-obra">OBRA NUEVA</p>
                <p className="p3-obra2">
                  En los proyectos de obra nueva nos encargamos de todas las
                  fases de construcción: buscar aquel terreno más adecuado a las
                  necesidades del cliente, diseñar el proyecto, tramitar su
                  aprobación y finalmente su construcción hasta la entrega de
                  llaves.
                </p>
              </div>
              <img className="imagen-carta" src="/obra-nueva-circulo.png"></img>
            </div>
            <div className="div-primera-carta">
              <img className="imagen-carta" src="/bolita-reforma.png"></img>
              <div className="div-primera-subcarta">
                <p className="p2-obra">REFORMAS</p>
                <p className="p3-obra">
                  También estamos especializados en todo tipo de reformas del
                  hogar, incluyendo cocinas, baños, instalaciones de
                  electricidad, agua, gas y calefacción, carpintería de madera,
                  carpintería de aluminio, suelos de parquet, suelos de gres,
                  pintura, etc. Ofrecemos reformas totalmente personalizadas y
                  coordinamos con los técnicos especialistas para ofrecerle los
                  mejores resultados.
                </p>
              </div>
            </div>
            <div className="div-primera-carta2">
              <div className="div-primera-subcarta2">
                <p className="p2-obra">NUESTRA EXPERIENCIA</p>
                <p className="p3-obra2">
                  Gracias a nuestra experiencia y al gran número de obras nuevas
                  y reformas realizadas, creemos que podemos ofrecerle un
                  trabajo excelente y adaptado a sus necesidades.
                </p>
              </div>
              <img className="imagen-carta" src="/bolita-experiencia.png"></img>
            </div>
            <div className="div-primera-carta">
              <img className="imagen-carta" src="/bolita-oficina.png"></img>
              <div className="div-primera-subcarta">
                <p className="p2-obra">OFICINAS</p>
                <p className="p3-obra">
                  En nuestra oficina localizada en Rubí nuestros clientes pueden
                  transmitirnos sus necesidades e ideas para su hogar y allí
                  podrán elegir todo tipo de materiales de nuestra exposición.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*SECCION DE ESCOGER*/}
      <section className="section-escoger">
        <h2 className="h2-escoger">¿Por qué escoger RCS?</h2>
        <hr className="hr-escoger"></hr>
        <div className="div-general-circulos">
          <div className="div-unidad-circulo">
            <div className="div-circulo">
              <p className="p-circulo">01</p>
            </div>
            <h2 className="p-escoger">GARANTÍA Y CALIDAD</h2>
            <p className="p-texto">
              RCS te ofrece de 2 a 10 años de garantía total de la reforma u
              obra nueva. Trabajamos con los materiales de las mejores marcas y
              profesionales de confianza. Todos los detalles son importantes
              para el éxito.
            </p>
          </div>

          <div className="div-unidad-circulo">
            <div className="div-circulo">
              <p className="p-circulo">02</p>
            </div>
            <h2 className="p-escoger">EXPERIENCIA</h2>
            <p className="p-texto">
              Somos una empresa con más de 30 años de experiencia en el sector
              de la construcción. Para nosotros lo más importante es su
              satisfacción, por eso le ofrecemos un servicio totalmente
              personalizado.
            </p>
          </div>

          <div className="div-unidad-circulo">
            <div className="div-circulo">
              <p className="p-circulo">03</p>
            </div>
            <h2 className="p-escoger">EFICACIA Y RAPIDEZ</h2>
            <p className="p-texto">
              Los servicios se prestan con eficacia, transparencia y una
              programación de inicio a fin. Trabajamos con celeridad sin
              descuidar los acabados. Hay trabajos que requieren más tiempo y
              dedicación para que salgan perfectos.
            </p>
          </div>

          <div className="div-unidad-circulo">
            <div className="div-circulo">
              <p className="p-circulo">04</p>
            </div>
            <h2 className="p-escoger">PRECIO JUSTO</h2>
            <p className="p-texto">
              En RCS ofrecemos precios y acabados para todos los bolsillos.
              Nuestro equipo le prestará la máxima atención para satisfacer sus
              necesidades y expectativas, elaborando un presupuesto que se
              adapte a usted.
            </p>
          </div>
        </div>
      </section>
      <SCFooter></SCFooter>
    </SCQuienesSomos>
  );
}
