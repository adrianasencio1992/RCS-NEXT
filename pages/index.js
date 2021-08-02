import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import SCIndex from "./index.styled";
import SCCarrousel from "../components/carrousel";
import SCFooter from "../components/footer";

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>RCS | Reformas, Construcciones y Servicios</title>
          <link rel="icon" href="/logo-imagenes.png" />
        </Head>
      </Layout>
      <SCIndex>
        <div id="slider">
          <figure>
            <img src="/cocina2.jpg" alt=""></img>
            <img src="/baño2.jpg" alt=""></img>
            <img src="/cocina.jpg" alt=""></img>
            <img src="/baño.jpg" alt=""></img>
            <img src="/cocina2.jpg" alt=""></img>
          </figure>
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
        <section className="section-provincia">
          <h2 className="h2-provincia">
            REFORMAS EN LA PROVINCIA DE BARCELONA
          </h2>
          <hr className="hr-titulo"></hr>
          <div className="div-general-provincias">
            <div className="div-subgeneral">
              <img className="img-provincias" src="/reformas1.png" alt=""></img>
              <h3 className="h3-provincias">SOMOS EXPERTOS</h3>
              <hr className="hr-provincias"></hr>
              <p className="p-provincias">
                Seleccionamos en nuestro equipo a los mejores profesionales en
                cada campo. Nos regimos por los más altos estándares de calidad
                que nos caracterizan.
              </p>
            </div>

            <div className="div-subgeneral">
              <img className="img-provincias" src="/reformas2.png" alt=""></img>
              <h3 className="h3-provincias">SOMOS CERCANOS</h3>
              <hr className="hr-provincias"></hr>
              <p className="p-provincias">
                Nuestro objetivo es la total satisfacción de nuestros clientes.
                Nos mantenemos en contacto en todo momento para convertir sus
                deseos en una realidad.
              </p>
            </div>

            <div className="div-subgeneral">
              <img className="img-provincias" src="/reformas3.png" alt=""></img>
              <h3 className="h3-provincias">SOMOS PERFECCIONISTAS</h3>
              <hr className="hr-provincias"></hr>
              <p className="p-provincias">
                Cuidamos cada detalle en la ejecución de nuestros proyectos.
                Velamos por la total satisfacción de todos y cada uno de
                nuestros clientes.
              </p>
            </div>

            <div className="div-subgeneral">
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
          <h2 className="h2-disena-presupuesto">DISEÑA TU PRESUPUESTO</h2>
          <hr className="hr-disena-presupuesto"></hr>
          <p className="p-disena-presupuesto">
            ¿Te gustaría saber el precio de tu REFORMA/OBRA en menos de 1
            minuto?
          </p>
          <button className="button-disena-presupuesto">CLICK AQUÍ</button>
          <img
            className="imagen-arquitectos"
            src="/chicos.png"
            alt="arquitectos"
          ></img>
        </section>
        <SCFooter></SCFooter>
      </SCIndex>
    </div>
  );
}
