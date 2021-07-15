import React from "react";
import SCCarrouselPresupuestos from "./reformas-carrousel-presupuestos.styled";

export default function ReformasCarrouselPresupuestos() {
  return (
    <SCCarrouselPresupuestos>
      <div className="div-general-carousel-presupuestos">
        {/*COCINAS*/}
        <div
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <a className="enlace">
            <div class="a-box">
              <div class="img-container">
                <div class="img-inner">
                  <div class="inner-skew">
                    <img src="/cocina2.jpg" />
                  </div>
                </div>
              </div>
              <div class="text-container">
                <h3>COCINAS</h3>
                <div>
                  Consulte el precio estimado de la reforma integral de una
                  cocina completa incluyendo sus electrodomesticos.
                </div>
              </div>
            </div>
          </a>
        </div>
        {/*BAÑOS*/}
        <div
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight2"
          aria-controls="offcanvasRight"
        >
          <a className="enlace">
            <div class="a-box">
              <div class="img-container">
                <div class="img-inner">
                  <div class="inner-skew">
                    <img src="/bano6.jpg" />
                  </div>
                </div>
              </div>
              <div class="text-container">
                <h3>BAÑOS</h3>
                <div>
                  Consulte el precio de la reforma de un baño, un aseo o la
                  sustitución de su bañera por plato de ducha.
                </div>
              </div>
            </div>
          </a>
        </div>
        {/*FONTANERIA*/}
        <div
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight3"
          aria-controls="offcanvasRight"
        >
          <a className="enlace">
            <div class="a-box">
              <div class="img-container">
                <div class="img-inner">
                  <div class="inner-skew">
                    <img src="/fontaneria44.jpg" />
                  </div>
                </div>
              </div>
              <div class="text-container">
                <h3>FONTANERÍA</h3>
                <div>
                  Consulte el precio de la instalación de una nueva caldera,
                  aire acondicionado o calefacción.
                </div>
              </div>
            </div>
          </a>
        </div>

        {/*ELECTRICIDAD*/}
        <div
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight7"
          aria-controls="offcanvasRight"
        >
          <a className="enlace">
            <div class="a-box">
              <div class="img-container">
                <div class="img-inner">
                  <div class="inner-skew">
                    <img src="/electricidad.jpg" />
                  </div>
                </div>
              </div>
              <div class="text-container">
                <h3>ELECTRICIDAD</h3>
                <div>
                  Consulte el precio estimado de la variación en instalación
                  electrica en función de su estancia.
                </div>
              </div>
            </div>
          </a>
        </div>
        {/*PARQUET*/}
        <div
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight4"
          aria-controls="offcanvasRight"
        >
          <a className="enlace">
            <div class="a-box">
              <div class="img-container">
                <div class="img-inner">
                  <div class="inner-skew">
                    <img src="/parquet3.jpg" />
                  </div>
                </div>
              </div>
              <div class="text-container">
                <h3>CARPINTERÍA</h3>
                <div>
                  Consulte el precio estimado de la instalación de un suelo de
                  parquet o la renovación de puertas.
                </div>
              </div>
            </div>
          </a>
        </div>
        {/*ALUMINIO*/}
        <div
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight5"
          aria-controls="offcanvasRight"
        >
          <a className="enlace">
            <div class="a-box">
              <div class="img-container">
                <div class="img-inner">
                  <div class="inner-skew">
                    <img src="/aluminio1.jpg" />
                  </div>
                </div>
              </div>
              <div class="text-container">
                <h3>ALUMINIO</h3>
                <div>
                  Consulte el precio estimado de la instalación de ventanas,
                  puertas u otros cerramientos de aluminio.
                </div>
              </div>
            </div>
          </a>
        </div>
        {/*PINTURA*/}
        <div
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight6"
          aria-controls="offcanvasRight"
        >
          <a className="enlace">
            <div class="a-box">
              <div class="img-container">
                <div class="img-inner">
                  <div class="inner-skew">
                    <img src="/pintura11.jpg" />
                  </div>
                </div>
              </div>
              <div class="text-container">
                <h3>PINTURA</h3>
                <div>
                  Consulte el precio estimado para pintar su vivienda en función
                  del tamaño de la estancia deseada.
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/*CANVAS COCINA*/}
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">PRESUPUESTO COCINA</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <table>
            <tr className="td-naranja-oscuro">
              <th> UNIDADES </th>

              <th>TIPO</th>

              <th>CONCEPTO</th>

              <th>
                PRECIO<br></br>UNIDAD
              </th>

              <th>
                PRECIO<br></br>TOTAL
              </th>
            </tr>

            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>3522€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>7.900€</td>
            </tr>
          </table>
          <p className="p-iva">* Los precios son sin IVA</p>
        </div>
      </div>

      {/*CANVAS BAÑO*/}
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight2"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">PRESUPUESTO BAÑO</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <table>
            <tr className="td-naranja-oscuro">
              <th> UNIDADES </th>

              <th>TIPO</th>

              <th>CONCEPTO</th>

              <th>
                PRECIO<br></br>UNIDAD
              </th>

              <th>
                PRECIO<br></br>TOTAL
              </th>
            </tr>

            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>3522€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>7.900€</td>
            </tr>
          </table>
          <p className="p-iva">* Los precios son sin IVA</p>
        </div>
      </div>

      {/*CANVAS FONTANERIA*/}
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight3"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">PRESUPUESTO FONTANERIA</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <table>
            <tr className="td-naranja-oscuro">
              <th> UNIDADES </th>

              <th>TIPO</th>

              <th>CONCEPTO</th>

              <th>
                PRECIO<br></br>UNIDAD
              </th>

              <th>
                PRECIO<br></br>TOTAL
              </th>
            </tr>

            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>3522€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>7.900€</td>
            </tr>
          </table>
          <p className="p-iva">* Los precios son sin IVA</p>
        </div>
      </div>

      {/*CANVAS FONTANERIA*/}
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight7"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">PRESUPUESTO ELECTRICIDAD</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <table>
            <tr className="td-naranja-oscuro">
              <th> UNIDADES </th>

              <th>TIPO</th>

              <th>CONCEPTO</th>

              <th>
                PRECIO<br></br>UNIDAD
              </th>

              <th>
                PRECIO<br></br>TOTAL
              </th>
            </tr>

            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>3522€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>7.900€</td>
            </tr>
          </table>
          <p className="p-iva">* Los precios son sin IVA</p>
        </div>
      </div>

      {/*CANVAS PARQUET*/}
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight4"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">PRESUPUESTO PARQUET</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <table>
            <tr className="td-naranja-oscuro">
              <th> UNIDADES </th>

              <th>TIPO</th>

              <th>CONCEPTO</th>

              <th>
                PRECIO<br></br>UNIDAD
              </th>

              <th>
                PRECIO<br></br>TOTAL
              </th>
            </tr>

            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>3522€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>7.900€</td>
            </tr>
          </table>
          <p className="p-iva">* Los precios son sin IVA</p>
        </div>
      </div>

      {/*CANVAS ALUMINIO*/}
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight5"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">PRESUPUESTO ALUMINIO</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <table>
            <tr className="td-naranja-oscuro">
              <th> UNIDADES </th>

              <th>TIPO</th>

              <th>CONCEPTO</th>

              <th>
                PRECIO<br></br>UNIDAD
              </th>

              <th>
                PRECIO<br></br>TOTAL
              </th>
            </tr>

            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>3522€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>7.900€</td>
            </tr>
          </table>
          <p className="p-iva">* Los precios son sin IVA</p>
        </div>
      </div>

      {/*CANVAS PINTURA*/}
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight6"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">PRESUPUESTO PINTURA</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <table>
            <tr className="td-naranja-oscuro">
              <th> UNIDADES </th>

              <th>TIPO</th>

              <th>CONCEPTO</th>

              <th>
                PRECIO<br></br>UNIDAD
              </th>

              <th>
                PRECIO<br></br>TOTAL
              </th>
            </tr>

            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>25</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>7</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>25€</td>

              <td>175€</td>
            </tr>

            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr>
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>352€</td>
            </tr>
            <tr className="td-naranja">
              <td>32</td>

              <td>m2</td>

              <td className="td-texto">
                Materiales paleteria(mortero-pegoland especial-borada
                impermeable)
              </td>

              <td>11€</td>

              <td>3522€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>7.900€</td>
            </tr>
          </table>
          <p className="p-iva">* Los precios son sin IVA</p>
        </div>
      </div>
    </SCCarrouselPresupuestos>
  );
}
