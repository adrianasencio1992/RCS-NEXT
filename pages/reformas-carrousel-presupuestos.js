import React from "react";
import SCCarrouselPresupuestos from "./reformas-carrousel-presupuestos.styled";

export default function ReformasCarrouselPresupuestos() {
  return (
    <SCCarrouselPresupuestos>
      <div
        className="div-general-carousel-presupuestos"
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
                This a demo experiment to skew image container. It looks good.
              </div>
            </div>
          </div>
        </a>
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
                This a demo experiment to skew image container. It looks good.
              </div>
            </div>
          </div>
        </a>
        <a className="enlace">
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img src="/fontaneria6.jpg" />
                </div>
              </div>
            </div>
            <div class="text-container">
              <h3>FONTANERÍA</h3>
              <div>
                This a demo experiment to skew image container. It looks good.
              </div>
            </div>
          </div>
        </a>
        <a className="enlace" href="#">
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img src="/parquet3.jpg" />
                </div>
              </div>
            </div>
            <div class="text-container">
              <h3>PARQUET</h3>
              <div>
                This a demo experiment to skew image container. It looks good.
              </div>
            </div>
          </div>
        </a>
        <a className="enlace" href="#">
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
                This a demo experiment to skew image container. It looks good.
              </div>
            </div>
          </div>
        </a>
        <a className="enlace" href="#">
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
                This a demo experiment to skew image container. It looks good.
              </div>
            </div>
          </div>
        </a>
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
    </SCCarrouselPresupuestos>
  );
}
