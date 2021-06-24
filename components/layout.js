import styles from "./layout.module.css";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>RCS | Reformas, Construcciones y Servicios</title>
        <link rel="icon" href="/logo-imagenes.png" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossorigin="anonymous"
        ></script>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossorigin="anonymous"
        ></link>
      </Head>
      <body className={styles.body}>
        <div className={styles.divPrincipalLayout}>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
            rel="stylesheet"
          ></link>
          <div className={styles.contendorDashboard}>
            <img
              className={styles.logoNavbar}
              src="../../../logo-inicio.png"
              alt="lapiz"
            />
            <div className={styles.contendorNombreYEslogan}>
              <div className={styles.nombreEmpresa}>
                <h1 className={styles.h1Navbar}>
                  Reformas, Construcciones y Servicios
                </h1>
              </div>
              <div className={styles.divEslogan}>
                <div className={styles.eslogan}>Tu lo imaginas</div>
                <div className={styles.eslogan}>
                  <span>, nosotros lo creamos</span>
                </div>
              </div>
            </div>
            <div className={styles.divUbicacionPrincipalDobles}>
              <div className={styles.divUbicacionPrincipal}>
                <div className={styles.divUbicacion}>
                  <img className={styles.ubicacion} src="/ubicacion1.png"></img>
                  <img
                    className={styles.ubicacion2}
                    src="/ubicacion3.png"
                  ></img>
                </div>
                <div className={styles.divInformacion}>
                  <h2 className={styles.h2Ubicacion}>RUBÍ</h2>
                  <h3 className={styles.h3Ubicacion}>
                    C/ Lope de Vega, 22 LOCAL
                  </h3>
                  <h3 className={styles.h3Ubicacion}>
                    ☏ 674686045 - 635126596
                  </h3>
                  <h3 className={styles.h3Ubicacion}>
                    ✉ rcs.reformas@hotmail.com
                  </h3>
                </div>
              </div>
              <div className={styles.divUbicacionPrincipal}>
                <div className={styles.divUbicacion}>
                  <img className={styles.ubicacion} src="/horario1.png"></img>
                  <img className={styles.ubicacion2} src="/horario.png"></img>
                </div>
                <div className={styles.divInformacion}>
                  <h2 className={styles.h2Ubicacion}>HORARIO</h2>
                  <h3 className={styles.h3Ubicacion}>
                    LOCAL: Bajo cita previa
                  </h3>
                  <h3 className={styles.h3Ubicacion}>ATENCIÓN TELEFÓNICA:</h3>
                  <h3 className={styles.h3Ubicacion}>
                    De lu a sb: de 8h a 20h
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navegador}>
          <ul class="nav nav-pills">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                REFORMAS
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    REFORMAS DE CASAS
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    REFORMAS DE PISOS
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    REFORMAS DE COCINAS
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    REFORMAS DE BAÑOS
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    REFORMAS DE PARQUET Y PUERTAS
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    REFORMAS DE VENTANAS DE ALUMINIO
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    PINTURA
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    HAZ TU PROPIO PRESUPUESTO
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                PRESUPUESTOS
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    DISEÑA TU PROPIO PRESUPUESTO
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    PRESUPUESTO ONLINE
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    FINANCIACIÓN
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
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                PRECIOS
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    PRECIOS ORIENTATIVOS REFORMA
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    PRECIO MATERIALES
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    FINANCIACIÓN
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                DISEÑA TU REFORMA
              </a>
              <ul class="dropdown-menu">
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
                    TE DISEÑAMOS NOSOTROS
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
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                SOBRE NOSOTROS
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    VENTAJAS
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
              <a class="nav-link" href="#">
                CONTACTO
              </a>
            </li>
          </ul>
        </div>
        {children}
      </body>
    </div>
  );
}
