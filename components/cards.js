import React from "react";
import SCCards from "./cards.styled";

export default function Cards() {
  return (
    <SCCards>
      <ul class="cards">
        <li>
          <a class="card">
            <img src="/dinero2.jpg" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img class="card__thumb" src="logo-inicio.png" alt="" />
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
          <a class="card">
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
                <img class="card__thumb" src="logo-inicio.png" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Materiales</h3>
                </div>
              </div>
              <p class="card__description">
                Le detallamos el precio de los materiales utilizados y el coste
                de mano de obra.
              </p>
            </div>
          </a>
        </li>
        <li>
          <a class="card">
            <img src="/ordenador.jpg" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img class="card__thumb" src="/logo-inicio.png" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Precio orientativo</h3>
                </div>
              </div>
              <p class="card__description">
                Los precios expuestos son orinetativos y pueden variar en
                función de sus necesidades.
              </p>
            </div>
          </a>
        </li>
        <li>
          <a class="card">
            <img src="ordenador2.jpg" class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img class="card__thumb" src="/logo-inicio.png" alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">Presupuesto final</h3>
                </div>
              </div>
              <p class="card__description">
                Finalmente tomaremos las medidad necesarias y realizaremos su
                presupuesto final igual de detallado.
              </p>
            </div>
          </a>
        </li>
      </ul>
    </SCCards>
  );
}
