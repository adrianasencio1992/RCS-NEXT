import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import SCIndex from "./index.styled";
import SCCarrousel from "../components/carrousel";
import SCFooter from "../components/footer";
import Link from "next/dist/client/link";
import SCFormulario from "../components/formulario";
import SCWatsap from "../components/watsap";
import SCCookies from "../components/cookies";

export default function Home() {
  /*MARKETING*/
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      someKey: "someValue",
    });

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-218480164-1");
    gtag("config", "AW-10845351716");
  }
  return (
    <div>
      <Layout>
        <Head>
          {/*MARKETING*/}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-218480164-1"
          ></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-218480164-1"
          ></script>
          <title>RCS | Reformas, Construcciones y Servicios</title>
          <link rel="icon" href="/logo-imagenes.png" />
        </Head>
      </Layout>
      <SCIndex>
        <div id="slider">
          <figure>
            <img className="imagen-slider" src="/cocina-ok.jpg" alt=""></img>
            <img className="imagen-slider" src="/cocina6-ok.jpg" alt=""></img>
            <img className="imagen-slider" src="/bano1-ok.jpg" alt=""></img>
            <img className="imagen-slider" src="/cocina2-ok.jpg" alt=""></img>
            <img className="imagen-slider" src="/cocina-ok.jpg" alt=""></img>
          </figure>
        </div>
        <SCCookies></SCCookies>
        <SCFormulario></SCFormulario>
        <section className="section-provincia">
          <h2 className="h2-provincia">
            REFORMAS EN LA PROVINCIA DE BARCELONA
          </h2>
          <hr className="hr-titulo"></hr>
          <div className="div-general-provincias">
            <div
              className="div-subgeneral"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-once={true}
            >
              <img className="img-provincias" src="/reformas1.png" alt=""></img>
              <h3 className="h3-provincias">SOMOS EXPERTOS</h3>
              <hr className="hr-provincias"></hr>
              <p className="p-provincias">
                Seleccionamos en nuestro equipo a los mejores profesionales en
                cada campo. Nos regimos por los más altos estándares de calidad
                que nos caracterizan.
              </p>
            </div>

            <div
              className="div-subgeneral"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-once={true}
            >
              <img className="img-provincias" src="/reformas2.png" alt=""></img>
              <h3 className="h3-provincias">SOMOS CERCANOS</h3>
              <hr className="hr-provincias"></hr>
              <p className="p-provincias">
                Nuestro objetivo es la total satisfacción de nuestros clientes.
                Nos mantenemos en contacto en todo momento para convertir sus
                deseos en una realidad.
              </p>
            </div>

            <div
              className="div-subgeneral"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-once={true}
            >
              <img className="img-provincias" src="/reformas3.png" alt=""></img>
              <h3 className="h3-provincias">SOMOS PERFECCIONISTAS</h3>
              <hr className="hr-provincias"></hr>
              <p className="p-provincias">
                Cuidamos cada detalle en la ejecución de nuestros proyectos.
                Velamos por la total satisfacción de todos y cada uno de
                nuestros clientes.
              </p>
            </div>

            <div
              className="div-subgeneral"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-once={true}
            >
              <img className="img-provincias" src="/reformas4.png" alt=""></img>
              <h3 className="h3-provincias">SOMOS DE CONFIANZA</h3>
              <hr className="hr-provincias"></hr>
              <p className="p-provincias">
                En RCS somos un equipo de profesionales expertos en sus labores.
                Nuestros trabajadores son nuestro mayor tesoro, y juntos
                formamos una gran familia.
              </p>
            </div>
          </div>
        </section>
        <SCCarrousel></SCCarrousel>
        <section className="section-disena-presupuesto">
          <div>
            <img className="imagen-disena-presupuesto" src="/chico.png"></img>
          </div>
          <div className="div-disena-presupuesto">
            <h2 className="h2-disena-presupuesto">DISEÑA TU PRESUPUESTO</h2>
            <hr className="hr-disena-presupuesto"></hr>
            <p className="p-disena-presupuesto">
              ¿Te gustaría saber el precio de tu REFORMA/OBRA en menos de 1
              minuto?
            </p>
            <Link href="/reformas-disena-presupuesto">
              <a>
                <button className="button-disena-presupuesto">
                  CLICK AQUÍ
                </button>
              </a>
            </Link>
          </div>
          <div>
            <img className="imagen-disena-presupuesto" src="/chica.png"></img>
          </div>
        </section>
        <SCWatsap></SCWatsap>
        <SCFooter></SCFooter>
      </SCIndex>
    </div>
  );
}
