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
                  <h3>Hasta 12 MESES</h3>
                  <div>
                    Financiamos el precio de tu obra o reforma hasta 12 meses
                    sin intereses si el pago se realiza con targeta. Consulta
                    con nuestros profesionales para tu plan de financiación.
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
                    Te ayudamos al pago de tu proyecto con el fraccionamiento de
                    su coste en 3 cuotas sin intereses. Consulta con nuestros
                    profesionales para tu plan de financiación.
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
                  <h3>Hasta 36 MESES</h3>
                  <div>
                    Financiamos el precio de tu obra o reforma hasta 36 meses
                    con entidad bancaria. Consulta con nuestros profesionales
                    para crear el plan de financiación que más se adapte a ti.
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
