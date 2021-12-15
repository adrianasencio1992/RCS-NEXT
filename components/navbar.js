import SCNavBar from "./navbar.styled";
import Link from "next/link";

export default function NavBar() {
  return (
    <SCNavBar>
      <div className="cuadrado"></div>
      <div className="triangulo"></div>

      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  NUESTROS SERVICIOS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link href="/obra-nueva">
                      <a class="dropdown-item">OBRA NUEVA</a>
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/reformas-casas">
                      REFORMAS DE CASAS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/reformas-pisos">
                      REFORMAS DE PISOS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/reformas-cocinas">
                      REFORMAS DE COCINAS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/reformas-banos">
                      REFORMAS DE BAÑOS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/reformas-fontaneria">
                      FONTANERÍA Y LAMPISTERÍA
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/reformas-parquet">
                      INSTALACIÓN DE PARQUET Y PUERTAS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/reformas-aluminio">
                      INSTALACIÓN DE VENTANAS DE ALUMINIO
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/reformas-pintura">
                      PINTURA
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/reformas-comunidad">
                      COMUNIDAD DE VECINOS
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="/reformas-disena-presupuesto"
                    >
                      DISEÑA TU PROPIO PRESUPUESTO
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PRESUPUESTOS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      class="dropdown-item"
                      href="/reformas-disena-presupuesto"
                    >
                      DISEÑA TU PROPIO PRESUPUESTO
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="/reformas-solicita-presupuesto"
                    >
                      SOLICITA PRESUPUESTO ONLINE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/financiacion">
                      FINANCIACIÓN
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/contacto">
                      CONTACTANOS
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PRECIOS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      class="dropdown-item"
                      href="/reformas-disena-presupuesto"
                    >
                      PRECIO ORIENTATIVO<br></br>REFORMA/OBRA
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/materiales">
                      ESCOJE TUS MATERIALES
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      PROMOCIONES
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/financiacion">
                      FINANCIACIÓN
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  DISEÑA TU HOGAR
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      DISEÑA TU PROPIA COCINA
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      DISEÑA TU PROPIO BAÑO
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      SOLICITA TU DISEÑO 3D
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      CONTACTANOS
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SOBRE NOSOTROS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/quienes-somos">
                      ¿QUIÉNES SOMOS?
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      NUESTROS FABRICANTES
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      PREGUNTAS FRECUENTES
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      ¿QUIERES TRABAJAR CON NOSOTROS?
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      FILOSOFÍA DE LA EMPRESA
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white margin" href="/contacto">
                  CONTACTO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </SCNavBar>
  );
}
