import React from "react";
import SCNavbarMateriales from "./navbar-materiales.styled";

export default function NavbarMateriales() {
  return (
    <SCNavbarMateriales>
      <nav>
        <h2 className="h2-formulario-2">
          ELIJE AQUÍ<br></br>TUS MATERIALES
        </h2>
        <ul>
          <li>
            <a className="li">COCINAS</a>
            <ul className="sub-ul">
              <li>
                <Link href="/muebles-de-cocina/muebles-cocina">
                  <a>MUEBLES DE COCINA</a>
                </Link>
              </li>
              <li>
                <a href="#">ENCIMERAS</a>
              </li>
              <li>
                <a href="#">FREGADEROS</a>
              </li>
              <li>
                <a href="#">GRIFERÍA</a>
              </li>
              <li>
                <a href="#">ELECTRODOMÉSTICOS</a>
              </li>
              <li>
                <a href="#">TIRADORES</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="li">BAÑOS</a>
            <ul className="sub-ul1">
              <li>
                <a href="#">MUEBLES DE BAÑO</a>
              </li>
              <li>
                <a href="#">LAVABOS</a>
              </li>
              <li>
                <a href="#">PLATOS DE DUCHA</a>
              </li>
              <li>
                <a href="#">BAÑERAS</a>
              </li>
              <li>
                <a href="#">MAMPARAS</a>
              </li>
              <li>
                <a href="#">WC</a>
              </li>
              <li>
                <a href="#">BIDETS</a>
              </li>
              <li>
                <a href="#">GRIFERÍA</a>
              </li>
              <li>
                <a href="#">ESPEJOS</a>
              </li>
              <li>
                <a href="#">ACCESORIOS</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="li">CERÁMICAS</a>
            <ul className="sub-ul2">
              <li>
                <a href="#">AZULEJOS DE PAREDES</a>
              </li>
              <li>
                <a href="#">SUELOS DE INTERIOR</a>
              </li>
              <li>
                <a href="#">SUELOS DE EXTERIOR</a>
              </li>
              <li>
                <a href="#">SENEFAS</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="li">CLIMATIZACIÓN</a>
            <ul className="sub-ul3">
              <li>
                <a href="#">AIRES ACONDICIONADOS</a>
              </li>
              <li>
                <a href="#">CALDERAS</a>
              </li>
              <li>
                <a href="#">TERMOS ELECTRICOS</a>
              </li>
              <li>
                <a href="#">RADIADORES</a>
              </li>
              <li>
                <a href="#">CALENTADORES DE AGUA</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="li" href="#">
              PARQUETS
            </a>
          </li>
          <li>
            <a className="li" href="#">
              ILUMINACIÓN
            </a>
          </li>
          <li>
            <a className="li" href="#">
              TEJADOS
            </a>
          </li>
        </ul>
      </nav>
    </SCNavbarMateriales>
  );
}
