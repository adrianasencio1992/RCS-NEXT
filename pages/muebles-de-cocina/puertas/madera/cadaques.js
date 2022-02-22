import React from "react";
import Layout from "../../../../components/layout";
import SCFooter from "../../../../components/footer";
import SCCadaques from "./cadaques.styled";
import Link from "next/link";

export default function Cadaques() {
  if (typeof $ !== "undefined") {
  }
  return (
    <SCCadaques>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Cadaqués</h1>
        <p className="p-obra-nueva">Un estilo moderno</p>
      </div>
      <section className="section">
        <div className="div-links">
          <Link href="/materiales">
            <a className="link">Materiales</a>
          </Link>
          <span className="span"> ˃ </span>
          <Link href="/muebles-de-cocina/muebles-cocina">
            <a className="link2">Muebles cocina</a>
          </Link>
          <span className="span"> ˃ </span>
          <Link href="/muebles-de-cocina/puertas/puertas-cocina">
            <a className="link2">Puertas cocina</a>
          </Link>
          <span className="span"> ˃ </span>
          <Link href="/muebles-de-cocina/puertas/madera">
            <a className="link2">Puertas madera</a>
          </Link>
          <span className="span"> ˃ </span>
          <Link href="/muebles-de-cocina/puertas/madera/cadaques">
            <a className="link2">Cadaqués</a>
          </Link>
        </div>

        <section className="section-fotos">
          <h2 className="h2-formulario">Cadaqués</h2>
          <hr className="hr-formulario"></hr>
        </section>

        <section className="section-datos">
          <div className="div-fotos">
            <img className="imagen-1" src="/madera/Cadaques.jpg"></img>
            <img className="imagen-2" src="/madera/Cadaques-cocina.jpg"></img>
          </div>
          <div className="div-tabla">
            <h3 className="h3-datos">DATOS TÉCNICOS</h3>
            <table className="tabla">
              <tr>
                <td>FABRICANTE</td>

                <td className="derecha">Grupo ACB</td>
              </tr>
              <tr>
                <td>MODELO</td>

                <td className="derecha">Cadaqués</td>
              </tr>
              <tr>
                <td>MADERA</td>

                <td className="derecha">Nogal</td>
              </tr>
              <tr>
                <td>COLOR</td>

                <td className="derecha">n1</td>
              </tr>
              <tr>
                <td>ACABADO</td>

                <td className="derecha">-</td>
              </tr>
              <tr>
                <td>TIRADOR</td>

                <td className="derecha">No</td>
              </tr>
              <tr>
                <td>MATERIAL:</td>

                <td className="derecha">Semimacizo</td>
              </tr>
              <tr>
                <td>MADERAS</td>

                <td className="derecha">
                  Fresno | Roble | Roble Nudos | Nogal
                </td>
              </tr>
              <tr>
                <td>GROSOR</td>

                <td className="derecha">22 mm</td>
              </tr>
            </table>
          </div>
        </section>
        <div class="outer-wrapper">
          <h2 className="h2-formulario">COLORES</h2>
          <div class="s-wrap s-type-1" role="slider">
            <input type="radio" id="s-1" name="slider-control" />
            <input type="radio" id="s-2" name="slider-control" />
            <input type="radio" id="s-3" name="slider-control" />
            <input type="radio" id="s-4" name="slider-control" />
            <input type="radio" id="s-5" name="slider-control" />

            <ul class="s-content">
              <li class="s-item s-item-1"></li>
              <li class="s-item s-item-2"></li>
              <li class="s-item s-item-3"></li>
              <li class="s-item s-item-4"></li>
              <li class="s-item s-item-5"></li>
            </ul>
            <div class="s-control">
              <label class="s-c-1" for="s-1"></label>
              <label class="s-c-2" for="s-2"></label>
              <label class="s-c-3" for="s-3"></label>
              <label class="s-c-4" for="s-4"></label>
              <label class="s-c-5" for="s-5"></label>
            </div>
            <div class="s-nav">
              <label class="s-nav-1 right" for="s-2"></label>
              <label class="s-nav-2 left" for="s-1"></label>
              <label class="s-nav-2 right" for="s-3"></label>
              <label class="s-nav-3 left" for="s-2"></label>
              <label class="s-nav-3 right" for="s-4"></label>
              <label class="s-nav-4 left" for="s-3"></label>
              <label class="s-nav-4 right" for="s-5"></label>
              <label class="s-nav-5 left" for="s-4"></label>
            </div>
          </div>
        </div>
      </section>

      <SCFooter></SCFooter>
    </SCCadaques>
  );
}
