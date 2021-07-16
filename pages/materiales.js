import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCMateriales from "./materiales.styled";
import SCNavbarMateriales from "../components/navbar-materiales";

export default function Materiales() {
  return (
    <SCMateriales>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Materiales</h1>
        <p className="p-obra-nueva">Nuestra gamma de productos</p>
      </div>
      <div className="div-union">
        <SCNavbarMateriales></SCNavbarMateriales>
        <section className="section-obra-formulario">
          <div className="div-general-obra">
            <div className="div-general-cartas">
              <div className="div-primera-carta">
                <img className="imagen-carta" src="/reforma5.png"></img>
                <div className="div-primera-subcarta">
                  <p className="p2-obra">CALIDAD</p>
                  <p className="p3-obra">
                    Todos los materiales que te ofrecemos son de primera calidad
                    solo asi podemos ofrecerte los mejores resultados.
                  </p>
                </div>
              </div>
              <div className="div-primera-carta2">
                <div className="div-primera-subcarta2">
                  <p className="p2-obra">PRECIO</p>
                  <p className="p3-obra2">
                    Te ofrecemos los mejores precios en todos y cada uno de
                    nuestros productos adaptandonos a tus necesidades.
                  </p>
                </div>
                <img className="imagen-carta" src="/reforma7.png"></img>
              </div>
              <div className="div-primera-carta">
                <img className="imagen-carta" src="/reforma6.png"></img>
                <div className="div-primera-subcarta">
                  <p className="p2-obra">NUESTRA GAMMA</p>
                  <p className="p3-obra">
                    Podras elegir entre una gran gamma de productos para crear
                    el diseño que deseas en cada una de las estancias de tu
                    hogar.
                  </p>
                </div>
              </div>
              <div className="div-primera-carta2">
                <div className="div-primera-subcarta2">
                  <p className="p2-obra">A MEDIDA</p>
                  <p className="p3-obra2">
                    Te ofrecemos muebles y otros productos a medida para lograr
                    un acabado perfecto en el diseño de tu hogar
                  </p>
                </div>
                <img className="imagen-carta" src="/reforma7.png"></img>
              </div>
            </div>
          </div>
        </section>
      </div>

      <SCFooter></SCFooter>
    </SCMateriales>
  );
}
