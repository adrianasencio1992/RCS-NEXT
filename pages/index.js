import Link from "next/link";
import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import SCIndex from "./index.styled";
import Image from "next/image";

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
            <img src="/cocina3.jpg" alt=""></img>
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
      </SCIndex>
    </div>
  );
}
