import React from "react";
import Layout from "../../components/layout";
import SCFooter from "../../components/footer";
import SCMueblesCocina from "./muebles-cocina.styled";
import Link from "next/link";

export default function MueblesCocina() {
  return (
    <SCMueblesCocina>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Muebles cocina</h1>
        <p className="p-obra-nueva">Nuestra gamma de productos</p>
      </div>
      <section className="section">
        <Link href="/materiales">
          <a className="link">Materiales</a>
        </Link>
        <span className="span"> ˃ </span>
        <Link href="#">
          <a className="link2">Muebles cocina</a>
        </Link>
        <div class="container">
          <a className="link3" href="/muebles-de-cocina/puertas/puertas-cocina">
            <div class="card card0">
              <div class="border">
                <h2>Puertas</h2>
              </div>
            </div>
          </a>
          <a className="link3" href="#">
            <div class="card card1">
              <div class="border">
                <h2>Tiradores</h2>
              </div>
            </div>
          </a>
          <a className="link3" href="#">
            <div class="card card2">
              <div class="border">
                <h2>Mesas</h2>
              </div>
            </div>
          </a>
          <a className="link3" href="#">
            <div class="card card3">
              <div class="border">
                <h2>Sillas</h2>
              </div>
            </div>
          </a>
        </div>
      </section>

      <SCFooter></SCFooter>
    </SCMueblesCocina>
  );
}
