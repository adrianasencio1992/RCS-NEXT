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

      {/*POLILAMINADAS*/}
      <section className="section2">
        <div className="div-nombre">
          <h3 className="h3-formulario">POLILAMINADAS</h3>
          <hr className="hr-formulario"></hr>
          <p className="p-formulario">
            Puertas Polilaminadas de diseños innovadores
          </p>
        </div>

        <div class="demo1">
          <ul class="galeria2">
            <li>
              <a href="#img1-p">
                <img className="img-lacadas" src="/tirador/polilaminada1.gif" />
              </a>
              <p className="p-imagen">IBAÑETA Blanc brillant i seda</p>
            </li>
            <li>
              <a href="#img2-p">
                <img className="img-lacadas" src="/tirador/polilaminada2.gif" />
              </a>
              <p className="p-imagen">IBAÑETA Teka</p>
            </li>
            <li>
              <a href="#img3-p">
                <img className="img-lacadas" src="/tirador/polilaminada3.gif" />
              </a>
              <p className="p-imagen">ALMIC ROJA Triple capa. Cantell ABS</p>
            </li>
            <li>
              <a href="#img4-p">
                <img className="img-lacadas" src="/tirador/polilaminada4.gif" />
              </a>
              <p className="p-imagen">BALI Blanc brillant. PET</p>
            </li>
            <li>
              <a href="#img5-p">
                <img className="img-lacadas" src="/tirador/polilaminada5.gif" />
              </a>
              <p className="p-imagen">CARIBE Blanc brillant</p>
            </li>
            <li>
              <a href="#img6-p">
                <img className="img-lacadas" src="/tirador/polilaminada6.gif" />
              </a>
              <p className="p-imagen">CLASSIC PLATA Triple capa. Cantell ABS</p>
            </li>
            <li>
              <a href="#img7-p">
                <img className="img-lacadas" src="/tirador/polilaminada7.gif" />
              </a>
              <p className="p-imagen">IRABIA PET Blanc brillant</p>
            </li>
            <li>
              <a href="#img8-p">
                <img className="img-lacadas" src="/tirador/polilaminada8.gif" />
              </a>
              <p className="p-imagen">PISA Beige</p>
            </li>
            <li>
              <a href="#img9-p">
                <img className="img-lacadas" src="/tirador/polilaminada9.gif" />
              </a>
              <p className="p-imagen">RONCAL Beige</p>
            </li>
            <li>
              <a href="#img10-p">
                <img
                  className="img-lacadas"
                  src="/tirador/polilaminada10.gif"
                />
              </a>
              <p className="p-imagen">ESTORIL PET Blanc brillant</p>
            </li>
            <li>
              <a href="#img11-p">
                <img
                  className="img-lacadas"
                  src="/tirador/polilaminada11.gif"
                />
              </a>
              <p className="p-imagen">MAELLA TIPO 1 Marc 5 cm</p>
            </li>
            <li>
              <a href="#img12-p">
                <img
                  className="img-lacadas"
                  src="/tirador/polilaminada12.gif"
                />
              </a>
              <p className="p-imagen">MAELLA TIPO 2 Marc 8 cm</p>
            </li>
            <li>
              <a href="#img13-p">
                <img
                  className="img-lacadas"
                  src="/tirador/polilaminada13.gif"
                />
              </a>
              <p className="p-imagen">XÀTIVA 22 mm</p>
            </li>
            <li>
              <a href="#img14-p">
                <img
                  className="img-lacadas"
                  src="/tirador/polilaminada14.gif"
                />
              </a>
              <p className="p-imagen">SEGURA Pi rústic</p>
            </li>
          </ul>

          <figure id="img1-p" class="lbox bounce">
            <span>
              <a href="#img14-p" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/polilaminada1.gif" />
            <span id="right">
              <a href="#img2-p" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>IBAÑETA Blanc brillant i seda</h2>
          </figure>

          <figure id="img2-p" class="lbox bounce">
            <span>
              <a href="#img1-p" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/polilaminada2.gif" />
            <span id="right">
              <a href="#img3-p" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>IBAÑETA Teka</h2>
          </figure>

          <figure id="img3-p" class="lbox bounce">
            <span>
              <a href="#img2-p" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/polilaminada3.gif" />
            <span id="right">
              <a href="#img4-p" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>ALMIC ROJA Triple capa. Cantell ABS</h2>
          </figure>

          <figure id="img4-p" class="lbox bounce">
            <span>
              <a href="#img3-p" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/polilaminada4.gif" />
            <span id="right">
              <a href="#img5-p" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>BALI Blanc brillant. PET</h2>
          </figure>

          <figure id="img5-p" class="lbox bounce">
            <span>
              <a href="#img4-p" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/polilaminada5.gif" />
            <span id="right">
              <a href="#img6-p" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>CARIBE Blanc brillant</h2>
          </figure>

          <figure id="img6-p" class="lbox bounce">
            <span>
              <a href="#img5-p" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/polilaminada6.gif" />
            <span id="right">
              <a href="#img7-p" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>CLASSIC PLATA Triple capa. Cantell ABS</h2>
          </figure>

          <figure id="img7-p" class="lbox bounce">
            <span>
              <a href="#img6-p" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/polilaminada7.gif" />
            <span id="right">
              <a href="#img8-p" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>IRABIA PET Blanc brillant</h2>
          </figure>

          <figure id="img8-p" class="lbox bounce">
            <span>
              <a href="#img7-p" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/polilaminada8.gif" />
            <span id="right">
              <a href="#img9-p" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>PISA Beige</h2>
          </figure>

          <figure id="img9-p" class="lbox bounce">
            <span>
              <a href="#img8-p" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/polilaminada9.gif" />
            <span id="right">
              <a href="#img10-p" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>RONCAL Beige</h2>
          </figure>

          <figure id="img10-p" class="lbox bounce">
            <span>
              <a href="#img9-p" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/polilaminada10.gif" />
            <span id="right">
              <a href="#img11-p" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>ESTORIL PET Blanc brillant</h2>
          </figure>

          <figure id="img11-p" class="lbox bounce">
            <span>
              <a href="#img10-p" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/polilaminada11.gif" />
            <span id="right">
              <a href="#img12-p" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>MAELLA TIPO 1 Marc 5 cm</h2>
          </figure>

          <figure id="img12-p" class="lbox bounce">
            <span>
              <a href="#img11-p" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/polilaminada12.gif" />
            <span id="right">
              <a href="#img13-p" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>MAELLA TIPO 2 Marc 8 cm</h2>
          </figure>

          <figure id="img13-p" class="lbox bounce">
            <span>
              <a href="#img12-p" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/polilaminada13.gif" />
            <span id="right">
              <a href="#img14-p" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>XÀTIVA 22 mm</h2>
          </figure>

          <figure id="img14-p" class="lbox bounce">
            <span>
              <a href="#img13-p" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador/polilaminada14.gif" />
            <span id="right">
              <a href="#img1-p" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>SEGURA Pi rústic</h2>
          </figure>

          <div id="img14-p" class="lbox bounce">
            <span>
              <a href="#img13-p" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <span id="right">
              <a href="#img1-p" title="Siguiente">
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
