import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCFinanciacion from "./financiacion.styled";

export default function Financiacion() {
  return (
    <SCFinanciacion>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Financiación</h1>
        <p className="p-obra-nueva">
          Financiamos tu proyecto hasta 36 meses sin intereses
        </p>
      </div>
      <section className="section-financiacion">
        <h2 className="h2-formulario">Elige una financiación a tu medida</h2>
        <hr className="hr-titulo"></hr>
        <p className="p1-obra">
          Las reformas se disfrutan más cuando puedes pagarlas cómodamente. Por
          eso te ofrecemos diferentes opciones de financiación, para que elijas
          la que mejor se adapta a ti.
        </p>

        {/*PAGO CON TARGETA HASTA 12 MESES*/}
        <div className="div-general-carousel">
          <div type="button">
            <a className="enlace">
              <div class="a-box">
                <div class="img-container">
                  <div class="img-inner">
                    <div class="inner-skew">
                      <img src="/financiacion2.jpg" />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>Pago con targeta hasta 12 MESES</h3>
                  <div>
                    Consulte el precio de la reforma de un baño, un aseo o la
                    sustitución de su bañera por plato de ducha.
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/*FRACIONADO*/}
          <div type="button">
            <a className="enlace">
              <div class="a-box">
                <div class="img-container">
                  <div class="img-inner">
                    <div class="inner-skew">
                      <img src="/financiacion3.jpg" />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>3 PAGOS</h3>
                  <div>
                    Consulte el precio de la instalación de una nueva caldera,
                    aire acondicionado o calefacción.
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/*Hasta 36 meses sin intereses*/}
          <div type="button">
            <a className="enlace">
              <div class="a-box">
                <div class="img-container">
                  <div class="img-inner">
                    <div class="inner-skew">
                      <img src="/financiacion1.jpg" />
                    </div>
                  </div>
                </div>
                <div class="text-container">
                  <h3>Hsta 36 MESES sin intereses</h3>
                  <div>
                    Consulte el precio estimado de la variación en instalación
                    electrica en función de su estancia.
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <SCFooter></SCFooter>
    </SCFinanciacion>
  );
}
