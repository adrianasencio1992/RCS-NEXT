import React from "react";
import Layout from "../../../../components/layout";
import SCFooter from "../../../../components/footer.styled";
import SCLacadas from "../lacadas.styled";
import Link from "next/link";

export default function Lacadas() {
  return (
    <SCLacadas>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Puertas Lacadas</h1>
        <p className="p-obra-nueva">Un estilo moderno</p>
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
            <a className="link2">Puertas lacadas</a>
          </Link>
        </div>

        <section className="section-card">
          <Link href="/muebles-de-cocina/puertas/lacadas/yakarta">
            <div class="div-card">
              <img className="imagen-card" src="/lacadas/yakarta.jpg"></img>
              <h2 className="h2-card">YAKARTA</h2>
            </div>
          </Link>

          <Link href="/muebles-de-cocina/puertas/lacadas/nantes">
            <div class="div-card">
              <img className="imagen-card" src="/lacadas/nantes.jpg"></img>
              <h2 className="h2-card">NANTES</h2>
            </div>
          </Link>

          <Link href="/muebles-de-cocina/puertas/lacadas/tapies">
            <div class="div-card">
              <img className="imagen-card" src="/lacadas/tapies.jpg"></img>
              <h2 className="h2-card">TAPIES</h2>
            </div>
          </Link>
        </section>

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
      {/*NATUR 22 mm*/}
      <section className="section2">
        <div className="div-nombre">
          <h3 className="h3-formulario">NATUR 22 mm</h3>
          <hr className="hr-formulario"></hr>
          <p className="p-formulario">
            Puertas de 22 de grueso con diseños y texturas sorprendentes
          </p>
        </div>

        <div class="demo1">
          <ul class="galeria3">
            <li>
              <a href="#img1-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur1.gif"
                />
              </a>
              <p className="p-imagen">ALTER BO11</p>
            </li>
            <li>
              <a href="#img2-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur2.gif"
                />
              </a>
              <p className="p-imagen">ALTER LK68</p>
            </li>
            <li>
              <a href="#img3-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur3.gif"
                />
              </a>
              <p className="p-imagen">ALTER LK72</p>
            </li>
            <li>
              <a href="#img4-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur4.gif"
                />
              </a>
              <p className="p-imagen">PEMBROKE B073</p>
            </li>
            <li>
              <a href="#img5-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur5.gif"
                />
              </a>
              <p className="p-imagen">PEMBROKE S120</p>
            </li>
            <li>
              <a href="#img6-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur6.gif"
                />
              </a>
              <p className="p-imagen">PEMBROKE S122</p>
            </li>
            <li>
              <a href="#img7-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur7.gif"
                />
              </a>
              <p className="p-imagen">PEMBROKE S123</p>
            </li>
            <li>
              <a href="#img8-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur8.gif"
                />
              </a>
              <p className="p-imagen">PEMBROKE S126</p>
            </li>
            <li>
              <a href="#img9-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur9.gif"
                />
              </a>
              <p className="p-imagen">PENÉLOPE FA42</p>
            </li>
            <li>
              <a href="#img10-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur10.gif"
                />
              </a>
              <p className="p-imagen">PENÉLOPE FA48</p>
            </li>
            <li>
              <a href="#img11-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur11.gif"
                />
              </a>
              <p className="p-imagen">PENÉLOPE F477</p>
            </li>
            <li>
              <a href="#img12-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur12.gif"
                />
              </a>
              <p className="p-imagen">SHERWOOD S70</p>
            </li>
            <li>
              <a href="#img13-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur13.gif"
                />
              </a>
              <p className="p-imagen">SHERWOOD S71</p>
            </li>
            <li>
              <a href="#img14-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur14.gif"
                />
              </a>
              <p className="p-imagen">SHERWOOD S73</p>
            </li>
            <li>
              <a href="#img15-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur15.gif"
                />
              </a>
              <p className="p-imagen">SHERWOOD S75</p>
            </li>
            <li>
              <a href="#img16-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur16.gif"
                />
              </a>
              <p className="p-imagen">TRANCHÉ LM64</p>
            </li>
            <li>
              <a href="#img17-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur17.gif"
                />
              </a>
              <p className="p-imagen">TRANCHÉ LM65</p>
            </li>
            <li>
              <a href="#img18-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur18.gif"
                />
              </a>
              <p className="p-imagen">TRANCHÉ LM66</p>
            </li>
            <li>
              <a href="#img19-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur19.gif"
                />
              </a>
              <p className="p-imagen">TRANCHÉ LM69</p>
            </li>
            <li>
              <a href="#img20-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur20.gif"
                />
              </a>
              <p className="p-imagen">TRANCHÉ LM71</p>
            </li>
            <li>
              <a href="#img21-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur21.gif"
                />
              </a>
              <p className="p-imagen">TRANCHÉ S02</p>
            </li>
            <li>
              <a href="#img22-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur22.gif"
                />
              </a>
              <p className="p-imagen">VINTAGE LM62</p>
            </li>
            <li>
              <a href="#img23-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur23.gif"
                />
              </a>
              <p className="p-imagen">VINTAGE LM63</p>
            </li>
            <li>
              <a href="#img24-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur24.gif"
                />
              </a>
              <p className="p-imagen">VULCANO FA334</p>
            </li>
            <li>
              <a href="#img25-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur25.gif"
                />
              </a>
              <p className="p-imagen">VULCANO FB48</p>
            </li>
            <li>
              <a href="#img26-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur26.gif"
                />
              </a>
              <p className="p-imagen">VULCANO FB49</p>
            </li>
            <li>
              <a href="#img27-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur27.jpg"
                />
              </a>
              <p className="p-imagen">SABLE LR21</p>
            </li>
            <li>
              <a href="#img28-n">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/natur28.jpg"
                />
              </a>
              <p className="p-imagen">SABLE LR26</p>
            </li>
          </ul>

          <figure id="img1-n" class="lbox bounce">
            <span>
              <a href="#img28-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur1.gif" />
            <span id="right">
              <a href="#img2-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img2-n" class="lbox bounce">
            <span>
              <a href="#img1-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur2.gif" />
            <span id="right">
              <a href="#img3-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img3-n" class="lbox bounce">
            <span>
              <a href="#img2-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur3.gif" />
            <span id="right">
              <a href="#img4-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img4-n" class="lbox bounce">
            <span>
              <a href="#img3-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur4.gif" />
            <span id="right">
              <a href="#img5-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img5-n" class="lbox bounce">
            <span>
              <a href="#img4-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur5.gif" />
            <span id="right">
              <a href="#img6-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img6-n" class="lbox bounce">
            <span>
              <a href="#img5-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur6.gif" />
            <span id="right">
              <a href="#img7-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img7-n" class="lbox bounce">
            <span>
              <a href="#img6-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur7.gif" />
            <span id="right">
              <a href="#img8-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img8-n" class="lbox bounce">
            <span>
              <a href="#img7-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur8.gif" />
            <span id="right">
              <a href="#img9-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img9-n" class="lbox bounce">
            <span>
              <a href="#img8-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur9.gif" />
            <span id="right">
              <a href="#img10-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img10-n" class="lbox bounce">
            <span>
              <a href="#img9-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur10.gif" />
            <span id="right">
              <a href="#img11-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img11-n" class="lbox bounce">
            <span>
              <a href="#img10-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur11.gif" />
            <span id="right">
              <a href="#img12-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img12-n" class="lbox bounce">
            <span>
              <a href="#img11-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur12.gif" />
            <span id="right">
              <a href="#img13-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img13-n" class="lbox bounce">
            <span>
              <a href="#img12-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur13.gif" />
            <span id="right">
              <a href="#img14-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img14-n" class="lbox bounce">
            <span>
              <a href="#img13-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur14.gif" />
            <span id="right">
              <a href="#img15-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img15-n" class="lbox bounce">
            <span>
              <a href="#img14-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur15.gif" />
            <span id="right">
              <a href="#img16-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img16-n" class="lbox bounce">
            <span>
              <a href="#img15-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur16.gif" />
            <span id="right">
              <a href="#img17-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img17-n" class="lbox bounce">
            <span>
              <a href="#img6-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur17.gif" />
            <span id="right">
              <a href="#img18-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img18-n" class="lbox bounce">
            <span>
              <a href="#img17-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur18.gif" />
            <span id="right">
              <a href="#img19-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img19-n" class="lbox bounce">
            <span>
              <a href="#img18-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur19.gif" />
            <span id="right">
              <a href="#img20-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img20-n" class="lbox bounce">
            <span>
              <a href="#img19-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur20.gif" />
            <span id="right">
              <a href="#img21-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img21-n" class="lbox bounce">
            <span>
              <a href="#img20-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur21.gif" />
            <span id="right">
              <a href="#img22-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img22-n" class="lbox bounce">
            <span>
              <a href="#img21-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur22.gif" />
            <span id="right">
              <a href="#img23-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img23-n" class="lbox bounce">
            <span>
              <a href="#img22-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur23.gif" />
            <span id="right">
              <a href="#img24-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img24-n" class="lbox bounce">
            <span>
              <a href="#img23-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur24.gif" />
            <span id="right">
              <a href="#img25-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img25-n" class="lbox bounce">
            <span>
              <a href="#img24-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur25.gif" />
            <span id="right">
              <a href="#img26-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img26-n" class="lbox bounce">
            <span>
              <a href="#img25-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur26.gif" />
            <span id="right">
              <a href="#img27-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img27-n" class="lbox bounce">
            <span>
              <a href="#img26-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur27.jpg" />
            <span id="right">
              <a href="#img28-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img28-n" class="lbox bounce">
            <span>
              <a href="#img27-n" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/natur28.jpg" />
            <span id="right">
              <a href="#img1-n" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <div id="img28-p" class="lbox bounce">
            <span>
              <a href="#img27-p" title="Anterior">
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

      {/*HPL 4 CANTELLS*/}
      <section className="section2">
        <div className="div-nombre">
          <h3 className="h3-formulario">HPL DE 4 CANTOS</h3>
          <hr className="hr-formulario"></hr>
          <p className="p-formulario">
            Cares i cantells d'HPL d'alta qualitat Caras y cantos de HPL
            (laminado de alta presion). Alta calidad, resistente a la humedad,
            fricción y rayado
          </p>
        </div>

        <div class="demo1">
          <ul class="galeria3">
            <li>
              <a href="#img1-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl1.gif"
                />
              </a>
              <p className="p-imagen">A-4511 LARIX</p>
            </li>
            <li>
              <a href="#img2-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl2.gif"
                />
              </a>
              <p className="p-imagen">A-4515 ALEVÉ</p>
            </li>
            <li>
              <a href="#img3-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl3.gif"
                />
              </a>
              <p className="p-imagen">A-4517 ALEVÉ</p>
            </li>
            <li>
              <a href="#img4-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl4.gif"
                />
              </a>
              <p className="p-imagen">A-4519 LARIX</p>
            </li>
            <li>
              <a href="#img5-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl5.gif"
                />
              </a>
              <p className="p-imagen">A-4526 ALEVÉ</p>
            </li>
            <li>
              <a href="#img6-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl6.gif"
                />
              </a>
              <p className="p-imagen">A-4527 ALEVÉ</p>
            </li>
            <li>
              <a href="#img7-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl7.gif"
                />
              </a>
              <p className="p-imagen">A-4528 ALEVÉ</p>
            </li>
            <li>
              <a href="#img8-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl8.gif"
                />
              </a>
              <p className="p-imagen">A-4538 ALEVÉ</p>
            </li>
            <li>
              <a href="#img9-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl9.gif"
                />
              </a>
              <p className="p-imagen">A-4539 ALEVÉ</p>
            </li>
            <li>
              <a href="#img10-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl10.gif"
                />
              </a>
              <p className="p-imagen">A-4573 ALEVÉ</p>
            </li>
            <li>
              <a href="#img11-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl11.gif"
                />
              </a>
              <p className="p-imagen">A-4574 ALEVÉ</p>
            </li>
            <li>
              <a href="#img12-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl12.gif"
                />
              </a>
              <p className="p-imagen">A-4575 ALEVÉ</p>
            </li>
            <li>
              <a href="#img13-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl13.jpg"
                />
              </a>
              <p className="p-imagen">A-4584 ALEVÉ</p>
            </li>
            <li>
              <a href="#img14-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl14.jpg"
                />
              </a>
              <p className="p-imagen">A-4585 ALEVÉ</p>
            </li>
            <li>
              <a href="#img15-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl15.gif"
                />
              </a>
              <p className="p-imagen">A-4586 ALEVÉ</p>
            </li>
            <li>
              <a href="#img16-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl16.gif"
                />
              </a>
              <p className="p-imagen">A-4587 ALEVÉ</p>
            </li>
            <li>
              <a href="#img17-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl17.gif"
                />
              </a>
              <p className="p-imagen">ARENA S-248 BRILLANTE</p>
            </li>
            <li>
              <a href="#img18-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl18.gif"
                />
              </a>
              <p className="p-imagen">BLANCO BRILLANTE</p>
            </li>
            <li>
              <a href="#img19-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl19.gif"
                />
              </a>
              <p className="p-imagen">BLANCO LACA</p>
            </li>
            <li>
              <a href="#img20-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl20.gif"
                />
              </a>
              <p className="p-imagen">FRISSÉ BLANCO</p>
            </li>
            <li>
              <a href="#img21-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl21.jpg"
                />
              </a>
              <p className="p-imagen">GRANATE BRILLANTE</p>
            </li>
            <li>
              <a href="#img22-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl22.gif"
                />
              </a>
              <p className="p-imagen">GRIS 211 LACA</p>
            </li>
            <li>
              <a href="#img23-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl23.jpg"
                />
              </a>
              <p className="p-imagen">GRIS G-400 BRILLANTE</p>
            </li>
            <li>
              <a href="#img24-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl24.jpg"
                />
              </a>
              <p className="p-imagen">L-0254 LACA</p>
            </li>
            <li>
              <a href="#img25-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl25.jpg"
                />
              </a>
              <p className="p-imagen">M-225 BRILLANTE</p>
            </li>
            <li>
              <a href="#img26-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl26.jpg"
                />
              </a>
              <p className="p-imagen">NEGRO BRILLANTE</p>
            </li>
            <li>
              <a href="#img27-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl27.jpg"
                />
              </a>
              <p className="p-imagen">SIXTY 262 BRILLANTE</p>
            </li>
            <li>
              <a href="#img28-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl28.jpg"
                />
              </a>
              <p className="p-imagen">SIXTY 263 BRILLANTE</p>
            </li>
            <li>
              <a href="#img29-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl29.gif"
                />
              </a>
              <p className="p-imagen">ARENA LACA</p>
            </li>
            <li>
              <a href="#img30-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl30.gif"
                />
              </a>
              <p className="p-imagen">NARANJA BRILLANTE 5139</p>
            </li>
            <li>
              <a href="#img31-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl31.gif"
                />
              </a>
              <p className="p-imagen">VAINILLA BRILLANTE 7932</p>
            </li>
            <li>
              <a href="#img32-h">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/hpl32.jpg"
                />
              </a>
              <p className="p-imagen">VERDE NRILLANTE 4177</p>
            </li>
          </ul>

          <figure id="img1-h" class="lbox bounce">
            <span>
              <a href="#img32-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl1.gif" />
            <span id="right">
              <a href="#img2-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img2-h" class="lbox bounce">
            <span>
              <a href="#img1-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl2.gif" />
            <span id="right">
              <a href="#img3-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img3-h" class="lbox bounce">
            <span>
              <a href="#img2-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl3.gif" />
            <span id="right">
              <a href="#img4-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img4-h" class="lbox bounce">
            <span>
              <a href="#img3-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl4.gif" />
            <span id="right">
              <a href="#img5-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img5-h" class="lbox bounce">
            <span>
              <a href="#img4-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl5.gif" />
            <span id="right">
              <a href="#img6-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img6-h" class="lbox bounce">
            <span>
              <a href="#img5-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl6.gif" />
            <span id="right">
              <a href="#img7-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img7-h" class="lbox bounce">
            <span>
              <a href="#img6-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl7.gif" />
            <span id="right">
              <a href="#img8-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img8-h" class="lbox bounce">
            <span>
              <a href="#img7-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl8.gif" />
            <span id="right">
              <a href="#img9-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img9-h" class="lbox bounce">
            <span>
              <a href="#img8-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl9.gif" />
            <span id="right">
              <a href="#img10-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img10-h" class="lbox bounce">
            <span>
              <a href="#img9-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl10.gif" />
            <span id="right">
              <a href="#img11-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img11-h" class="lbox bounce">
            <span>
              <a href="#img10-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl11.gif" />
            <span id="right">
              <a href="#img12-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img12-h" class="lbox bounce">
            <span>
              <a href="#img11-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl12.gif" />
            <span id="right">
              <a href="#img13-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img13-h" class="lbox bounce">
            <span>
              <a href="#img12-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl13.jpg" />
            <span id="right">
              <a href="#img14-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img14-h" class="lbox bounce">
            <span>
              <a href="#img13-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl14.jpg" />
            <span id="right">
              <a href="#img15-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img15-h" class="lbox bounce">
            <span>
              <a href="#img14-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl15.gif" />
            <span id="right">
              <a href="#img16-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img16-h" class="lbox bounce">
            <span>
              <a href="#img15-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl16.gif" />
            <span id="right">
              <a href="#img17-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img17-h" class="lbox bounce">
            <span>
              <a href="#img16-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl17.gif" />
            <span id="right">
              <a href="#img18-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img18-h" class="lbox bounce">
            <span>
              <a href="#img17-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl18.gif" />
            <span id="right">
              <a href="#img19-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img19-h" class="lbox bounce">
            <span>
              <a href="#img18-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl19.gif" />
            <span id="right">
              <a href="#img20-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img20-h" class="lbox bounce">
            <span>
              <a href="#img19-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl20.gif" />
            <span id="right">
              <a href="#img21-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img21-h" class="lbox bounce">
            <span>
              <a href="#img20-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl21.jpg" />
            <span id="right">
              <a href="#img22-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img22-h" class="lbox bounce">
            <span>
              <a href="#img21-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl22.gif" />
            <span id="right">
              <a href="#img23-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img23-h" class="lbox bounce">
            <span>
              <a href="#img22-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl23.jpg" />
            <span id="right">
              <a href="#img24-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img24-h" class="lbox bounce">
            <span>
              <a href="#img23-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl24.jpg" />
            <span id="right">
              <a href="#img25-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img25-h" class="lbox bounce">
            <span>
              <a href="#img24-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl25.jpg" />
            <span id="right">
              <a href="#img26-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img26-h" class="lbox bounce">
            <span>
              <a href="#img25-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl26.jpg" />
            <span id="right">
              <a href="#img27-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img27-h" class="lbox bounce">
            <span>
              <a href="#img26-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl27.jpg" />
            <span id="right">
              <a href="#img28-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img28-h" class="lbox bounce">
            <span>
              <a href="#img27-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl28.jpg" />
            <span id="right">
              <a href="#img1-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img29-h" class="lbox bounce">
            <span>
              <a href="#img28-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl29.gif" />
            <span id="right">
              <a href="#img30-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img30-h" class="lbox bounce">
            <span>
              <a href="#img29-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl30.gif" />
            <span id="right">
              <a href="#img31-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img31-h" class="lbox bounce">
            <span>
              <a href="#img30-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl31.gif" />
            <span id="right">
              <a href="#img32-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img32-h" class="lbox bounce">
            <span>
              <a href="#img31-h" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/hpl32.jpg" />
            <span id="right">
              <a href="#img1-h" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <div id="img32-p" class="lbox bounce">
            <span>
              <a href="#img31-p" title="Anterior">
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

      {/*FENIX*/}
      <section className="section2">
        <div className="div-nombre">
          <h3 className="h3-formulario">FENIX</h3>
          <hr className="hr-formulario"></hr>
          <p className="p-formulario">
            FENIX NTM® es un material innovador para el diseño de interiores.
            Una superficie inteligente, extremadamente mate, anti-huelas, muy
            resistente y a su vez suave al tacto.
          </p>
        </div>

        <div class="demo1">
          <ul class="galeria3">
            <li>
              <a href="#img1-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix1.jpg"
                />
              </a>
              <p className="p-imagen">0029 BIANCO MALE</p>
            </li>
            <li>
              <a href="#img2-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix2.jpg"
                />
              </a>
              <p className="p-imagen">0032 BIANCO KOS</p>
            </li>
            <li>
              <a href="#img3-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix3.jpg"
                />
              </a>
              <p className="p-imagen">0030 BIANCO ALASKA</p>
            </li>
            <li>
              <a href="#img4-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix4.jpg"
                />
              </a>
              <p className="p-imagen">0719 BEIGE LUXOR</p>
            </li>
            <li>
              <a href="#img5-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix5.jpg"
                />
              </a>
              <p className="p-imagen">0748 BEIGE ARIZONA</p>
            </li>
            <li>
              <a href="#img6-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix6.jpg"
                />
              </a>
              <p className="p-imagen">0717 CASTORO OTTAWA</p>
            </li>
            <li>
              <a href="#img7-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix7.jpg"
                />
              </a>
              <p className="p-imagen">0749 CACAO ORINOCO</p>
            </li>
            <li>
              <a href="#img8-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix8.jpg"
                />
              </a>
              <p className="p-imagen">0725 GRIGIO EFESO</p>
            </li>
            <li>
              <a href="#img9-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix9.jpg"
                />
              </a>
              <p className="p-imagen">0752 GRIGIO ANTRIM</p>
            </li>
            <li>
              <a href="#img10-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix10.jpg"
                />
              </a>
              <p className="p-imagen">0718 GRIGIO LONDRA</p>
            </li>
            <li>
              <a href="#img11-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix11.jpg"
                />
              </a>
              <p className="p-imagen">0724 GRIGIO BROMO</p>
            </li>
            <li>
              <a href="#img12-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix12.jpg"
                />
              </a>
              <p className="p-imagen">0750 VERDE COMODORO</p>
            </li>
            <li>
              <a href="#img13-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix13.jpg"
                />
              </a>
              <p className="p-imagen">0751 ROSSO JAIPUR</p>
            </li>
            <li>
              <a href="#img14-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix14.jpg"
                />
              </a>
              <p className="p-imagen">0754 BLU FES</p>
            </li>
            <li>
              <a href="#img15-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix15.jpg"
                />
              </a>
              <p className="p-imagen">0720 NERO INGO</p>
            </li>
            <li>
              <a href="#img16-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix16.jpg"
                />
              </a>
              <p className="p-imagen">2628 ZINCO DOHA</p>
            </li>
            <li>
              <a href="#img17-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix17.jpg"
                />
              </a>
              <p className="p-imagen">2638 TITANIO DOHA</p>
            </li>
            <li>
              <a href="#img18-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix18.jpg"
                />
              </a>
              <p className="p-imagen">2629 BRONZO DOHA</p>
            </li>
            <li>
              <a href="#img19-f">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/fenix19.jpg"
                />
              </a>
              <p className="p-imagen">2630 PIOMBO DOHA</p>
            </li>
          </ul>

          <figure id="img1-f" class="lbox bounce">
            <span>
              <a href="#img19-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix1.jpg" />
            <span id="right">
              <a href="#img2-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0029 BIANCO MALE</h2>
          </figure>

          <figure id="img2-f" class="lbox bounce">
            <span>
              <a href="#img1-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix2.jpg" />
            <span id="right">
              <a href="#img3-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0032 BIANCO KOS</h2>
          </figure>

          <figure id="img3-f" class="lbox bounce">
            <span>
              <a href="#img2-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix3.jpg" />
            <span id="right">
              <a href="#img4-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0030 BIANCO ALASKA</h2>
          </figure>

          <figure id="img4-f" class="lbox bounce">
            <span>
              <a href="#img3-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix4.jpg" />
            <span id="right">
              <a href="#img5-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0719 BEIGE LUXOR</h2>
          </figure>

          <figure id="img5-f" class="lbox bounce">
            <span>
              <a href="#img4-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix5.jpg" />
            <span id="right">
              <a href="#img6-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0748 BEIGE ARIZONA</h2>
          </figure>

          <figure id="img6-f" class="lbox bounce">
            <span>
              <a href="#img5-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix6.jpg" />
            <span id="right">
              <a href="#img7-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0717 CASTORO OTTAWA</h2>
          </figure>

          <figure id="img7-f" class="lbox bounce">
            <span>
              <a href="#img6-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix7.jpg" />
            <span id="right">
              <a href="#img8-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0749 CACAO ORINOCO</h2>
          </figure>

          <figure id="img8-f" class="lbox bounce">
            <span>
              <a href="#img7-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix8.jpg" />
            <span id="right">
              <a href="#img9-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0725 GRIGIO EFESO</h2>
          </figure>

          <figure id="img9-f" class="lbox bounce">
            <span>
              <a href="#img8-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix9.jpg" />
            <span id="right">
              <a href="#img10-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0752 GRIGIO ANTRIM</h2>
          </figure>

          <figure id="img10-f" class="lbox bounce">
            <span>
              <a href="#img9-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix10.jpg" />
            <span id="right">
              <a href="#img11-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0718 GRIGIO LONDRA</h2>
          </figure>

          <figure id="img11-f" class="lbox bounce">
            <span>
              <a href="#img10-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix11.jpg" />
            <span id="right">
              <a href="#img12-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0724 GRIGIO BROMO</h2>
          </figure>

          <figure id="img12-f" class="lbox bounce">
            <span>
              <a href="#img11-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix12.jpg" />
            <span id="right">
              <a href="#img13-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0750 VERDE COMODORO</h2>
          </figure>

          <figure id="img13-f" class="lbox bounce">
            <span>
              <a href="#img12-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix13.jpg" />
            <span id="right">
              <a href="#img14-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0751 ROSSO JAIPUR</h2>
          </figure>

          <figure id="img14-f" class="lbox bounce">
            <span>
              <a href="#img13-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix14.jpg" />
            <span id="right">
              <a href="#img15-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0754 BLU FES</h2>
          </figure>

          <figure id="img15-f" class="lbox bounce">
            <span>
              <a href="#img14-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix15.jpg" />
            <span id="right">
              <a href="#img16-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0720 NERO INGO</h2>
          </figure>

          <figure id="img16-f" class="lbox bounce">
            <span>
              <a href="#img15-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix16.jpg" />
            <span id="right">
              <a href="#img17-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>2628 ZINCO DOHA</h2>
          </figure>

          <figure id="img17-f" class="lbox bounce">
            <span>
              <a href="#img16-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix17.jpg" />
            <span id="right">
              <a href="#img18-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>2638 TITANIO DOHA</h2>
          </figure>

          <figure id="img18-f" class="lbox bounce">
            <span>
              <a href="#img17-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix18.jpg" />
            <span id="right">
              <a href="#img19-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>2629 BRONZO DOHA</h2>
          </figure>

          <figure id="img19-f" class="lbox bounce">
            <span>
              <a href="#img18-f" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/fenix19.jpg" />
            <span id="right">
              <a href="#img1-f" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>2630 PIOMBO DOHA</h2>
          </figure>

          <div id="img19-f" class="lbox bounce">
            <span>
              <a href="#img18-f" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <span id="right">
              <a href="#img1-f" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>{" "}
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </div>
        </div>
      </section>

      {/*POSTFORMADAS*/}
      <section className="section2">
        <div className="div-nombre">
          <h3 className="h3-formulario">POSTFORMADAS</h3>
          <hr className="hr-formulario"></hr>
          <p className="p-formulario">
            Cantos laterales romos y cantos superiores rectos
          </p>
        </div>

        <div class="demo1">
          <ul class="galeria4">
            <li>
              <a href="#img1-post">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/postformades1.gif"
                />
              </a>
              <p className="p-imagen">ALUMINI 1/C</p>
            </li>
            <li>
              <a href="#img2-post">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/postformades2.gif"
                />
              </a>
              <p className="p-imagen">BLANC 3091</p>
            </li>
            <li>
              <a href="#img3-post">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/postformades3.gif"
                />
              </a>
              <p className="p-imagen">GRANATE</p>
            </li>
            <li>
              <a href="#img4-post">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/postformades4.gif"
                />
              </a>
              <p className="p-imagen">GRIS 35</p>
            </li>
            <li>
              <a href="#img5-post">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/postformades5.gif"
                />
              </a>
              <p className="p-imagen">METALICO BLANCO</p>
            </li>
            <li>
              <a href="#img6-post">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/postformades6.gif"
                />
              </a>
              <p className="p-imagen">HUESO</p>
            </li>
            <li>
              <a href="#img7-post">
                <img
                  className="img-lacadas"
                  src="/tirador-integrado/postformades7.gif"
                />
              </a>
              <p className="p-imagen">VAINILLA 7932</p>
            </li>
          </ul>

          <figure id="img1-post" class="lbox bounce">
            <span>
              <a href="#img7-post" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/postformades1.gif" />
            <span id="right">
              <a href="#img2-post" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>0029 BIANCO MALE</h2>
          </figure>

          <figure id="img2-post" class="lbox bounce">
            <span>
              <a href="#img1-post" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/postformades2.gif" />
            <span id="right">
              <a href="#img3-post" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img3-post" class="lbox bounce">
            <span>
              <a href="#img2-post" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/postformades3.gif" />
            <span id="right">
              <a href="#img4-post" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img4-post" class="lbox bounce">
            <span>
              <a href="#img3-post" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/postformades4.gif" />
            <span id="right">
              <a href="#img5-post" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img5-post" class="lbox bounce">
            <span>
              <a href="#img4-post" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/postformades5.gif" />
            <span id="right">
              <a href="#img6-post" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img6-post" class="lbox bounce">
            <span>
              <a href="#img5-post" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/postformades6.gif" />
            <span id="right">
              <a href="#img7-post" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <figure id="img7-post" class="lbox bounce">
            <span>
              <a href="#img6-post" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-integrado/postformades7.gif" />
            <span id="right">
              <a href="#img1-post" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
          </figure>

          <div id="img7-post" class="lbox bounce">
            <span>
              <a href="#img6-post" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <span id="right">
              <a href="#img1-post" title="Siguiente">
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
    </SCLacadas>
  );
}
