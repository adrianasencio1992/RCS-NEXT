import React from "react";
import SCFooter from "./footer.styled";

export default function Footer() {
  return (
    <SCFooter>
      <section className="section-footer">
        <div className="div-general-footer">
          <div className="div-subgeneral-footer">
            <h2 className="h2-footer">DONDE TRABAJAMOS</h2>
            <div className="div-li-footer">
              <ul className="ul-footer">
                <li className="li-footer">
                  <a href="#">Barcelona</a>
                </li>

                <li className="li-footer">
                  <a href="#">Sabadell</a>
                </li>
                <li className="li-footer">
                  <a href="#">Terrassa</a>
                </li>
                <li className="li-footer">
                  <a href="#">Sant Cugat</a>
                </li>
                <li className="li-footer">
                  <a href="#">Valldoreix</a>
                </li>
                <li className="li-footer">
                  <a href="#">Rubí</a>
                </li>
              </ul>
              <ul className="ul-footer">
                <li className="li-footer">
                  <a href="#">Cerdanyola</a>
                </li>
                <li className="li-footer">
                  <a href="#">Sant Quirze</a>
                </li>
                <li className="li-footer">
                  <a href="#">Ripollet</a>
                </li>
                <li className="li-footer">
                  <a href="#">Matadepera</a>
                </li>
                <li className="li-footer">
                  <a href="#">Castellbisbal</a>
                </li>
                <li className="li-footer">
                  <a href="#">Molins de Rei</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="div-subgeneral-footer">
            <h2 className="h2-footer">CONTACTO</h2>
            <div className="div-contacto-footer">
              <div className="div-subcontacto-footer">
                <p className="p2-footer">◎ RUBÍ - C/ Lope de Vega, 22 LOCAL</p>
              </div>
              <div className="div-subcontacto-footer">
                <p className="p2-footer">✉ rcs.reformas@hotmail.com</p>
              </div>
              <div className="div-subcontacto-footer">
                <p className="p2-footer">☏ 674686045 - 635126596</p>
              </div>
              <div className="div-redes-sociales-footer">
                <img
                  className="facebook"
                  src="/facebook.png"
                  alt="facebook"
                ></img>
                <a
                  href="https://www.facebook.com/rcs.empresadereformas/"
                  target="_blank"
                >
                  <img
                    className="facebook"
                    src="/facebook2.png"
                    alt="facebook"
                  ></img>
                </a>
                <img
                  className="instagram"
                  src="/instagram.png"
                  alt="instagram"
                ></img>
                <a
                  href="https://www.instagram.com/rcs_reformas/"
                  target="_blank"
                >
                  <img
                    className="instagram"
                    src="/instagram2.png"
                    alt="instagram"
                  ></img>
                </a>
              </div>
            </div>
          </div>

          <div className="div-subgeneral-footer">
            <h2 className="h2-footer">RCS</h2>
            <p className="p-footer">
              Somos una empresa especializada en obra nueva y reformas de
              cocinas, baños, carpintería, lampistería, ventanas de aluminio,
              etc. Llevamos más de 30 años en el sector y nos ocupamos de todo:
              paletas, lampistas, carpinteros, pintores, etc. Tenemos tienda
              física y online, así que usted podrá elegir los materiales y
              nosotros satisfaceremos sus necesidades. Nos adaptamos a todos los
              precios del mercado y a su presupuesto para la reforma del hogar.
              Tú lo imaginas, nosotros lo creamos.
            </p>
          </div>
        </div>
        <div className="div-final-footer">
          <p className="p-final-footer">
            © 2021 SRC | Aviso legal | Política de cookies | Política de
            privacidad | Desarrollado por RCS. Todos los derechos reservados
          </p>
        </div>
      </section>
    </SCFooter>
  );
}
