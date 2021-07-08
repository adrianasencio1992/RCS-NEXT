import React from "react";
import SCFooter from "./footer.styled";

export default function Footer() {
  return (
    <SCFooter>
      <section className="section-footer">
        <div className="div-general-footer">
          <div className="div-subgeneral-footer">
            <h2 className="h2-footer">RCS</h2>
            <p className="p-footer">
              Somos una empresa especializada en obra nueva y reformas de
              cocinas, baños, carpinteria, lampisteria, ventanas de aluminio...
              LLevamos más de 30 años en el sector y nos ocupamos de todo:
              paletas, lampistas, carpinteros, pintores, etc. Tenemos tienda
              física y online, así que usted podra elegir los materiales y
              nosotros satisfaceremos sus necesidades. Nos adaptarnos a todos
              los precios del mercado y a su presupuesto para la reforma del
              hogar. Tú lo imaginas, nosotros lo creamos.
            </p>
            <div className="div-redes-sociales-footer">
              <img
                className="facebook"
                src="/facebook.png"
                alt="facebook"
              ></img>
              <img
                className="facebook"
                src="/facebook2.png"
                alt="facebook"
              ></img>
              <img
                className="instagram"
                src="/instagram.png"
                alt="instagram"
              ></img>
              <img
                className="instagram"
                src="/instagram2.png"
                alt="instagram"
              ></img>
            </div>
          </div>
          <div className="div-subgeneral2-footer">
            <h2 className="h2-footer">DONDE TRABAJAMOS</h2>
            <div className="div-li-footer">
              <ul className="ul-footer">
                <li className="li-footer">
                  <a href="#">Reformas Barcelona</a>
                </li>

                <li className="li-footer">
                  <a href="#">Reformas Sabadell</a>
                </li>
                <li className="li-footer">
                  <a href="#">Reformas Terrassa</a>
                </li>
                <li className="li-footer">
                  <a href="#">Reformas Sant Cugat</a>
                </li>
                <li className="li-footer">
                  <a href="#">Reformas Valldoreix</a>
                </li>
                <li className="li-footer">
                  <a href="#">Reformas Rubí</a>
                </li>
              </ul>
              <ul className="ul-footer">
                <li className="li-footer">
                  <a href="#">Reformas Cerdanyola</a>
                </li>
                <li className="li-footer">
                  <a href="#">Reformas Sant Quirze</a>
                </li>
                <li className="li-footer">
                  <a href="#">Reformas Ripollet</a>
                </li>
                <li className="li-footer">
                  <a href="#">Reformas Matadepera</a>
                </li>
                <li className="li-footer">
                  <a href="#">Reformas Castellbisbal</a>
                </li>
                <li className="li-footer">
                  <a href="#">Reformas Molins de Rei</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="div-subgeneral3-footer">
            <h2 className="h2-footer">CONTACTO</h2>
            <div className="div-contacto-footer">
              <div className="div-subcontacto-footer">
                <p className="p2-footer">◎ RUBÍ - C/ Lope de Vega, 22 LOCAL</p>
              </div>
              <div className="div-subcontacto-footer">
                <p className="p2-footer">☏ 674686045 - 635126596</p>
              </div>
              <div className="div-subcontacto-footer">
                <p className="p2-footer">✉ rcs.reformas@hotmail.com</p>
              </div>
            </div>
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
