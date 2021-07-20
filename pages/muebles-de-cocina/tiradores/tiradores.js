import React from "react";
import Layout from "../../../components/layout";
import SCFooter from "../../../components/footer";
import SCTiradores from "./tiradores.styled";
import Link from "next/link";

export default function Tiradores() {
  return (
    <SCTiradores>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Tiradores cocina</h1>
        <p className="p-obra-nueva">Nuestra gamma de productos</p>
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
          <Link href="#">
            <a className="link2">Tiradores cocina</a>
          </Link>
        </div>
        <div class="container">
          <a
            className="link3"
            href="/muebles-de-cocina/tiradores/tirador-moderno"
          >
            <div class="card card0">
              <div class="border">
                <h2>Modernos</h2>
              </div>
            </div>
          </a>
          <a className="link3" href="/muebles-de-cocina/tiradores/tirador-asa">
            <div class="card card1">
              <div class="border">
                <h2>Rústicos</h2>
              </div>
            </div>
          </a>
          <a className="link3" href="/muebles-de-cocina/tiradores/tirador-asa">
            <div class="card card2">
              <div class="border">
                <h2>Pomos</h2>
              </div>
            </div>
          </a>
          <a className="link3" href="/muebles-de-cocina/tiradores/tirador-asa">
            <div class="card card3">
              <div class="border">
                <h2>Gola</h2>
              </div>
            </div>
          </a>
          <a className="link3" href="/muebles-de-cocina/tiradores/tirador-asa">
            <div class="card card4">
              <div class="border">
                <h2>Medidas Especiales</h2>
              </div>
            </div>
          </a>
          <a className="link3" href="/muebles-de-cocina/tiradores/tirador-asa">
            <div class="card card5">
              <div class="border">
                <h2>Embutidos</h2>
              </div>
            </div>
          </a>
        </div>
      </section>

      <SCFooter></SCFooter>
    </SCTiradores>
  );
}
