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
              id="nav-griferia-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-griferia"
              type="button"
              role="tab"
              aria-controls="nav-griferia"
              aria-selected="false"
            >
              GRIFERÍA
            </button>
            <button
              class="nav-link"
              id="nav-sanitarios-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-sanitarios"
              type="button"
              role="tab"
              aria-controls="nav-sanitarios"
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
            <Link href="https://uraldi.com/">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/uraldii.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es/marcas-de-la-casa/sensea">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/sensea.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.roca.es/">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/roca.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.manillons.com">
              <a className="espaciado" target="_blank">
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
            <Link href="https://fiorabath.com">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/fiora.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.kyrya.es">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/kyrya.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.acquabella.com">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/aquabell.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es/marcas-de-la-casa/sensea">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/sensea.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gmelorente.com">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/gme.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.roca.es">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/roca.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/* Mamparas*/}
          <div
            class="tab-pane fade"
            id="nav-mampara"
            role="tabpanel"
            aria-labelledby="nav-mampara-tab"
          >
            <Link href="https://glassinox.com">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/glass.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.alexban.com/">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/alexbn.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://bylassen.dk">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/Captura-1.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gmelorente.com">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/gme.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.mamparasvelvet.com">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/vee.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es/marcas-de-la-casa/sensea">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/sensea.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/*Griferia*/}
          <div
            class="tab-pane fade"
            id="nav-griferia"
            role="tabpanel"
            aria-labelledby="nav-griferia-tab"
          >
            <Link href="https://tresgriferia.com">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/Captura.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.roca.es/">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/roca.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es/marcas-de-la-casa/sensea">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/sensea.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.grohe.es/es_es/">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/gr.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.hansa.com">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/hansa.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.griferiasgalindo.com">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/galindo.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.teka.com/es-es/">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/teka.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/*Sanitarios*/}
          <div
            class="tab-pane fade"
            id="nav-sanitarios"
            role="tabpanel"
            aria-labelledby="nav-sanitarios-tab"
          >
            <Link href="https://tresgriferia.com">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/Captura.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.teka.com/es-es/">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/teka.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.roca.es/">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/roca.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es/marcas-de-la-casa/sensea">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/sensea.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.grohe.es/es_es/">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/gr.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.hansa.com">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/hansa.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.griferiasgalindo.com">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/galindo.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.griferiasgalindo.com">
              <a className="espaciado" target="_blank">
                <Image
                  className="imagen"
                  src="/marcas/galindo.jpg"
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
