import React from "react";
import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCGracias from "./gracias.styled";

export default function Gracias() {
  if (typeof $ !== "undefined") {
    // browser code por si algo no funciona ponerlo despues de typeof y escribir le codigo dentro
    gtag("event", "conversion", {
      send_to: "AW-10845351716/bV4qCLiFtJUDEKTeu7Mo",
    });
  }

  return (
    <SCGracias>
      <Layout></Layout>

      <div className="section-gracias">
        <img className="imagen-gracias" src="/gracias.jpg" alt="thanks" />
        <p className="p-gracias">
          Hemos recibido correctamente tu petición, recibirás una respuesta en
          un plazo de 24 horas.
        </p>
        <a href="/" className="boton-enviar">
          Regresa a inicio
        </a>
      </div>
      <SCFooter></SCFooter>
    </SCGracias>
  );
}
