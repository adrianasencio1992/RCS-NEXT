import React from "react";
import Layout from "../../../components/layout";
import SCFooter from "../../../components/footer";
import SCTiradorModerno from "./tirador-moderno.styled";
import Link from "next/link";

export default function TiradorModerno() {
  return (
    <SCTiradorModerno>
      <Layout></Layout>
      <div className="div-obra-nueva">
        <h1 className="h1-obra-nueva">Tirador Moderno</h1>
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
          <Link href="/muebles-de-cocina/tiradores/tiradores">
            <a className="link2">Tiradores</a>
          </Link>
          <span className="span"> ˃ </span>
          <Link href="#">
            <a className="link2">Tirador moderno</a>
          </Link>
        </div>

        {/*Tirador de asa*/}
        <div className="div-nombre">
          <h3 className="h3-formulario">Tirador Moderno</h3>
          <hr className="hr-formulario"></hr>
          <p className="p-formulario"></p>
        </div>

        <div class="demo1">
          <ul class="galeria">
            <li>
              <a href="#img1">
                <img src="/tirador-moderno/moderno1.jpg" />
              </a>
              <p className="p-imagen">TIRADOR ECOBASIC METALIZADO</p>
            </li>
            <li>
              <a href="#img2">
                <img src="/tirador-moderno/moderno2.jpg" />
              </a>
              <p className="p-imagen">TIRADOR TUBO ECO 2335 ACERO</p>
            </li>
            <li>
              <a href="#img3">
                <img src="/tirador-moderno/moderno3.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2380 TUBO CROMO MATE</p>
            </li>
            <li>
              <a href="#img4">
                <img src="/tirador-moderno/moderno4.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 4749 CROMO MATE - ZAMAK</p>
            </li>
            <li>
              <a href="#img5">
                <img src="/tirador-moderno/moderno5.jpg" />
              </a>
              <p className="p-imagen">TIRADOR METÁLICO BLANCO MATE</p>
            </li>
            <li>
              <a href="#img6">
                <img src="/tirador-moderno/moderno6.jpg" />
              </a>
              <p className="p-imagen">TIRADOR METÁLICO NEGRO MATE 4749</p>
            </li>
            <li>
              <a href="#img7">
                <img src="/tirador-moderno/moderno7.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 0123E CROMO</p>
            </li>
            <li>
              <a href="#img8">
                <img src="/tirador-moderno/moderno8.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 0136E CROMO</p>
            </li>
            <li>
              <a href="#img9">
                <img src="/tirador-moderno/moderno9.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 0138E CROMO MATE</p>
            </li>
            <li>
              <a href="#img10">
                <img src="/tirador-moderno/moderno10.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 0144E CROMO MATE 234 MM</p>
            </li>
            <li>
              <a href="#img11">
                <img src="/tirador-moderno/moderno11.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 0158E CROMO</p>
            </li>
            <li>
              <a href="#img12">
                <img src="/tirador-moderno/moderno12.jpg" />
              </a>
              <p className="p-imagen">TIRADOR METÁLICO NEGRO MATE</p>
            </li>
            <li>
              <a href="#img13">
                <img src="/tirador-moderno/moderno13.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 0146E CROMO</p>
            </li>
            <li>
              <a href="#img14">
                <img src="/tirador-moderno/moderno14.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 0160E CROMO MATE</p>
            </li>
            <li>
              <a href="#img15">
                <img src="/tirador-moderno/moderno15.jpg" />
              </a>
              <p className="p-imagen">TIRADOR METÁLICO NEGRO MATE</p>
            </li>
            <li>
              <a href="#img16">
                <img src="/tirador-moderno/moderno16.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 0167E CROMO 209 MM</p>
            </li>
            <li>
              <a href="#img17">
                <img src="/tirador-moderno/moderno17.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 1001E CROMO Y GRANITO</p>
            </li>
            <li>
              <a href="#img18">
                <img src="/tirador-moderno/moderno18.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2304 CROMO MATE</p>
            </li>
            <li>
              <a href="#img19">
                <img src="/tirador-moderno/moderno19.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2327 CROMO MATE</p>
            </li>
            <li>
              <a href="#img20">
                <img src="/tirador-moderno/moderno20.jpg" />
              </a>
              <p className="p-imagen">TIRADOR METÁLICO BLANCO MATE</p>
            </li>
            <li>
              <a href="#img21">
                <img src="/tirador-moderno/moderno21.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2329/30 CROMO MATE</p>
            </li>
            <li>
              <a href="#img22">
                <img src="/tirador-moderno/moderno22.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2352 CROMO MATE</p>
            </li>
            <li>
              <a href="#img23">
                <img src="/tirador-moderno/moderno23.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2361/62 CROMO MATE</p>
            </li>
            <li>
              <a href="#img24">
                <img src="/tirador-moderno/moderno24.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2381 CROMO MATE</p>
            </li>
            <li>
              <a href="#img25">
                <img src="/tirador-moderno/moderno25.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2389/90 CROMO MATE</p>
            </li>
            <li>
              <a href="#img26">
                <img src="/tirador-moderno/moderno26.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2406 CROMO MATE</p>
            </li>
            <li>
              <a href="#img27">
                <img src="/tirador-moderno/moderno27.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2407 CROMO MATE</p>
            </li>
            <li>
              <a href="#img28">
                <img src="/tirador-moderno/moderno28.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2417 CROMO MATE</p>
            </li>
            <li>
              <a href="#img29">
                <img src="/tirador-moderno/moderno29.jpg" />
              </a>
              <p className="p-imagen">TIRADOR METÁLICO NEGRO MATE 2417</p>
            </li>
            <li>
              <a href="#img30">
                <img src="/tirador-moderno/moderno30.jpg" />
              </a>
              <p className="p-imagen">TIRADOR METÁLICO NEGRO MATE</p>
            </li>
            <li>
              <a href="#img31">
                <img src="/tirador-moderno/moderno31.jpg" />
              </a>
              <p className="p-imagen">TIRADOR METÁLICO NEGRO MATE</p>
            </li>
            <li>
              <a href="#img32">
                <img src="/tirador-moderno/moderno32.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2423/24 CROMO MATE</p>
            </li>
            <li>
              <a href="#img33">
                <img src="/tirador-moderno/moderno33.jpg" />
              </a>
              <p className="p-imagen">TIRADOR METÁLICO NEGRO MATE 2423</p>
            </li>
            <li>
              <a href="#img34">
                <img src="/tirador-moderno/moderno34.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2426 CROMO MATE</p>
            </li>
            <li>
              <a href="#img35">
                <img src="/tirador-moderno/moderno35.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2431 CROMO MATE</p>
            </li>
            <li>
              <a href="#img36">
                <img src="/tirador-moderno/moderno36.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2438 CROMO MATE</p>
            </li>
            <li>
              <a href="#img37">
                <img src="/tirador-moderno/moderno37.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2453 CROMO MATE</p>
            </li>
            <li>
              <a href="#img38">
                <img src="/tirador-moderno/moderno38.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2456 ALUMINIO MATE</p>
            </li>
            <li>
              <a href="#img39">
                <img src="/tirador-moderno/moderno39.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2463 ALUMINIO ANODIZADO</p>
            </li>
            <li>
              <a href="#img40">
                <img src="/tirador-moderno/moderno40.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2464 NIQUEL SATINADO</p>
            </li>
            <li>
              <a href="#img41">
                <img src="/tirador-moderno/moderno41.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2465 CROMO</p>
            </li>
            <li>
              <a href="#img42">
                <img src="/tirador-moderno/moderno42.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 4001E CROMO</p>
            </li>
            <li>
              <a href="#img43">
                <img src="/tirador-moderno/moderno43.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 4059E CROMO MATE</p>
            </li>
            <li>
              <a href="#img44">
                <img src="/tirador-moderno/moderno44.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 4088E CROMO 150 MM</p>
            </li>
            <li>
              <a href="#img45">
                <img src="/tirador-moderno/moderno45.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 4703/04/05 CROMO MATE</p>
            </li>
            <li>
              <a href="#img46">
                <img src="/tirador-moderno/moderno46.jpg" />
              </a>
              <p className="p-imagen">TIRADOR METÁLICO NEGRO MATE 4703</p>
            </li>
            <li>
              <a href="#img47">
                <img src="/tirador-moderno/moderno47.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 4706/07/08 CROMO MATE</p>
            </li>
            <li>
              <a href="#img48">
                <img src="/tirador-moderno/moderno48.jpg" />
              </a>
              <p className="p-imagen">TIRADOR 2455 208 MM</p>
            </li>
          </ul>

          <figure id="img1" class="lbox bounce">
            <span>
              <a href="#img48" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno1.jpg" />
            <span id="right">
              <a href="#img2" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR ECOBASIC METALIZADO CROMO MATE</h2>
          </figure>

          <figure id="img2" class="lbox bounce">
            <span>
              <a href="#img1" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno2.jpg" />
            <span id="right">
              <a href="#img3" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR TUBO ECO 2335 ACERO</h2>
          </figure>

          <figure id="img3" class="lbox bounce">
            <span>
              <a href="#img2" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno3.jpg" />
            <span id="right">
              <a href="#img4" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2380 TUBO CROMO MATE</h2>
          </figure>

          <figure id="img4" class="lbox bounce">
            <span>
              <a href="#img3" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno4.jpg" />
            <span id="right">
              <a href="#img5" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 4749 CROMO MATE - ZAMAK</h2>
          </figure>

          <figure id="img5" class="lbox bounce">
            <span>
              <a href="#img4" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno5.jpg" />
            <span id="right">
              <a href="#img6" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR METÁLICO BLANCO MATE</h2>
          </figure>

          <figure id="img6" class="lbox bounce">
            <span>
              <a href="#img5" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno6.jpg" />
            <span id="right">
              <a href="#img7" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR METÁLICO NEGRO MATE 4749</h2>
          </figure>

          <figure id="img7" class="lbox bounce">
            <span>
              <a href="#img6" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno7.jpg" />
            <span id="right">
              <a href="#img8" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>LTIRADOR 0123E CROMO</h2>
          </figure>

          <figure id="img8" class="lbox bounce">
            <span>
              <a href="#img7" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno8.jpg" />
            <span id="right">
              <a href="#img9" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 0136E CROMO</h2>
          </figure>

          <figure id="img9" class="lbox bounce">
            <span>
              <a href="#img8" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno9.jpg" />
            <span id="right">
              <a href="#img10" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 0138E CROMO MATE</h2>
          </figure>

          <figure id="img10" class="lbox bounce">
            <span>
              <a href="#img9" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno10.jpg" />
            <span id="right">
              <a href="#img11" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 0144E CROMO MATE 234 MM</h2>
          </figure>

          <figure id="img11" class="lbox bounce">
            <span>
              <a href="#img10" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno11.jpg" />
            <span id="right">
              <a href="#img12" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 0158E CROMO</h2>
          </figure>

          <figure id="img12" class="lbox bounce">
            <span>
              <a href="#img11" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno12.jpg" />
            <span id="right">
              <a href="#img13" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR METÁLICO NEGRO MATE</h2>
          </figure>

          <figure id="img13" class="lbox bounce">
            <span>
              <a href="#img12" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno13.jpg" />
            <span id="right">
              <a href="#img14" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 0146E CROMO</h2>
          </figure>

          <figure id="img14" class="lbox bounce">
            <span>
              <a href="#img13" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno14.jpg" />
            <span id="right">
              <a href="#img15" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 0160E CROMO MATE</h2>
          </figure>

          <figure id="img15" class="lbox bounce">
            <span>
              <a href="#img14" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno15.jpg" />
            <span id="right">
              <a href="#img16" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR METÁLICO NEGRO MATE</h2>
          </figure>

          <figure id="img16" class="lbox bounce">
            <span>
              <a href="#img15" title="Anterior">
                <i class="fas fa-caret-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno16.jpg" />
            <span id="right">
              <a href="#img17" title="Siguiente">
                <i class="fas fa-caret-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 0167E CROMO 209 MM</h2>
          </figure>

          <figure id="img17" class="lbox bounce">
            <span>
              <a href="#img16" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno17.jpg" />
            <span id="right">
              <a href="#img18" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 1001E CROMO Y GRANITO</h2>
          </figure>

          <figure id="img18" class="lbox bounce">
            <span>
              <a href="#img17" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno18.jpg" />
            <span id="right">
              <a href="#img19" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2304 CROMO MATE</h2>
          </figure>

          <figure id="img19" class="lbox bounce">
            <span>
              <a href="#img18" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno19.jpg" />
            <span id="right">
              <a href="#img20" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2327 CROMO MATE</h2>
          </figure>

          <figure id="img20" class="lbox bounce">
            <span>
              <a href="#img19" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno20.jpg" />
            <span id="right">
              <a href="#img21" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR METÁLICO BLANCO MATE</h2>
          </figure>

          <figure id="img21" class="lbox bounce">
            <span>
              <a href="#img20" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno21.jpg" />
            <span id="right">
              <a href="#img22" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2329/30 CROMO MATE</h2>
          </figure>

          <figure id="img22" class="lbox bounce">
            <span>
              <a href="#img21" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno22.jpg" />
            <span id="right">
              <a href="#img23" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2352 CROMO MATE</h2>
          </figure>

          <figure id="img23" class="lbox bounce">
            <span>
              <a href="#img22" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno23.jpg" />
            <span id="right">
              <a href="#img24" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2361/62 CROMO MATE</h2>
          </figure>

          <figure id="img24" class="lbox bounce">
            <span>
              <a href="#img23" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno24.jpg" />
            <span id="right">
              <a href="#img25" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2381 CROMO MATE</h2>
          </figure>

          <figure id="img25" class="lbox bounce">
            <span>
              <a href="#img24" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno25.jpg" />
            <span id="right">
              <a href="#img26" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2389/90 CROMO MATE</h2>
          </figure>

          <figure id="img26" class="lbox bounce">
            <span>
              <a href="#img25" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno26.jpg" />
            <span id="right">
              <a href="#img27" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2406 CROMO MATE</h2>
          </figure>

          <figure id="img27" class="lbox bounce">
            <span>
              <a href="#img26" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno27.jpg" />
            <span id="right">
              <a href="#img28" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2407 CROMO MATE</h2>
          </figure>

          <figure id="img28" class="lbox bounce">
            <span>
              <a href="#img27" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno28.jpg" />
            <span id="right">
              <a href="#img29" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2417 CROMO MATE</h2>
          </figure>

          <figure id="img29" class="lbox bounce">
            <span>
              <a href="#img28" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno29.jpg" />
            <span id="right">
              <a href="#img30" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR METÁLICO NEGRO MATE 2417</h2>
          </figure>

          <figure id="img30" class="lbox bounce">
            <span>
              <a href="#img29" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno30.jpg" />
            <span id="right">
              <a href="#img31" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR METÁLICO NEGRO MATE</h2>
          </figure>

          <figure id="img31" class="lbox bounce">
            <span>
              <a href="#img30" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno31.jpg" />
            <span id="right">
              <a href="#img32" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR METÁLICO NEGRO MATE</h2>
          </figure>

          <figure id="img32" class="lbox bounce">
            <span>
              <a href="#img31" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno32.jpg" />
            <span id="right">
              <a href="#img33" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2423/24 CROMO MATE</h2>
          </figure>

          <figure id="img33" class="lbox bounce">
            <span>
              <a href="#img32" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno33.jpg" />
            <span id="right">
              <a href="#img34" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR METÁLICO NEGRO MATE 2423</h2>
          </figure>

          <figure id="img34" class="lbox bounce">
            <span>
              <a href="#img33" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno34.jpg" />
            <span id="right">
              <a href="#img35" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TTIRADOR 2426 CROMO MATE</h2>
          </figure>

          <figure id="img35" class="lbox bounce">
            <span>
              <a href="#img34" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno35.jpg" />
            <span id="right">
              <a href="#img36" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2431 CROMO MATE</h2>
          </figure>

          <figure id="img36" class="lbox bounce">
            <span>
              <a href="#img35" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno36.jpg" />
            <span id="right">
              <a href="#img37" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2438 CROMO MATE</h2>
          </figure>

          <figure id="img37" class="lbox bounce">
            <span>
              <a href="#img36" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno37.jpg" />
            <span id="right">
              <a href="#img38" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2453 CROMO MATE</h2>
          </figure>

          <figure id="img38" class="lbox bounce">
            <span>
              <a href="#img37" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno38.jpg" />
            <span id="right">
              <a href="#img39" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2456 ALUMINIO MATE</h2>
          </figure>

          <figure id="img39" class="lbox bounce">
            <span>
              <a href="#img38" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno39.jpg" />
            <span id="right">
              <a href="#img40" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2463 ALUMINIO ANODIZADO</h2>
          </figure>

          <figure id="img40" class="lbox bounce">
            <span>
              <a href="#img39" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno40.jpg" />
            <span id="right">
              <a href="#img41" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2464 NIQUEL SATINADO</h2>
          </figure>

          <figure id="img41" class="lbox bounce">
            <span>
              <a href="#img40" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno41.jpg" />
            <span id="right">
              <a href="#img42" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2465 CROMO</h2>
          </figure>

          <figure id="img42" class="lbox bounce">
            <span>
              <a href="#img41" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno42.jpg" />
            <span id="right">
              <a href="#img43" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 4001E CROMO</h2>
          </figure>

          <figure id="img43" class="lbox bounce">
            <span>
              <a href="#img42" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno43.jpg" />
            <span id="right">
              <a href="#img44" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 4059E CROMO MATE</h2>
          </figure>

          <figure id="img44" class="lbox bounce">
            <span>
              <a href="#img43" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno44.jpg" />
            <span id="right">
              <a href="#img45" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 4088E CROMO 150 MM</h2>
          </figure>

          <figure id="img45" class="lbox bounce">
            <span>
              <a href="#img44" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno45.jpg" />
            <span id="right">
              <a href="#img46" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 4703/04/05 CROMO MATE</h2>
          </figure>

          <figure id="img46" class="lbox bounce">
            <span>
              <a href="#img45" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno46.jpg" />
            <span id="right">
              <a href="#img47" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR METÁLICO NEGRO MATE 4703</h2>
          </figure>

          <figure id="img47" class="lbox bounce">
            <span>
              <a href="#img46" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno47.jpg" />
            <span id="right">
              <a href="#img48" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 4706/07/08 CROMO MATE</h2>
          </figure>

          <figure id="img48" class="lbox bounce">
            <span>
              <a href="#img47" title="Anterior">
                <i class="fas fa-angle-left"></i>
              </a>
            </span>
            <img src="/tirador-moderno/moderno48.jpg" />
            <span id="right">
              <a href="#img1" title="Siguiente">
                <i class="fas fa-angle-right"></i>
              </a>
            </span>
            <a title="Cerrar" href="#_">
              <i class="fas fa-times"></i>
            </a>
            <h2>TIRADOR 2455 208 MM</h2>
          </figure>

          <div id="img48" class="lbox bounce">
            <span>
              <a href="#img47" title="Anterior">
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

      <SCFooter></SCFooter>
    </SCTiradorModerno>
  );
}
