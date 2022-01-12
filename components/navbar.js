import SCNavBar from "./navbar.styled";
import Link from "next/link";

export default function NavBar() {
  return (
    <SCNavBar>
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
                    <Link href="/reformas-casas">
                      <a class="dropdown-item">REFORMAS DE CASAS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reformas-pisos">
                      <a class="dropdown-item">REFORMAS DE PISOS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reformas-cocinas">
                      <a class="dropdown-item">REFORMAS DE COCINAS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reformas-banos">
                      <a class="dropdown-item">REFORMAS DE BAÑOS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reformas-fontaneria">
                      <a class="dropdown-item">FONTANERÍA Y LAMPISTERÍA</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reformas-parquet">
                      <a class="dropdown-item">
                        INSTALACIÓN DE PARQUET Y PUERTAS
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reformas-aluminio">
                      <a class="dropdown-item">
                        INSTALACIÓN DE VENTANAS DE ALUMINIO
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reformas-pintura">
                      <a class="dropdown-item">PINTURA</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reformas-comunidad">
                      <a class="dropdown-item">COMUNIDAD DE VECINOS</a>
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <Link href="/reformas-solicita-presupuesto">
                      <a class="dropdown-item">CONTACTANOS</a>
                    </Link>
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
                    <Link href="/reformas-disena-presupuesto">
                      <a class="dropdown-item">NUESTROS PRECIOS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reformas-solicita-presupuesto">
                      <a class="dropdown-item">SOLICITA PRESUPUESTO ONLINE</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/financiacion">
                      <a class="dropdown-item">FINANCIACIÓN</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/materiales">
                      <a class="dropdown-item">ESCOJE TUS MATERIALES</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a class="dropdown-item">PROMOCIONES</a>
                    </Link>
                  </li> */}
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <Link href="/contacto">
                      <a class="dropdown-item">CONTACTANOS</a>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* <li class="nav-item dropdown">
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
                    <Link href="#">
                      <a class="dropdown-item">DISEÑA TU PROPIA COCINA</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a class="dropdown-item">DISEÑA TU PROPIO BAÑO</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a class="dropdown-item">SOLICITA TU DISEÑO 3D</a>
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <Link href="/contacto">
                      <a class="dropdown-item">CONTACTANOS</a>
                    </Link>
                  </li>
                </ul>
              </li> */}
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
                    <Link href="/quienes-somos">
                      <a class="dropdown-item">¿QUIÉNES SOMOS?</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/filosofia-empresa">
                      <a class="dropdown-item">FILOSOFÍA DE LA EMPRESA</a>
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <Link href="/fabricantes">
                      <a class="dropdown-item">NUESTROS FABRICANTES</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#">
                      <a class="dropdown-item">PREGUNTAS FRECUENTES</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a class="dropdown-item">
                        ¿QUIERES TRABAJAR CON NOSOTROS?
                      </a>
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li class="nav-item">
                <Link href="/contacto">
                  <a class="nav-link text-white margin">CONTACTO</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </SCNavBar>
  );
}
