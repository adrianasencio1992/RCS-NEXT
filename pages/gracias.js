import React from "react";
import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCGracias from "./gracias.styled";

export default function Gracias() {
  if (typeof $ !== "undefined") {
    // browser code por si algo no funciona ponerlo despues de typeof y escribir le codigo dentro

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "AW-10845351716");
  }

  return (
    <SCGracias>
      <Layout></Layout>

      <div className="section-gracias">
        <div className="nine">
          <h2 className="h2-formulario">¡Gracias!</h2>
          <p className="p2-obra">
            Hemos recibido correctamente tu petición, recibirás una respuesta en
            un plazo de 24 horas.
          </p>
        </div>
        <ul class="cards">
          <li>
            <a class="card" href="/reformas-disena-presupuesto">
              <img src="/dinero2.jpg" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img class="card__thumb" src="/logo-inicio.png" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">Nuestros precios</h3>
                  </div>
                </div>
                <p class="card__description">
                  A continuación puedes consultar los presupuestos detallados de
                  diferentes tipos de reforma.
                </p>
              </div>
            </a>
          </li>
          <li>
            <a class="card" href="/fabricantes">
              <img
                src="/materiales-construccion.jpg"
                class="card__image"
                alt=""
              />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img class="card__thumb" src="/logo-inicio.png" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">Nuestros fabricantes</h3>
                  </div>
                </div>
                <p class="card__description">
                  ¡Te presentamos las marcas con las que trabajamos!
                </p>
              </div>
            </a>
          </li>
          <li>
            <a class="card" href="/filosofia-empresa">
              <img src="/ordenador.jpg" class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img class="card__thumb" src="/logo-inicio.png" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">Filosofía de la empresa</h3>
                  </div>
                </div>
                <p class="card__description">Misión, Visión y Valores.</p>
              </div>
            </a>
          </li>
        </ul>

        <a href="/" className="boton-enviar">
          Regresa a inicio
        </a>
      </div>
      <SCFooter></SCFooter>
    </SCGracias>
  );
}
