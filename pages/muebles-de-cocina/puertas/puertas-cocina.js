import React from "react";
import Layout from "../../../components/layout";
import SCFooter from "../../../components/footer";
import SCPuertasCocina from "./puertas-cocina.styled";
import Link from "next/link";

export default function PuertasCocina() {
  return (
    <SCPuertasCocina>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Puertas cocina</h1>
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
            <a className="link2">Puertas cocina</a>
          </Link>
        </div>
        <div class="container">
          <a
            className="link3"
            href="/muebles-de-cocina/puertas/tirador-puertas"
          >
            <div class="card card0">
              <div class="border">
                <h2>Con tirador</h2>
              </div>
            </div>
          </a>
          <a
            className="link3"
            href="/muebles-de-cocina/puertas/tirador-integrado"
          >
            <div class="card card1">
              <div class="border">
                <h2>Tirador integrado</h2>
              </div>
            </div>
          </a>
        </div>
      </section>

      <SCFooter></SCFooter>
    </SCPuertasCocina>
  );
}