import Head from "next/head";
import SCNavBar from "./navbar.styled";

export default function NavBar() {
  return (
    <SCNavBar>
      <div className="cuadrado"></div>
      <div className="triangulo"></div>
      <div className="navegador">
        <ul className="nav nav-pills">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              data-hover="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              NUESTROS SERVICIOS
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  OBRA NUEVA
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/reformas-casas/reformas-casas"
                >
                  REFORMAS DE CASAS
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/reformas-pisos/reformas-pisos"
                >
                  REFORMAS DE PISOS
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  REFORMAS DE COCINAS
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  REFORMAS DE BAÑOS
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  INSTALACIÓN DE PARQUET Y PUERTAS
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  INSTALACIÓN DE VENTANAS DE ALUMINIO
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  PINTURA
                </a>
              </li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  DISEÑA TU PROPIO PRESUPUESTO
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              PRESUPUESTOS
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  DISEÑA TU PROPIO PRESUPUESTO
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  SOLICITA PRESUPUESTO ONLINE
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  FINANCIACIÓN
                </a>
              </li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  CONTACTANOS
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              PRECIOS
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  PRECIO ORIENTATIVO<br></br>REFORMA/OBRA
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  ESCOJE TUS MATERIALES
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  PROMOCIONES
                </a>
              </li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  FINANCIACIÓN
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              DISEÑA TU HOGAR
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  DISEÑA TU PROPIA COCINA
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  DISEÑA TU PROPIO BAÑO
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  SOLICITA TU DISEÑO 3D
                </a>
              </li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  CONTACTANOS
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              SOBRE NOSOTROS
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  ¿QUIENES SOMOS?
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  NUESTROS FABRICANTES
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  PREGUNTAS FRECUENTES
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  ¿QUIERES TRABAJAR CON NOSOTROS?
                </a>
              </li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  FILOSOFÍA DE LA EMPRESA
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              CONTACTO
            </a>
          </li>
        </ul>
      </div>
    </SCNavBar>
  );
}
