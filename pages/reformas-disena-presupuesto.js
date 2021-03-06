import React, { useState } from "react";
import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCDiseñaPresupuesto from "./reformas-disena-presupuesto.styled";
import SCCarrouselPresupuestos from "../components/reformas-carrousel-presupuestos";
import SCCards from "../components/cards";
import SCFormulario from "../components/formulario";
import SCWatsap from "../components/watsap";

function ContadorReformas() {
  return (
    <SCDiseñaPresupuesto>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1
          className="h1-obra-nueva"
          data-aos="flip-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
          Nuestros Precios
        </h1>
        <p
          className="p-obra-nueva"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
          Pasos para saber el precio de su reforma ¿Empezamos?
        </p>
      </div>
      <div className="div-general-obra">
        <h2 className="h2-formulario">COMO CALCULAR EL PRECIO DE TU REFORMA</h2>
        <hr className="hr-formulario"></hr>
      </div>
      <SCCards></SCCards>
      <section className="section-obra-formulario">
        <div className="div-general-obra">
          <h2 className="h2-formulario">NUESTROS PRECIOS</h2>
          <hr className="hr-formulario"></hr>
          <p className="p1-obra">
            En este apartado puede consultar los precios orientativos de los
            distintos tipos de reformas. Estos siempre contemplan el uso de
            materiales de calidad así como el coste de mano de obra.
          </p>
          <SCCarrouselPresupuestos></SCCarrouselPresupuestos>
        </div>
      </section>

      {/*Precio reformas*/}

      <form name="formulario">
        <ul>
          <div>
            <h2 className="h2-formulario">¡CALCULA EL PRECIO DE TU REFORMA!</h2>
            <hr className="hr-formulario"></hr>
            <p className="p1-obra">
              A continuación puede seleccionar las reformas que tiene pensado
              realizar y obtendrá una estimación del coste total de su reforma
              en base a los precios aproximados que puede consultar en el
              apartado anterior.
            </p>
          </div>
          <div className="div-general-input">
            <div className="div-subgeneral-input">
              <p className="titulo-input">PRESUPUESTO BAÑO</p>

              <div className="div-trigeneral-input">
                <li className="li1">
                  <input type="checkbox" id="box1"></input>
                  <label for="box1">Baño completo</label>
                </li>
              </div>
              <div className="div-trigeneral-input">
                <li className="li2">
                  <input type="checkbox" id="box2"></input>
                  <label for="box2">Aseo</label>
                </li>
              </div>
              <div className="div-trigeneral-input">
                <li className="li3">
                  <input type="checkbox" id="box3"></input>
                  <label for="box3">Cambio bañera por plato</label>
                </li>
              </div>
            </div>

            <div className="div-subgeneral-input">
              <p className="titulo-input">PRESUPUESTO FONTANERÍA</p>
              <div className="div-trigeneral-input">
                <li className="li4">
                  <input type="checkbox" id="box4"></input>
                  <label for="box4">Calefacción</label>
                </li>
              </div>
              <div className="div-trigeneral-input">
                <li className="li5">
                  <input type="checkbox" id="box5"></input>
                  <label for="box5">Aire Acondicionado</label>
                </li>
              </div>
              <div className="div-trigeneral-input">
                <li className="li6">
                  <input type="checkbox" id="box6"></input>
                  <label for="box6">Caldera</label>
                </li>
              </div>
            </div>

            <div className="div-subgeneral-input">
              <p className="titulo-input">OTROS</p>
              <div className="caja3">
                <div className="subcaja3">
                  <div className="div-trigeneral-input">
                    <li className="li7">
                      <input type="checkbox" id="box7"></input>
                      <label for="box7">Cocina</label>
                    </li>
                  </div>
                  <div className="div-trigeneral-input">
                    <li className="li8">
                      <input type="checkbox" id="box8"></input>
                      <label for="box8">Parquet</label>
                    </li>
                  </div>
                  <div className="div-trigeneral-input">
                    <li className="li9">
                      <input type="checkbox" id="box9"></input>
                      <label for="box9">Puertas</label>
                    </li>
                  </div>
                </div>
                <div className="subcaja3">
                  <div className="div-trigeneral-input">
                    <li className="li10">
                      <input type="checkbox" id="box10"></input>
                      <label for="box10">Pintura</label>
                    </li>
                  </div>
                  <div className="div-trigeneral-input">
                    <li className="li11">
                      <input type="checkbox" id="box11"></input>
                      <label for="box11">Electricidad</label>
                    </li>
                  </div>
                  <div className="div-trigeneral-input">
                    <li className="li12">
                      <input type="checkbox" id="box12"></input>
                      <label for="box12">Aluminio</label>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-total">
            <p className="p-total">Total de la reforma:</p>
            <div className="count"></div>
            <p className="p-total">€</p>
            <div className="div-iva">
              <p className="p-iva">
                Precios sin IVA (si el 60% o más del importe es mano de obra se
                aplica un tipo impositivo del 10%, en caso contrario se aplicará
                del 21%)
              </p>
            </div>
          </div>
        </ul>
      </form>
      <SCFormulario></SCFormulario>
      <SCWatsap></SCWatsap>
      <SCFooter></SCFooter>
    </SCDiseñaPresupuesto>
  );
}

export default ContadorReformas;
