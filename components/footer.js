import React from "react";
import SCFooter from "./footer.styled";

export default function Footer() {
  return (
    <SCFooter>
      <section className="section-footer">
        <div className="div-general-footer">
          <div className="div-subgeneral-footer">
            <h2 className="h2-footer">DONDE TRABAJAMOS</h2>
            <p className="p-valles">Vallés Occidental y alrededores:</p>
            <div className="div-li-footer">
              <ul className="ul-footer">
                <li className="li-footer">Barcelona</li>
                <li className="li-footer">Sabadell</li>
                <li className="li-footer">Terrassa</li>
                <li className="li-footer">Sant Cugat</li>
                <li className="li-footer">Valldoreix</li>
                <li className="li-footer">Rubí</li>
              </ul>
              <ul className="ul-footer">
                <li className="li-footer">Cerdanyola</li>
                <li className="li-footer">Sant Quirze</li>
                <li className="li-footer">Ripollet</li>
                <li className="li-footer">Matadepera</li>
                <li className="li-footer">Castellbisbal</li>
                <li className="li-footer">Molins de Rei</li>
              </ul>
            </div>
          </div>
          <div className="div-subgeneral-footer">
            <h2 className="h2-footer">CONTACTO</h2>
            <div className="div-contacto-footer">
              <div className="div-subcontacto-footer">
                <p className="p2-footer">◎ RUBÍ - C/ General Castaños, 49</p>
              </div>
              <div className="div-subcontacto-footer">
                <p className="p2-footer">✉ rcs.reformas@hotmail.com</p>
              </div>
              <div className="div-subcontacto-footer">
                <p className="p2-footer">☏ 674686045 - 635126596</p>
              </div>
              <div className="div-redes-sociales-footer">
                <a
                  href="https://www.facebook.com/rcs.empresadereformas/"
                  target="_blank"
                >
                  <img
                    className="facebook"
                    src="/facebook.png"
                    alt="facebook"
                  ></img>
                </a>
                <a
                  href="https://www.instagram.com/rcs_reformas/"
                  target="_blank"
                >
                  <img
                    className="instagram"
                    src="/instagram.png"
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
      </section>
      <div className="div-final-footer">
        <p className="p-final-footer">
          © 2021 SRC | Aviso legal | Política de cookies | Política de
          privacidad | Desarrollado por RCS. Todos los derechos reservados
        </p>
      </div>
    </SCFooter>
  );
}
