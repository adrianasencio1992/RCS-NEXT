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
                  cocina completa incluyendo sus electrodomésticos.
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
                  eléctrica en función de su estancia.
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
          <h5 id="offcanvasRightLabel">
            PRESUPUESTO COCINA - PRECIO TOTAL COCINA COMPLETA - 14.294,50€
          </h5>
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

              <th>MATERIALES COCINA</th>

              <th>
                PRECIO<br></br>UNIDAD
              </th>

              <th>
                PRECIO<br></br>TOTAL
              </th>
            </tr>

            <tr className="td-naranja">
              <td>28</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>20€</td>

              <td>560€</td>
            </tr>

            <tr>
              <td>8</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>22€</td>

              <td>176€</td>
            </tr>

            <tr className="td-naranja">
              <td>22</td>

              <td>uds</td>

              <td className="td-texto">
                Materiales de paleteria(mortero, pegoland flexible, borada
                impermeable)
              </td>

              <td>9€</td>

              <td>198€</td>
            </tr>
            <tr>
              <td>8</td>

              <td>m2</td>

              <td className="td-texto">Techo de pladur</td>

              <td>20€</td>

              <td>160€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Materiales pintura techo</td>

              <td>30€</td>

              <td>30€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Materiales de lampisteria instalaciones nuevas
              </td>

              <td>185€</td>

              <td>185€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Materiales de electricidad instalaciones nuevas
              </td>

              <td>145€</td>

              <td>145€</td>
            </tr>

            <tr>
              <td>3</td>

              <td>uds</td>

              <td className="td-texto">
                Downlight empotrado redondo alver blanco o inox
              </td>

              <td>23€</td>

              <td>69€</td>
            </tr>

            <tr className="td-naranja">
              <td>10</td>

              <td>uds</td>

              <td className="td-texto">
                8 Enchufes y 2 interruptores a elegir de la exposición (precio
                medio)
              </td>

              <td>12€</td>

              <td>120€</td>
            </tr>
            <tr>
              <td>4,50</td>

              <td>ml</td>

              <td className="td-texto">
                Mobiliario de cocina segun plano entre bajos y altos
              </td>

              <td>630€</td>

              <td>2.835€</td>
            </tr>

            <tr className="td-naranja">
              <td>3,20</td>

              <td>ml</td>

              <td className="td-texto">Silestone precio medio estimado</td>

              <td>380€</td>

              <td>1.216€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Tubos y accesorios campana</td>

              <td>62€</td>

              <td>62€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Encimera de induccion 3 zonas Bosch o similar (precio medio)
              </td>

              <td>425€</td>

              <td>425€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Horno pirolitico-multifuncion Bosch o similar (precio medio)
              </td>

              <td>405€</td>

              <td>405€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Microondas 20l integrable Bosch o similar (precio medio)
              </td>

              <td>230€</td>

              <td>230€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Campana decorativa 60 Bosch o similar (precio medio)
              </td>

              <td>335€</td>

              <td>335€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Pack fregadera inox y grifo</td>

              <td>390€</td>

              <td>390€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Material Tapetas nuevas (carpintero)</td>

              <td>60€</td>

              <td>60€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Pletina suelo</td>

              <td>15€</td>

              <td>15€</td>
            </tr>
            <tr>
              <td>2</td>

              <td>uds</td>

              <td className="td-texto">
                Sacas de runa autorizadas y recogida de las mismas
              </td>

              <td>32,50€</td>

              <td>65€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>7.681€</td>
            </tr>
          </table>
          <p className="p-iva">
            * Precios sin IVA (si el 60% o más del importe es mano de obra se
            aplica un tipo impositivo del 10%, en caso contrario se aplicará del
            21%)
          </p>

          {/* Mano de obra cocina */}
          <table>
            <tr className="td-naranja-oscuro">
              <th> UNIDADES </th>

              <th>TIPO</th>

              <th>MANO DE OBRA PROFESIONAL</th>

              <th>
                PRECIO
                <br />
                UNIDAD
              </th>

              <th>
                PRECIO<br></br>TOTAL
              </th>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Desmontar muebles de cocina</td>

              <td>135€</td>

              <td>135€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Desmontar Horno</td>

              <td>15€</td>

              <td>15€</td>
            </tr>

            <tr className="td-naranja">
              <td>36</td>

              <td>m2</td>

              <td className="td-texto">Desmontar Campana extractora</td>

              <td>20€</td>

              <td>20€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Desmontar fregadera</td>

              <td>20€</td>

              <td>20€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Desmontar Vitro</td>

              <td>15€</td>

              <td>15€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Desmontar encimera de madera o marmol
              </td>

              <td>55€</td>

              <td>55€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Desmontar falso techo</td>

              <td>95€</td>

              <td>95€</td>
            </tr>

            <tr>
              <td>28</td>

              <td>m2</td>

              <td className="td-texto">
                Picado de racholas pared incluido retirada de escombros
              </td>

              <td>15€</td>

              <td>420€</td>
            </tr>

            <tr className="td-naranja">
              <td>8</td>

              <td>m2</td>

              <td className="td-texto">
                Picado de pavimento del suelo y retirada de escombros
              </td>

              <td>25€</td>

              <td>200€</td>
            </tr>
            <tr>
              <td>8</td>

              <td>ml</td>

              <td className="td-texto">
                Hacer regatas para instalaciones de luz, agua y desagues
              </td>

              <td>30€</td>

              <td>240€</td>
            </tr>

            <tr className="td-naranja">
              <td>28</td>

              <td>m2</td>

              <td className="td-texto">Rebozar paredes con mortero M-75</td>

              <td>22€</td>

              <td>616€</td>
            </tr>

            <tr>
              <td>28</td>

              <td>m2</td>

              <td className="td-texto">
                Colocación racholas de pared incluido borada
              </td>

              <td>45€</td>

              <td>1.260€</td>
            </tr>
            <tr className="td-naranja">
              <td>8</td>

              <td>m2</td>

              <td className="td-texto">
                Colocación pavimento del suelo incluido borada
              </td>

              <td>45€</td>

              <td>360€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Instalación de agua completa</td>

              <td>428€</td>

              <td>428€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Instalación de luz completa</td>

              <td>355€</td>

              <td>355€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Instalación desague</td>

              <td>95€</td>

              <td>95€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Desmontar tapetas puerta y volver a colocar
              </td>

              <td>45€</td>

              <td>45€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Cepillar puerta</td>

              <td>25€</td>

              <td>25€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Colocación pletina suelo</td>

              <td>20€</td>

              <td>20€</td>
            </tr>
            <tr>
              <td>4,50</td>

              <td>ml</td>

              <td className="td-texto">
                Colocación muebles de cocina altos y bajos
              </td>

              <td>225€</td>

              <td>1.012,50€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Colocación de campana extractora</td>

              <td>70€</td>

              <td>70€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Colocación fregadera, grifería y desague
              </td>

              <td>80€</td>

              <td>80€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Colocación vitro</td>

              <td>40€</td>

              <td>40€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Colocación horno</td>

              <td>25€</td>

              <td>25€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Colocación Microondas</td>

              <td>30€</td>

              <td>30€</td>
            </tr>
            <tr>
              <td>3,20</td>

              <td>ml</td>

              <td className="td-texto">
                Colocación encimera silestone o granito
              </td>

              <td>98€</td>

              <td>313€</td>
            </tr>
            <tr className="td-naranja">
              <td>8</td>

              <td>m2</td>

              <td className="td-texto">Colocación techo de pladur</td>

              <td>60€</td>

              <td>480€</td>
            </tr>
            <tr>
              <td>8</td>

              <td>m2</td>

              <td className="td-texto">
                Encitar, lijar y pintar techo de pladur
              </td>

              <td>18€</td>

              <td>144€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>6.613,50€</td>
            </tr>
          </table>
          <p className="p-iva">
            * Precios sin IVA (si el 60% o más del importe es mano de obra se
            aplica un tipo impositivo del 10%, en caso contrario se aplicará del
            21%)
          </p>
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
          <h5 id="offcanvasRightLabel">
            PRESUPUESTO BAÑO - PRECIO TOTAL BAÑO COMPLET0 - 7.369€
          </h5>
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

              <th>MATERIALES BAÑO</th>

              <th>
                PRECIO<br></br>UNIDAD
              </th>

              <th>
                PRECIO<br></br>TOTAL
              </th>
            </tr>

            <tr className="td-naranja">
              <td>20</td>

              <td>m2</td>

              <td className="td-texto">
                Azulejos pared a escoger segun muestras exposicion
              </td>

              <td>20€</td>

              <td>400€</td>
            </tr>

            <tr>
              <td>4</td>

              <td>m2</td>

              <td className="td-texto">
                Pavimento suelo a escoger segun muestras exposicion
              </td>

              <td>22€</td>

              <td>88€</td>
            </tr>

            <tr className="td-naranja">
              <td>18</td>

              <td>uds</td>

              <td className="td-texto">
                Materiales de paleteria(mortero, pegoland flexible, borada
                impermeable)
              </td>

              <td>9€</td>

              <td>162€</td>
            </tr>
            <tr>
              <td>4</td>

              <td>m2</td>

              <td className="td-texto">Techo de pladur</td>

              <td>30€</td>

              <td>120€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Materiales pintura techo</td>

              <td>30€</td>

              <td>30€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Materiales de lampisteria instalaciones nuevas
              </td>

              <td>235€</td>

              <td>235€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Materiales de electricidad instalaciones nuevas
              </td>

              <td>125€</td>

              <td>125€</td>
            </tr>

            <tr>
              <td>2</td>

              <td>uds</td>

              <td className="td-texto">
                Downlight empotrado redondo alver blanco o inox
              </td>

              <td>23€</td>

              <td>46€</td>
            </tr>

            <tr className="td-naranja">
              <td>4</td>

              <td>uds</td>

              <td className="td-texto">
                2 Enchufes y 2 interruptores a elegir de la exposición (precio
                medio)
              </td>

              <td>12€</td>

              <td>48€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Pack mueble de baño 120cm + lavabo + espejo + aplique LED
              </td>

              <td>465€</td>

              <td>465€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                WC the gap roca adosado blanco con tapa amortiguada
              </td>

              <td>415€</td>

              <td>415€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Plato de ducha</td>

              <td>270€</td>

              <td>270€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Mampara</td>

              <td>380€</td>

              <td>380€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Monomando lavabo cromo</td>

              <td>90€</td>

              <td>90€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Grifería ducha</td>

              <td>135€</td>

              <td>135€</td>
            </tr>
            <tr>
              <td>2</td>

              <td>uds</td>

              <td className="td-texto">
                Sacas de runa autorizadas y recogida de las mismas
              </td>

              <td>32,50€</td>

              <td>65€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Pletina suelo</td>

              <td>15€</td>

              <td>15€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>3.089€</td>
            </tr>
          </table>
          <p className="p-iva">
            * Precios sin IVA (si el 60% o más del importe es mano de obra se
            aplica un tipo impositivo del 10%, en caso contrario se aplicará del
            21%)
          </p>

          {/* Mano de obra baño */}
          <table>
            <tr className="td-naranja-oscuro">
              <th> UNIDADES </th>

              <th>TIPO</th>

              <th>MANO DE OBRA PROFESIONAL</th>

              <th>
                PRECIO
                <br />
                UNIDAD
              </th>

              <th>
                PRECIO<br></br>TOTAL
              </th>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Desmontar Techo alumino o pladur</td>

              <td>60€</td>

              <td>60€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Desmontar WC</td>

              <td>30€</td>

              <td>30€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Desmontar Mueble de baño y espejo</td>

              <td>40€</td>

              <td>40€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Desmontar mampara</td>

              <td>40€</td>

              <td>40€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Desmontar bidet</td>

              <td>25€</td>

              <td>25€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Desmontar Bañera o plato de ducha</td>

              <td>80€</td>

              <td>80€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Retirada de mobiliario a la deixalleria
              </td>

              <td>55€</td>

              <td>55€</td>
            </tr>

            <tr>
              <td>20</td>

              <td>m2</td>

              <td className="td-texto">
                Picado de racholas pared incluido retirada de escombros
              </td>

              <td>15€</td>

              <td>300€</td>
            </tr>

            <tr className="td-naranja">
              <td>4</td>

              <td>m2</td>

              <td className="td-texto">
                Picado de pavimento del suelo y retirada de escombros
              </td>

              <td>25€</td>

              <td>100€</td>
            </tr>
            <tr>
              <td>4</td>

              <td>ml</td>

              <td className="td-texto">
                Hacer regatas para instalaciones de luz, agua y desagues
              </td>

              <td>30€</td>

              <td>120€</td>
            </tr>

            <tr className="td-naranja">
              <td>20</td>

              <td>m2</td>

              <td className="td-texto">Rebozar paredes con mortero M-75</td>

              <td>22€</td>

              <td>440€</td>
            </tr>

            <tr>
              <td>20</td>

              <td>m2</td>

              <td className="td-texto">
                Colocación racholas de pared incluido borada
              </td>

              <td>45€</td>

              <td>900€</td>
            </tr>
            <tr className="td-naranja">
              <td>4</td>

              <td>m2</td>

              <td className="td-texto">
                Colocación pavimento del suelo incluido borada
              </td>

              <td>55€</td>

              <td>220€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Instalación de agua completa</td>

              <td>450€</td>

              <td>450€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Instalación de luz completa</td>

              <td>285€</td>

              <td>285€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Instalación desagues</td>

              <td>175€</td>

              <td>175€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Desmontar tapetas puerta y volverlas a colocar
              </td>

              <td>45€</td>

              <td>45€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Cepillar puerta</td>

              <td>25€</td>

              <td>25€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Colocación pletina suelo</td>

              <td>20€</td>

              <td>20€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Colocación plato de ducha o bañera</td>

              <td>110€</td>

              <td>110€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Colocación mampara</td>

              <td>110€</td>

              <td>110€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Colocación grifería ducha</td>

              <td>80€</td>

              <td>80€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Colocación Pack mueble de baño 120cm + lavabo + espejo + aplique
                LED
              </td>

              <td>80€</td>

              <td>80€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Colocación Water</td>

              <td>60€</td>

              <td>60€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Colocación Bidet</td>

              <td>45€</td>

              <td>45€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Colocación grifería lavabo</td>

              <td>25€</td>

              <td>25€</td>
            </tr>
            <tr className="td-naranja">
              <td>4</td>

              <td>m2</td>

              <td className="td-texto">Colocación techo de pladur</td>

              <td>60€</td>

              <td>240€</td>
            </tr>
            <tr>
              <td>4</td>

              <td>m2</td>

              <td className="td-texto">
                Encitar, lijar y pintar techo de pladur
              </td>

              <td>30€</td>

              <td>120€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>4.280€</td>
            </tr>
          </table>
          <p className="p-iva">
            * Precios sin IVA (si el 60% o más del importe es mano de obra se
            aplica un tipo impositivo del 10%, en caso contrario se aplicará del
            21%)
          </p>
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
          <h5 id="offcanvasRightLabel">PRESUPUESTO FONTANERÍA</h5>
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

              <th>CALEFACCIÓN</th>

              <th>
                PRECIO<br></br>UNIDAD
              </th>

              <th>
                PRECIO<br></br>TOTAL
              </th>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>m2</td>

              <td className="td-texto">Materiales paleteria</td>

              <td>50€</td>

              <td>50€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>m2</td>

              <td className="td-texto">
                Saca autorizada + retirada de saca (posibles regatas paleta)
              </td>

              <td>50€</td>

              <td>50€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Caldera condensacion eco 24/24f baxi o similar
              </td>

              <td>1.099€</td>

              <td>1.099€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Plantilla montaje caldera baxi o similar
              </td>

              <td>45€</td>

              <td>45€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Termostato programable baxi o similar
              </td>

              <td>90€</td>

              <td>90€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>m2</td>

              <td className="td-texto">Tubos y accesorios caldera</td>

              <td>70€</td>

              <td>70€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Colector de calefaccion + caja colector
              </td>

              <td>60€</td>

              <td>60€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Radiador de 18 elementos comedor 1</td>

              <td>180€</td>

              <td>180€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Radiador de 12 elementos comedor 2</td>

              <td>120€</td>

              <td>120€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Radiador de 10 elementos habitacion 1
              </td>

              <td>100€</td>

              <td>100€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Radiador de 8 elementos habitacion 2</td>

              <td>80€</td>

              <td>80€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Radiador de 8 elementos habitacion 3</td>

              <td>80€</td>

              <td>80€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Radiador de 4 elementos recibidor</td>

              <td>40€</td>

              <td>40€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Radiador de 5 elementos baño</td>

              <td>50€</td>

              <td>50€</td>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>uds</td>

              <td className="td-texto">
                Tubo multicapa norma une + piezas especiales (precio por
                radiador)
              </td>

              <td>35€</td>

              <td>245€</td>
            </tr>
            <tr>
              <td>7</td>

              <td>uds</td>

              <td className="td-texto">Valvula monotubo orkli 12-16</td>

              <td>24€</td>

              <td>168€</td>
            </tr>
            <tr className="td-naranja">
              <td>7</td>

              <td>uds</td>

              <td className="td-texto">
                Juego tuercas - biconos multicapa 16x2
              </td>

              <td>20€</td>

              <td>140€</td>
            </tr>
            <tr>
              <td>7</td>

              <td>uds</td>

              <td className="td-texto">
                Reducciones + purgador + junta + tapon
              </td>

              <td>8€</td>

              <td>56€</td>
            </tr>
            <tr className="td-naranja">
              <td>7</td>

              <td>uds</td>

              <td className="td-texto">Juegos soportes radiador</td>

              <td>4€</td>

              <td>28€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Mano de obra profesional lampista</td>

              <td>1.495€</td>

              <td>1.495€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Mano de obra profesional paleta</td>

              <td>980€</td>

              <td>980€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>5.226€</td>
            </tr>
          </table>

          <p className="p-iva">
            * Precios sin IVA (si el 60% o más del importe es mano de obra se
            aplica un tipo impositivo del 10%, en caso contrario se aplicará del
            21%)
          </p>
          <table>
            <tr className="td-naranja-oscuro">
              <th> UNIDADES </th>

              <th>TIPO</th>

              <th>AIRE ACONDICIONADO</th>

              <th>
                PRECIO<br></br>UNIDAD
              </th>

              <th>
                PRECIO<br></br>TOTAL
              </th>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Split fujitsu o similar</td>

              <td>685€</td>

              <td>685€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>m2</td>

              <td className="td-texto">Tubo aislado de 1/4x3/8 hasta 5ml</td>

              <td>75€</td>

              <td>75€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>m2</td>

              <td className="td-texto">
                Juego de soportes reforzado 50x40 + kit antivibrante
              </td>

              <td>75€</td>

              <td>75€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Canaleta para instalacion vista split 1x1
              </td>

              <td>60€</td>

              <td>60€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Mano de obra profesional frigorista</td>

              <td>295€</td>

              <td>295€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>1.190€</td>
            </tr>
          </table>
          <p className="p-iva">
            * Precios sin IVA (si el 60% o más del importe es mano de obra se
            aplica un tipo impositivo del 10%, en caso contrario se aplicará del
            21%)
          </p>
        </div>
      </div>

      {/*CANVAS ElECTRICIDAD*/}
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight7"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">
            PRESUPUESTO ELECTRICIDAD - Piso 75 m2 - 5.820€
          </h5>
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
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Materiales electricidad (incluye cableados, tubos,
                magnetotermico, caja de empalmes, cajetines...)
              </td>

              <td>995€</td>

              <td>995€</td>
            </tr>

            <tr>
              <td>35</td>

              <td>uds</td>

              <td className="td-texto">Enchufes a elegir</td>

              <td>15€</td>

              <td>570€</td>
            </tr>

            <tr className="td-naranja">
              <td>16</td>

              <td>uds</td>

              <td className="td-texto">Interruptores a elegir</td>

              <td>15€</td>

              <td>240€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Mano de obra profesional paleta</td>

              <td>1.935€</td>

              <td>1.935€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Mano de obra profesional lampista</td>

              <td>2.080€</td>

              <td>2.080€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>5.820€</td>
            </tr>
          </table>
          <p className="p-iva">
            * Precios sin IVA (si el 60% o más del importe es mano de obra se
            aplica un tipo impositivo del 10%, en caso contrario se aplicará del
            21%)
          </p>
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
          <h5 id="offcanvasRightLabel">PRESUPUESTO PARQUET Y PUERTAS</h5>
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

              <th>PARQUET</th>

              <th>
                PRECIO<br></br>UNIDAD
              </th>

              <th>
                PRECIO<br></br>TOTAL
              </th>
            </tr>

            <tr className="td-naranja">
              <td>65</td>

              <td>m2</td>

              <td className="td-texto">Parquet AC-5</td>

              <td>16€</td>

              <td>1.040€</td>
            </tr>

            <tr>
              <td>70</td>

              <td>ml</td>

              <td className="td-texto">Zocalo canto recto</td>

              <td>4,50€</td>

              <td>315€</td>
            </tr>

            <tr className="td-naranja">
              <td>65</td>

              <td>m2</td>

              <td className="td-texto">Espuma gold alta densidad caucho</td>

              <td>2,30€</td>

              <td>149,50€</td>
            </tr>
            <tr>
              <td>4</td>

              <td>uds</td>

              <td className="td-texto">Pletina suelo</td>

              <td>15€</td>

              <td>60€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Mano de obra profesional carpintero</td>

              <td>1.625€</td>

              <td>1.625€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>3.189€</td>
            </tr>
          </table>
          <p className="p-iva">
            * Precios sin IVA (si el 60% o más del importe es mano de obra se
            aplica un tipo impositivo del 10%, en caso contrario se aplicará del
            21%)
          </p>
          <table>
            <tr className="td-naranja-oscuro">
              <th> UNIDADES </th>

              <th>TIPO</th>

              <th>PUERTAS</th>

              <th>
                PRECIO<br></br>UNIDAD
              </th>

              <th>
                PRECIO<br></br>TOTAL
              </th>
            </tr>

            <tr className="td-naranja">
              <td>7</td>

              <td>uds</td>

              <td className="td-texto">
                Puerta ciega lisa + tapetas + batientes + herrajes
              </td>

              <td>245€</td>

              <td>1.715€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Puerta cristalera lisa + tapetas + batientes + herrajes 4v o 3v
              </td>

              <td>355€</td>

              <td>355€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Cristales doble mate al corte</td>

              <td>115€</td>

              <td>115€</td>
            </tr>
            <tr>
              <td>8</td>

              <td>uds</td>

              <td className="td-texto">
                Maneta inoxidable a escoger según catálogo
              </td>

              <td>32€</td>

              <td>256€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Puerta entrada nueva blindada laca-xapa
              </td>

              <td>545€</td>

              <td>545€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Cerradura de seguridad tipo arcus o similar antipalanca
              </td>

              <td>300€</td>

              <td>300€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Pomo i mirilla plateados nuevos puerta de entrada
              </td>

              <td>60€</td>

              <td>60€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Mano de obra profesional Carpintero</td>

              <td>1.600€</td>

              <td>1.600€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>4.946€</td>
            </tr>
          </table>
          <p className="p-iva">
            * Precios sin IVA (si el 60% o más del importe es mano de obra se
            aplica un tipo impositivo del 10%, en caso contrario se aplicará del
            21%)
          </p>
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
          <h5 id="offcanvasRightLabel">PRESUPUESTO ALUMINIO - 6.410€</h5>
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
              <td>1</td>

              <td>m2</td>

              <td className="td-texto">
                Perfileria, herrajes y cristales ventana cocina
              </td>

              <td>190€</td>

              <td>190€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>m2</td>

              <td className="td-texto">
                Perfileria, herrajes y cristales puerta cocina
              </td>

              <td>310€</td>

              <td>310€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Perfileria, herrajes y cristales corredera galeria
              </td>

              <td>325€</td>

              <td>325€</td>
            </tr>
            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Perfileria, herrajes y cristales ventana baño
              </td>

              <td>180€</td>

              <td>180€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Perfileria, herrajes y cristales ventana habitacion 1
              </td>

              <td>325€</td>

              <td>325€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Perfileria, herrajes y cristales ventana habitacion 2
              </td>

              <td>325€</td>

              <td>325€</td>
            </tr>
            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Perfileria, herrajes y cristales ventana habitacion 3
              </td>

              <td>325€</td>

              <td>325€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">
                Perfileria, herrajes y cristales corredera comedor
              </td>

              <td>520€</td>

              <td>520€</td>
            </tr>

            <tr className="td-naranja">
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Mano de obra profesional carpintero</td>

              <td>3.910€</td>

              <td>3.910€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>6.410€</td>
            </tr>
          </table>
          <p className="p-iva">
            * Aluminio en blanco lacado con rotura de puente térmico en: 3
            habitaciones, corredera en comedor con forro recto y vidrio de
            camara bajo emisivo, con vidrio de camara en cocina, galeria y baño
          </p>
          <p className="p-iva">
            * Precios sin IVA (si el 60% o más del importe es mano de obra se
            aplica un tipo impositivo del 10%, en caso contrario se aplicará del
            21%)
          </p>
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
          <h5 id="offcanvasRightLabel">PRESUPUESTO PINTURA - 3.485€</h5>
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
              <td>70</td>

              <td>m2</td>

              <td className="td-texto">
                Pintura plastica marca valentine o similar
              </td>

              <td>495€</td>

              <td>495€</td>
            </tr>

            <tr>
              <td>1</td>

              <td>ud</td>

              <td className="td-texto">Mano de obra profesional pintor</td>

              <td>2.990€</td>

              <td>2.990€</td>
            </tr>

            <tr className="td-naranja-oscuro">
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td className="td-blanco"></td>
              <td>TOTAL</td>

              <td>3.485€</td>
            </tr>
          </table>
          <p className="p-iva">
            * Precios sin IVA (si el 60% o más del importe es mano de obra se
            aplica un tipo impositivo del 10%, en caso contrario se aplicará del
            21%)
          </p>
        </div>
      </div>
    </SCCarrouselPresupuestos>
  );
}
