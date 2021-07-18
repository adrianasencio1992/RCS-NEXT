import React from "react";
import Layout from "../../../components/layout";
import SCFooter from "../../../components/footer";
import SCTiradorPuertas from "./tirador-puertas.styled";
import Link from "next/link";

export default function TiradorPuertas() {
  return (
    <SCTiradorPuertas>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Puertas con Tirador</h1>
        <p className="p-obra-nueva">Nuestra gamma de productos</p>
      </div>
      <section className="section">
        <div className="div-links">
          <Link href="/materiales">
            <a className="link">Materiales</a>
          </Link>
          <span className="span"> ˃ </span>
          <Link href="/muebles-de-cocina/muebles-cocina">
            <a className="link2">Muebles cocina</a>
          </Link>
          <span className="span"> ˃ </span>
          <Link href="/muebles-de-cocina/puertas/puertas-cocina">
            <a className="link2">Puertas cocina</a>
          </Link>
          <span className="span"> ˃ </span>
          <Link href="#">
            <a className="link2">Puertas con tirador</a>
          </Link>
        </div>

        {/*MADERA*/}
        <div className="div-nombre">
          <h3 className="h3-formulario">MADERA</h3>
          <hr className="hr-formulario"></hr>
          <p className="p-formulario">
            Las puertas de siempre y ultimas tendencias con madera 100%
          </p>
        </div>

        <div class="demo1">
          <ul class="galeria">
            <li>
              <a href="#img1">
                <img src="/tirador/tirador1.jpg" />
              </a>
              <p className="p-imagen">BERLIN MIG PUNT</p>
            </li>
            <li>
              <a href="#img2">
                <img src="/tirador/tirador2.jpg" />
              </a>
              <p className="p-imagen">FLORÈNCIA M-10 Maple</p>
            </li>
            <li>
              <a href="#img3">
                <img src="/tirador/tirador3.jpg" />
              </a>
              <p className="p-imagen">HUESCA PLAFÓ LLIS</p>
            </li>
            <li>
              <a href="#img4">
                <img src="/tirador/tirador4.jpg" />
              </a>
              <p className="p-imagen">HUESCA Roure decapé</p>
            </li>
            <li>
              <a href="#img5">
                <img src="/tirador/tirador5.jpg" />
              </a>
              <p className="p-imagen">JAEN Alder</p>
            </li>
            <li>
              <a href="#img6">
                <img src="/tirador/tirador6.jpg" />
              </a>
              <p className="p-imagen">LEVANTINA M-6 Faig</p>
            </li>
            <li>
              <a href="#img7">
                <img src="/tirador/tirador7.jpg" />
              </a>
              <p className="p-imagen">LEVANTINA M-8 Maple</p>
            </li>
            <li>
              <a href="#img8">
                <img src="/tirador/tirador8.jpg" />
              </a>
              <p className="p-imagen">MILAN LLIS AMB TACS Roure</p>
            </li>
            <li>
              <a href="#img9">
                <img src="/tirador/tirador9.jpg" />
              </a>
              <p className="p-imagen">MURCIA Roure decapé</p>
            </li>
            <li>
              <a href="#img10">
                <img src="/tirador/niger.jpg" />
              </a>
              <p className="p-imagen">NÍGER Roure precompost</p>
            </li>
            <li>
              <a href="#img11">
                <img src="/tirador/paloma.jpg" />
              </a>
              <p className="p-imagen">PALOMA Alder</p>
            </li>
            <li>
              <a href="#img12">
                <img src="/tirador/provençal.jpg" />
              </a>
              <p className="p-imagen">PROVENÇAL PLAFÓ REXAPAT Roure</p>
            </li>
            <li>
              <a href="#img13">
                <img src="/tirador/provençal-roure.jpg" />
              </a>
              <p className="p-imagen">PROVENÇAL PLAFÓ MASSÍS Roure</p>
            </li>
            <li>
              <a href="#img14">
                <img src="/tirador/softy-cirerer.jpg" />
              </a>
              <p className="p-imagen">SOFTY Cirerer</p>
            </li>
            <li>
              <a href="#img15">
                <img src="/tirador/venecia.jpg" />
              </a>
              <p className="p-imagen">VENÈCIA C.J. Roure</p>
            </li>
          </ul>

          <figure id="img1" class="lbox bounce">
            <span>
              <a href="#img15" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/tirador1.jpg" />
            <span id="right">
              <a href="#img2" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>BERLIN MIG PUNT</h2>
          </figure>

          <figure id="img2" class="lbox bounce">
            <span>
              <a href="#img1" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/tirador2.jpg" />
            <span id="right">
              <a href="#img3" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>FLORÈNCIA M-10 Maple</h2>
          </figure>

          <figure id="img3" class="lbox bounce">
            <span>
              <a href="#img2" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/tirador3.jpg" />
            <span id="right">
              <a href="#img4" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>HUESCA PLAFÓ LLIS</h2>
          </figure>

          <figure id="img4" class="lbox bounce">
            <span>
              <a href="#img3" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/tirador4.jpg" />
            <span id="right">
              <a href="#img5" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>HUESCA Roure decapé</h2>
          </figure>

          <figure id="img5" class="lbox bounce">
            <span>
              <a href="#img4" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/tirador5.jpg" />
            <span id="right">
              <a href="#img6" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>JAEN Alder</h2>
          </figure>

          <figure id="img6" class="lbox bounce">
            <span>
              <a href="#img5" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/tirador6.jpg" />
            <span id="right">
              <a href="#img7" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>LEVANTINA M-6 Faig</h2>
          </figure>

          <figure id="img7" class="lbox bounce">
            <span>
              <a href="#img6" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/tirador7.jpg" />
            <span id="right">
              <a href="#img8" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>LEVANTINA M-8 Maple</h2>
          </figure>

          <figure id="img8" class="lbox bounce">
            <span>
              <a href="#img7" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img title="Cachorrito 8" src="/tirador/tirador8.jpg" />
            <span id="right">
              <a href="#img9" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>MILAN LLIS AMB TACS Roure</h2>
          </figure>

          <figure id="img9" class="lbox bounce">
            <span>
              <a href="#img8" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/tirador9.jpg" />
            <span id="right">
              <a href="#img10" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>MURCIA Roure decapé</h2>
          </figure>

          <figure id="img10" class="lbox bounce">
            <span>
              <a href="#img9" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/niger.jpg" />
            <span id="right">
              <a href="#img11" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>NÍGER Roure precompost</h2>
          </figure>

          <figure id="img11" class="lbox bounce">
            <span>
              <a href="#img10" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/paloma.jpg" />
            <span id="right">
              <a href="#img12" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>PALOMA Alder</h2>
          </figure>

          <figure id="img12" class="lbox bounce">
            <span>
              <a href="#img11" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/provençal.jpg" />
            <span id="right">
              <a href="#img13" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>PROVENÇAL PLAFÓ REXAPAT Roure</h2>
          </figure>

          <figure id="img13" class="lbox bounce">
            <span>
              <a href="#img12" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/provençal-roure.jpg" />
            <span id="right">
              <a href="#img14" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>PROVENÇAL PLAFÓ MASSÍS Roure</h2>
          </figure>

          <figure id="img14" class="lbox bounce">
            <span>
              <a href="#img13" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/softy-cirerer.jpg" />
            <span id="right">
              <a href="#img15" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>SOFTY Cirerer</h2>
          </figure>

          <figure id="img15" class="lbox bounce">
            <span>
              <a href="#img14" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/venecia.jpg" />
            <span id="right">
              <a href="#img1" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>VENÈCIA C.J. Roure</h2>
          </figure>

          <div id="img15" class="lbox bounce">
            <span>
              <a href="#img14" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <span id="right">
              <a href="#img1" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>{" "}
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </div>
        </div>

        <link
          href="https://fonts.googleapis.com/css?family=Raleway:200,100,400"
          rel="stylesheet"
          type="text/css"
        />

        <script
          src="https://kit.fontawesome.com/a4c4c8e4e2.js"
          crossorigin="anonymous"
        ></script>

        <link
          href="https://fonts.googleapis.com/css?family=Great+Vibes"
          rel="stylesheet"
        />
      </section>

      {/*LACADAS*/}
      <section className="section2">
        <div className="div-nombre">
          <h3 className="h3-formulario">LACADAS</h3>
          <hr className="hr-formulario"></hr>
          <p className="p-formulario">
            Diseños clásicos y actuales lacadas con la mejor calidad.
          </p>
        </div>

        <div class="demo1">
          <ul class="galeria2">
            <li>
              <a href="#iimg1">
                <img className="img-lacadas" src="/tirador/lacada1.jpg" />
              </a>
              <p className="p-imagen">VILLANOVA 22 mm Blanco mate</p>
            </li>
            <li>
              <a href="#iimg2">
                <img className="img-lacadas" src="/tirador/lacada2.jpg" />
              </a>
              <p className="p-imagen">XATIVA 22 mm Beige mate</p>
            </li>
            <li>
              <a href="#iimg3">
                <img className="img-lacadas" src="/tirador/lacada3.jpg" />
              </a>
              <p className="p-imagen">MOD. 311 Granate mate</p>
            </li>
            <li>
              <a href="#iimg4">
                <img className="img-lacadas" src="/tirador/lacada4.jpg" />
              </a>
              <p className="p-imagen">MOD. 403 Arena mate</p>
            </li>
            <li>
              <a href="#iimg5">
                <img className="img-lacadas" src="/tirador/lacada5.jpg" />
              </a>
              <p className="p-imagen">MOD. 300 Nigú satinado</p>
            </li>
            <li>
              <a href="#iimg6">
                <img className="img-lacadas" src="/tirador/lacada6.gif" />
              </a>
              <p className="p-imagen">MOD. 101 Beige brillo</p>
            </li>
          </ul>

          <figure id="iimg1" class="lbox bounce">
            <span>
              <a href="#iimg6" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/lacada1.jpg" />
            <span id="right">
              <a href="#iimg2" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>VILLANOVA 22 mm Blanco mate</h2>
          </figure>

          <figure id="iimg2" class="lbox bounce">
            <span>
              <a href="#iimg1" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/lacada2.jpg" />
            <span id="right">
              <a href="#iimg3" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>XATIVA 22 mm Beige mate</h2>
          </figure>

          <figure id="iimg3" class="lbox bounce">
            <span>
              <a href="#iimg2" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/lacada3.jpg" />
            <span id="right">
              <a href="#iimg4" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>MOD. 311 Granate mate</h2>
          </figure>

          <figure id="iimg4" class="lbox bounce">
            <span>
              <a href="#iimg3" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/lacada4.jpg" />
            <span id="right">
              <a href="#iimg5" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>MOD. 403 Arena mate</h2>
          </figure>

          <figure id="iimg5" class="lbox bounce">
            <span>
              <a href="#iimg4" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/lacada5.jpg" />
            <span id="right">
              <a href="#iimg6" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>MOD. 300 Nigú satinado</h2>
          </figure>

          <figure id="iimg6" class="lbox bounce">
            <span>
              <a href="#iimg5" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador/lacada6.gif" />
            <span id="right">
              <a href="#iimg1" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>MOD. 101 Beige brillo</h2>
          </figure>

          <div id="iimg6" class="lbox bounce">
            <span>
              <a href="#iimg5" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <span id="right">
              <a href="#iimg1" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>{" "}
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </div>
        </div>
      </section>

      <SCFooter></SCFooter>
    </SCTiradorPuertas>
  );
}
