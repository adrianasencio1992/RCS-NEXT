import Layout from "../components/layout";
import SCFooter from "../components/footer";
import SCFabricantes from "./fabricantes.styled";
import Link from "next/link";
import SCWatsap from "../components/watsap";

export default function Fabricantes() {
  return (
    <SCFabricantes>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1
          className="h1-obra-nueva"
          data-aos="flip-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
          Fabricantes
        </h1>
        <p
          className="p-obra-nueva"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          data-aos-once={true}
        >
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
              id="nav-mueblesbano-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-mueblesbano"
              type="button"
              role="tab"
              aria-controls="nav-mueblesbano"
              aria-selected="false"
            >
              MUEBLES DE BAÑO
            </button>

            <button
              class="nav-link"
              id="nav-cocina-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-cocina"
              type="button"
              role="tab"
              aria-controls="nav-cocina"
              aria-selected="false"
            >
              MUEBLES DE COCINA
            </button>
            <button
              class="nav-link"
              id="nav-fregadero-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-fregadero"
              type="button"
              role="tab"
              aria-controls="nav-fregadero"
              aria-selected="false"
            >
              FREGADEROS
            </button>
            <button
              class="nav-link"
              id="nav-marmol-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-marmol"
              type="button"
              role="tab"
              aria-controls="nav-marmol"
              aria-selected="false"
            >
              MÁRMOLES
            </button>
            <button
              class="nav-link"
              id="nav-electrodomesticos-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-electrodomesticos"
              type="button"
              role="tab"
              aria-controls="nav-electrodomesticos"
              aria-selected="false"
            >
              ELECTRODOMÉSTICOS
            </button>
            <button
              class="nav-link"
              id="nav-electricidad-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-electricidad"
              type="button"
              role="tab"
              aria-controls="nav-electricidad"
              aria-selected="false"
            >
              ELECTRICIDAD
            </button>
            <button
              class="nav-link"
              id="nav-aire-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-aire"
              type="button"
              role="tab"
              aria-controls="nav-aire"
              aria-selected="false"
            >
              AIRE ACONDICIONADO
            </button>

            <button
              class="nav-link"
              id="nav-calefaccion-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-calefaccion"
              type="button"
              role="tab"
              aria-controls="nav-calefaccion"
              aria-selected="false"
            >
              CALEFACCIÓN
            </button>
            <button
              class="nav-link"
              id="nav-parquet-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-parquet"
              type="button"
              role="tab"
              aria-controls="nav-parquet"
              aria-selected="false"
            >
              PARQUET
            </button>
            <button
              class="nav-link"
              id="nav-puertas-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-puertas"
              type="button"
              role="tab"
              aria-controls="nav-puertas"
              aria-selected="false"
            >
              PUERTAS
            </button>
            <button
              class="nav-link"
              id="nav-ceramica-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-ceramica"
              type="button"
              role="tab"
              aria-controls="nav-ceramica"
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
            <Link href="https://uraldi.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/uraldii.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es/marcas-de-la-casa/sensea">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/sensea.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.roca.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/roca.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://grupoacb.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/acb.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.manillons.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/mt.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gamma.es/es/?">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gamma.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://ferrolan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ferrolan.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bricomart.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bricomart.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/leroy.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://fiorabath.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/fiora.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.kyrya.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/kyrya.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.acquabella.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/aquabell.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gmelorente.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gme.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://glassinox.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/glass.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.alexban.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/alexbn.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://bylassen.dk">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/Captura-1.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.mamparasvelvet.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/vee.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://tresgriferia.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/Captura.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.grohe.es/es_es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gr.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.hansa.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/hansa.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.griferiasgalindo.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/galindo.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.teka.com/es-es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/teka.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.royogroup.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/royogrup.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.visobath.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/viso.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bayro.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/b.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.doca.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/doca.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.cosentino.com/es/dekton/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/dekton.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.krion.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/krion.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gama-decor.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gama.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.santos.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/santos.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.dica.es/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/dica.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://obcocinas.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ob.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.cincocina.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/cin.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.atron-europa.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/atron.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.franke.com/es/es.html">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/fr.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.schock.de/int_en">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ss.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="http://pyramisgroup.com/en-GB/welcome/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/p.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.cata.es/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/cata.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.frecan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/frecan.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.blanco.com/es-es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/blanco.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://bc3.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bc.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.silestone.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/silest.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.neolith.com/aplicaciones/cocinas/encimeras-de-cocina/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/neo.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.neff-home.com/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/neff.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.lg.com/es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/lg.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://pando.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/pando.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.zanussi.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/zanussi.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.aeg.com.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/aeg.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.amica-group.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/amica.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.whirlpool.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/whirpo.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.siemens-home.bsh-group.com/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/siemens.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.balay.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/balay.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bosch-home.es/electrodomesticos">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bosh.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://home.liebherr.com/es/esp/inicio/paginainicio.html">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/lieber.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.miele.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/miele.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.simonelectric.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/simon.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.se.com/es/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/sch.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bjc.es/es/series/bjc-iris">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bj.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://faro.es/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/far.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.lamp.es/es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/la.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.efapel.pt/es/productos">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/efapel.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://nexia.es/nexia-home/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/nexia.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://alverlamp.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/alver.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.fujitsu.com/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/f.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.baxi.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/baxx.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://es.mitsubishielectric.com/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/mit.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.daikin.es/es_es/customers.html">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/dai.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.aircon.panasonic.eu/ES_es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/panasonic.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.irsap.com/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/irsap.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.zehnder.es/studio-collection?utm_source=runtal-es&utm_medium=link&utm_term=redirect&show_redirect_info=1">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/run.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.junkers.es/es/es/inicio/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/jun.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.saunierduval.es/para-el-usuario/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/sa.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.berettaheating.com/spain/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ber.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.aunadistribucion.com/cabel">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/cabel.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.ferroli.com/es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ferroli.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.chaffoteaux.es/es-es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/chaffot.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="http://goldlaminate.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gold.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.finsa.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/fin.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.quick-step.com.es/es-es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/q.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://arkomex.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/arko.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.balterio.com/es-es/laminado">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/balterio.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.cosentino.com/es/sensa/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/sensa.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://perciber.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/perciber.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://puertasnovolac.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/novolac.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.aparici.com/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/aparici.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.tauceramica.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/t.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.keraben.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/k.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.metropol-ceramica.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/met.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="http://cerpa.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/cer.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://apavisa.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/apavisa.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://keros.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/keros.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.marazzi.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/marazi.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.vivesceramica.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/vives.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.colorker.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/color.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.argentaceramica.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/argent.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://cifreceramica.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/cifre.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.azuvi.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/azuvi.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/*accesorios de baño*/}
          <div
            class="tab-pane fade"
            id="nav-banos"
            role="tabpanel"
            aria-labelledby="nav-banos-tab"
          >
            <Link href="https://uraldi.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/uraldii.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es/marcas-de-la-casa/sensea">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/sensea.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.roca.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/roca.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.manillons.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/mt.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gamma.es/es/?">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gamma.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://ferrolan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ferrolan.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bricomart.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bricomart.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/leroy.jpg"
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
                <img
                  className="imagen"
                  src="/marcas/fiora.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.kyrya.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/kyrya.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.acquabella.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/aquabell.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gmelorente.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gme.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es/marcas-de-la-casa/sensea">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/sensea.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.roca.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/roca.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gamma.es/es/?">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gamma.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://ferrolan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ferrolan.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bricomart.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bricomart.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/leroy.jpg"
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
                <img
                  className="imagen"
                  src="/marcas/glass.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.alexban.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/alexbn.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://bylassen.dk">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/Captura-1.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.mamparasvelvet.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/vee.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gmelorente.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gme.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es/marcas-de-la-casa/sensea">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/sensea.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gamma.es/es/?">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gamma.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://ferrolan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ferrolan.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bricomart.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bricomart.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/leroy.jpg"
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
            <Link href="https://www.roca.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/roca.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es/marcas-de-la-casa/sensea">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/sensea.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://tresgriferia.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/Captura.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.grohe.es/es_es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gr.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.hansa.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/hansa.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.griferiasgalindo.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/galindo.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.teka.com/es-es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/teka.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gamma.es/es/?">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gamma.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://ferrolan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ferrolan.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bricomart.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bricomart.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/leroy.jpg"
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
                <img
                  className="imagen"
                  src="/marcas/Captura.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.teka.com/es-es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/teka.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.roca.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/roca.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es/marcas-de-la-casa/sensea">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/sensea.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.grohe.es/es_es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gr.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.hansa.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/hansa.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.griferiasgalindo.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/galindo.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gamma.es/es/?">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gamma.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://ferrolan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ferrolan.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bricomart.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bricomart.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/leroy.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/*Mueblesbano*/}
          <div
            class="tab-pane fade"
            id="nav-mueblesbano"
            role="tabpanel"
            aria-labelledby="nav-mueblesbano-tab"
          >
            <Link href="https://www.kyrya.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/kyrya.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://fiorabath.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/fiora.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.royogroup.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/royogrup.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.visobath.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/viso.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bayro.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/b.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.doca.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/doca.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.cosentino.com/es/dekton/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/dekton.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gamma.es/es/?">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gamma.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://ferrolan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ferrolan.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bricomart.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bricomart.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/leroy.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/*Muebles cocina*/}
          <div
            class="tab-pane fade"
            id="nav-cocina"
            role="tabpanel"
            aria-labelledby="nav-cocina-tab"
          >
            <Link href="https://www.doca.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/doca.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.krion.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/krion.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://grupoacb.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/acb.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gama-decor.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gama.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.santos.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/santos.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.dica.es/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/dica.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://obcocinas.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ob.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.cincocina.com">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/cin.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gamma.es/es/?">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gamma.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://ferrolan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ferrolan.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bricomart.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bricomart.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/leroy.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/*Fregaderos*/}
          <div
            class="tab-pane fade"
            id="nav-fregadero"
            role="tabpanel"
            aria-labelledby="nav-fregadero-tab"
          >
            <Link href="https://www.atron-europa.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/atron.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.franke.com/es/es.html">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/fr.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.schock.de/int_en">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ss.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="http://pyramisgroup.com/en-GB/welcome/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/p.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.roca.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/roca.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.cata.es/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/cata.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.frecan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/frecan.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.teka.com/es-es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/teka.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.blanco.com/es-es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/blanco.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gamma.es/es/?">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gamma.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://ferrolan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ferrolan.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bricomart.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bricomart.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/leroy.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/*MARMOLES*/}
          <div
            class="tab-pane fade"
            id="nav-marmol"
            role="tabpanel"
            aria-labelledby="nav-marmol-tab"
          >
            <Link href="https://bc3.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bc.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.cosentino.com/es/dekton/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/dekton.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.silestone.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/silest.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.neolith.com/aplicaciones/cocinas/encimeras-de-cocina/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/neo.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/*ELECTRODOMESTICOS*/}
          <div
            class="tab-pane fade"
            id="nav-electrodomesticos"
            role="tabpanel"
            aria-labelledby="nav-electrodomesticos-tab"
          >
            <Link href="https://www.neff-home.com/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/neff.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.lg.com/es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/lg.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.cata.es/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/cata.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.frecan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/frecan.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://pando.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/pando.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.zanussi.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/zanussi.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.aeg.com.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/aeg.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.amica-group.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/amica.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.whirlpool.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/whirpo.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.teka.com/es-es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/teka.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.siemens-home.bsh-group.com/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/siemens.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.balay.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/balay.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bosch-home.es/electrodomesticos">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bosh.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://home.liebherr.com/es/esp/inicio/paginainicio.html">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/lieber.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.miele.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/miele.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/*ELECTRICIDAD*/}
          <div
            class="tab-pane fade"
            id="nav-electricidad"
            role="tabpanel"
            aria-labelledby="nav-electricidad-tab"
          >
            <Link href="https://www.simonelectric.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/simon.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.se.com/es/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/sch.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bjc.es/es/series/bjc-iris">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bj.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.frecan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/frecan.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://faro.es/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/far.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.lamp.es/es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/la.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.efapel.pt/es/productos">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/efapel.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://nexia.es/nexia-home/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/nexia.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://alverlamp.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/alver.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gamma.es/es/?">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gamma.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://ferrolan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ferrolan.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bricomart.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bricomart.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/leroy.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/*AIRE ACONDICIONADO*/}
          <div
            class="tab-pane fade"
            id="nav-aire"
            role="tabpanel"
            aria-labelledby="nav-aire-tab"
          >
            <Link href="https://www.fujitsu.com/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/f.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.baxi.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/baxx.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://es.mitsubishielectric.com/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/mit.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.daikin.es/es_es/customers.html">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/dai.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.aircon.panasonic.eu/ES_es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/panasonic.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.lg.com/es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/lg.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.efapel.pt/es/productos">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/efapel.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://nexia.es/nexia-home/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/nexia.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://alverlamp.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/alver.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/*CALEFACCION*/}
          <div
            class="tab-pane fade"
            id="nav-calefaccion"
            role="tabpanel"
            aria-labelledby="nav-calefaccion-tab"
          >
            <Link href="https://www.irsap.com/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/irsap.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.baxi.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/baxx.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.zehnder.es/studio-collection?utm_source=runtal-es&utm_medium=link&utm_term=redirect&show_redirect_info=1">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/run.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.junkers.es/es/es/inicio/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/jun.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.saunierduval.es/para-el-usuario/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/sa.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.berettaheating.com/spain/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ber.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.aunadistribucion.com/cabel">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/cabel.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.ferroli.com/es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ferroli.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.chaffoteaux.es/es-es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/chaffot.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/*PARQUET*/}
          <div
            class="tab-pane fade"
            id="nav-parquet"
            role="tabpanel"
            aria-labelledby="nav-parquet-tab"
          >
            <Link href="http://goldlaminate.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gold.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.finsa.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/fin.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.quick-step.com.es/es-es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/q.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://arkomex.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/arko.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.balterio.com/es-es/laminado">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/balterio.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.cosentino.com/es/sensa/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/sensa.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gamma.es/es/?">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gamma.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://ferrolan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ferrolan.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bricomart.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bricomart.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/leroy.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/*PUERTAS*/}
          <div
            class="tab-pane fade"
            id="nav-puertas"
            role="tabpanel"
            aria-labelledby="nav-puertas-tab"
          >
            <Link href="https://perciber.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/perciber.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://puertasnovolac.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/novolac.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.gamma.es/es/?">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/gamma.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://ferrolan.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/ferrolan.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.bricomart.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/bricomart.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.leroymerlin.es">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/leroy.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>

          {/*CERAMICA*/}
          <div
            class="tab-pane fade"
            id="nav-ceramica"
            role="tabpanel"
            aria-labelledby="nav-ceramica-tab"
          >
            <Link href="https://www.aparici.com/es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/aparici.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.tauceramica.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/t.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.keraben.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/k.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.metropol-ceramica.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/met.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="http://cerpa.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/cer.png"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://apavisa.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/apavisa.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://keros.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/keros.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.marazzi.es/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/marazi.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.vivesceramica.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/vives.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.colorker.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/color.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.argentaceramica.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/argent.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://cifreceramica.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/cifre.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>

            <Link href="https://www.azuvi.com/">
              <a className="espaciado" target="_blank">
                <img
                  className="imagen"
                  src="/marcas/azuvi.jpg"
                  width="150"
                  height="100"
                />
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-obra-formulario2">
        <h2 className="h2-formulario">NUESTROS FABRICANTES</h2>
        <hr className="hr-formulario"></hr>
      </section>
      <section className="section-obra-formulario">
        <div className="div-general-obra">
          <div className="div-general-cartas">
            <div className="div-primera-carta">
              <img className="imagen-carta" src="/logo-calidad.png"></img>
              <div className="div-primera-subcarta">
                <p className="p2-obra">CALIDAD</p>
                <p className="p3-obra">
                  Elegimos nuestros fabricantes priorizando la calidad de sus
                  materiales. De este modo ofrecemos unos resultados de primera
                  y a la altura de las expectativas de cada cliente.
                </p>
              </div>
            </div>
            <div className="div-primera-carta2">
              <div className="div-primera-subcarta2">
                <p className="p2-obra">PRECIO</p>
                <p className="p3-obra2">
                  Te ofrecemos una gran variedad de fabricantes entre los que
                  elegir los materiales para tu obra o reforma con un amplio
                  abanico de precios que se adapten a tu bolsillo.
                </p>
              </div>
              <img className="imagen-carta" src="/logo-precio.png"></img>
            </div>
            <div className="div-primera-carta">
              <img className="imagen-carta" src="/logo-ladrillos.png"></img>
              <div className="div-primera-subcarta">
                <p className="p2-obra">NUESTRA GAMMA</p>
                <p className="p3-obra">
                  Podras elegir entre una gran gamma de productos de distintos
                  fabricantes para crear el diseño que deseas en cada una de las
                  estancias de tu hogar.
                </p>
              </div>
            </div>
            <div className="div-primera-carta2">
              <div className="div-primera-subcarta2">
                <p className="p2-obra">FLEXIBILIDAD</p>
                <p className="p3-obra2">
                  Nos adaptamos a tus gustos y necesidades para crear tu nuevo
                  hogar. En caso de que desees productos de fabricantes
                  concretos, nos encargaremos de conseguirlos para ti.
                </p>
              </div>
              <img
                className="imagen-carta"
                src="/logo-flexibilidadmental.png"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <SCWatsap></SCWatsap>
      <SCFooter></SCFooter>
    </SCFabricantes>
  );
}
