import React from "react";
import Layout from "../../../../components/layout";
import SCFooter from "../../../../components/footer";
import SCHanoi from "./hanoi.styled";
import Link from "next/link";

export default function Hanoi() {
  return (
    <SCHanoi>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Hanoi</h1>
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
          <Link href="/muebles-de-cocina/puertas/lacadas">
            <a className="link2">Puertas lacadas</a>
          </Link>
          <span className="span"> ˃ </span>
          <Link href="/muebles-de-cocina/puertas/lacadas/hanoi">
            <a className="link2">Hanoi</a>
          </Link>
        </div>

        <section className="section-fotos">
          <h2 className="h2-formulario">HANOI</h2>
          <hr className="hr-formulario"></hr>
          <div className="div-fotos">
            <img className="imagen-1" src="/lacadas/Hanoi.jpg"></img>
            <img className="imagen-2" src="/lacadas/Hanoi-cocina.jpg"></img>
          </div>
        </section>
        <section className="section-datos">
          <div className="div-tabla">
            <h3 className="h3-datos">DATOS TÉCNICOS</h3>
            <table className="tabla">
              <tr>
                <td>FABRICANTE</td>

                <td className="derecha">Grupo ACB</td>
              </tr>
              <tr>
                <td>MODELO</td>

                <td className="derecha">Hanoi</td>
              </tr>
              <tr>
                <td>ACABADO</td>

                <td className="derecha">Mate</td>
              </tr>
              <tr>
                <td>MATERIAL</td>

                <td className="derecha">MDF</td>
              </tr>
              <tr>
                <td>GROSOR</td>

                <td className="derecha">22 mm</td>
              </tr>
              <tr>
                <td>TIRADOR</td>

                <td className="derecha">No</td>
              </tr>
              <tr>
                <td>DECORACIÓN COCINA IMÁGEN</td>

                <td className="derecha">Sin decoración</td>
              </tr>
              <tr>
                <td>DECORACIONES DISPONIBLES</td>

                <td className="derecha">
                  Arista viva | Brocha | Brocha brillo | Filo cromado | Filo oro
                  | Inox metal cobre | Inox metal plata | Metalizado | Metal
                  acero | Metal oro | Multibrillo | Patinado
                </td>
              </tr>
              <tr>
                <td>COLOR COCINA IMÁGEN</td>

                <td className="derecha">Nube</td>
              </tr>
              <tr>
                <td>COLORES DISPONIBLES</td>

                <td className="derecha">Consultar catálogo colores</td>
              </tr>
            </table>
          </div>

          <div>
            <h3 className="h3-datos">CATÁLOGO DE COLORES</h3>
            <a href="/lacadas/muestra-color-laca.pdf" target="_blank">
              <img
                className="imagen-muestrario"
                src="/lacadas/muestrario-color-lacadas-grupoacb.jpg"
              ></img>
            </a>
          </div>
        </section>
      </section>

      <SCFooter></SCFooter>
    </SCHanoi>
  );
}
