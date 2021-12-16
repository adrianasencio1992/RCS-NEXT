import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCFabricantes from "./fabricantes.styled";
import Image from "next/image";
import Link from "next/dist/client/link";

export default function Fabricantes() {
  return (
    <SCFabricantes>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Nuestros Fabricantes</h1>
        <p className="p-obra-nueva">
          ¡Te presentamos las marcas con las que trabajamos!
        </p>
      </div>
      <section className="section-fabricantes">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              TODOS
            </button>
            <button
              class="nav-link"
              id="nav-banos-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-banos"
              type="button"
              role="tab"
              aria-controls="nav-banos"
              aria-selected="false"
            >
              ACCESORIOS BAÑOS
            </button>
            <button
              class="nav-link"
              id="nav-ducha-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-ducha"
              type="button"
              role="tab"
              aria-controls="nav-ducha"
              aria-selected="false"
            >
              DUCHAS Y BAÑERAS
            </button>
            <button
              class="nav-link"
              id="nav-mampara-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-mampara"
              type="button"
              role="tab"
              aria-controls="nav-mampara"
              aria-selected="false"
            >
              MAMPARAS
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              GRIFERÍA
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              SANITARIOS
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              MUEBLES DE BAÑO
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              ACCESORIOS DE BAÑO
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              MUEBLES DE COCINA
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              FREGADEROS
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              MÁRMOLES
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              ELECTRODOMÉSTICOS
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              AIRE ACONDICIONADO
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              CALEFACCIÓN
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              PARQUET
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              PUERTAS
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              CERÁMICA
            </button>
          </div>
        </nav>

        {/* Contenido*/}

        <div class="tab-content" id="nav-tabContent">
          {/* TODOS*/}
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            1
          </div>

          {/* Contenido accesorios de baño*/}
          <div
            class="tab-pane fade"
            id="nav-banos"
            role="tabpanel"
            aria-labelledby="nav-banos-tab"
          >
            <Link href="https://www.google.es">
              <a className="espaciado">
                <Image
                  className="imagen"
                  src="/marcas/uraldii.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.google.es">
              <a className="espaciado">
                <Image
                  className="imagen"
                  src="/marcas/roca.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.google.es">
              <a className="espaciado">
                <Image
                  className="imagen"
                  src="/marcas/mt.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/* Contenido duchas y bañeras*/}
          <div
            class="tab-pane fade"
            id="nav-ducha"
            role="tabpanel"
            aria-labelledby="nav-ducha-tab"
          >
            <Link href="https://www.google.es">
              <a className="espaciado">
                <Image
                  className="imagen"
                  src="/marcas/roca.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.google.es">
              <a className="espaciado">
                <Image
                  className="imagen"
                  src="/marcas/uraldii.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.google.es">
              <a className="espaciado">
                <Image
                  className="imagen"
                  src="/marcas/mt.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>
        </div>
      </section>

      <SCFooter></SCFooter>
    </SCFabricantes>
  );
}
