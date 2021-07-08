import React from "react";
import SCObraNueva from "./obra-nueva.styled";
import Layout from "../components/layout";
import SCFooter from "../components/footer";

const ObraNueva = () => (
  <SCObraNueva>
    <Layout></Layout>
    {/* <div className="div-obra-nueva">
      <h1 className="h1-obra-nueva">Obra nueva</h1>
      <p className="p-obra-nueva">Construye tu vivienda desde 0</p>
    </div>
    <section className="section-obra-formulario">
      <div className="div-general-obra">
        <p>
          Nuestro equipo de profesionales se encargará de la reforma de su piso
          desde su diseño a su ejecución. Reformamos todo su piso en Sabadell o
          otros municipios a su gusto y con materiales de calidad. Además,
          puedes pasarte a ver materiales y marcas en nuestras tiendas en
          Barcelona y Sabadell.
        </p>
        <h2>¿Como funcionamos?</h2>
        <p>1. Nuestro especialista os contactará</p>
        <p>
          ¿Quieres renovar tu piso? Contáctanos vía mail, teléfono o en nuestra
          tienda e infórmate sobre todos nuestros materiales y precios que os
          podemos ofrecer. Así nuestro comercial, podrá acercarse a tu casa a
          poder tomar medidas de forma exacta.
        </p>
        <p>2. Presupuesto gratuito</p>
        <p>
          Una vez el comercial tenga las medidas de tu casa, podremos realizarte
          un presupuesto aproximado y ajustado a tus necesidades. Y elaboramos
          este presupuesto sin ningún tipo de compromiso. Además ofrecemos
          financiación a medida en un máximo de 18 meses sin intereses.
        </p>
        <p>3. Piso de cortesía</p>
        <p>
          Y por si aún no te es suficiente, por aceptarnos el presupuesto te
          ofrecemos un piso de cortesía sin modificar el precio de nuestro
          presupuesto.
        </p>
      </div>
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
    </section> */}
    <SCFooter></SCFooter>
  </SCObraNueva>
);

export default ObraNueva;
