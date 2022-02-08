import React from "react";
import Layout from "../../../components/layout";
import SCFooter from "../../../components/footer";
import SCCanteado from "./canteado.styled";
import Link from "next/link";

export default function Canteado() {
  return (
    <SCCanteado>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Puertas Canteadas</h1>
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
          <Link href="#">
            <a className="link2">Puertas canteadas</a>
          </Link>
        </div>
        <h2 className="h3-formulario">GRUPO ACB</h2>
        <hr className="hr-formulario"></hr>
        <section className="section-card">
          <Link href="/muebles-de-cocina/puertas/canteado/4cantos">
            <div class="div-card">
              <img className="imagen-card" src="/canteado/4cantos.jpg"></img>
              <h2 className="h2-card">4 cantos</h2>
            </div>
          </Link>

          <Link href="/muebles-de-cocina/puertas/canteado/vega">
            <div class="div-card">
              <img className="imagen-card" src="/canteado/vega.jpg"></img>
              <h2 className="h2-card">vega</h2>
            </div>
          </Link>

          <Link href="/muebles-de-cocina/puertas/canteado/calabria">
            <div class="div-card">
              <img className="imagen-card" src="/canteado/calabria.jpg"></img>
              <h2 className="h2-card">calabria</h2>
            </div>
          </Link>

          <Link href="/muebles-de-cocina/puertas/canteado/palma">
            <div class="div-card">
              <img className="imagen-card" src="/canteado/palma.jpg"></img>
              <h2 className="h2-card">palma</h2>
            </div>
          </Link>

          <Link href="/muebles-de-cocina/puertas/canteado/galdar">
            <div class="div-card">
              <img className="imagen-card" src="/canteado/galdar.jpg"></img>
              <h2 className="h2-card">galdar</h2>
            </div>
          </Link>
        </section>
      </section>
      <SCFooter></SCFooter>
    </SCCanteado>
  );
}
