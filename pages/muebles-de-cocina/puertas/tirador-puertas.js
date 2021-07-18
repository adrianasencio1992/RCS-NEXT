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
        <div>
          <h3>MADERA</h3>
          <hr></hr>
          <p>Las puertas de siempre y ultimas tendencias en madera</p>
        </div>

        <body>
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
              <img
                alt="Cachorrito 1"
                title="Cachorrito 1"
                src="/tirador/tirador1.jpg"
              />
              <span id="right">
                <a href="#img2" title="Siguiente">
                  <i class="fas fa-caret-right"></i>
                </a>
              </span>
              <a title="Cerrar" href="#_">
                <i class="fas fa-times"></i>
              </a>
              <h2>Título opcional</h2>
            </figure>

            <figure id="img2" class="lbox flip">
              <span>
                <a href="#img1" title="Anterior">
                  <i class="fas fa-angle-left"></i>
                </a>
              </span>
              <img
                title="Cachorrito 2"
                src="http://4.bp.blogspot.com/_EZ16vWYvHHg/TFBW_zN6oaI/AAAAAAAAQd4/8UxrcXLQ5js/s1600/www.BancodeImagenesGratuitas.com-Perrito.jpg"
              />
              <span id="right">
                <a href="#img3" title="Siguiente">
                  <i class="fas fa-angle-right"></i>
                </a>
              </span>
              <a title="Cerrar" href="#_">
                <i class="fas fa-times"></i>
              </a>
            </figure>

            <figure id="img3" class="lbox bounce">
              <span>
                <a href="#img2" title="Anterior">
                  <i class="fas fa-angle-left"></i>
                </a>
              </span>
              <img
                title="Cachorrito 3"
                src="https://www.pedigree.com/images/default-source/article-images/puppy-starter-kit2.jpg"
              />
              <span id="right">
                <a href="#img4" title="Siguiente">
                  <i class="fas fa-angle-right"></i>
                </a>
              </span>
              <a title="Cerrar" href="#_">
                <i class="fas fa-times"></i>
              </a>
            </figure>

            <div id="img4" class="lbox bounce">
              <span>
                <a href="#img3" title="Anterior">
                  <i class="fas fa-angle-left"></i>
                </a>
              </span>
              <div title="Video 4" class="vid">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/DaGt9t3LSrU"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <span id="right">
                <a href="#img5" title="Siguiente">
                  <i class="fas fa-angle-right"></i>
                </a>
              </span>
              <a title="Cerrar" href="#_">
                <i class="fas fa-times"></i>
              </a>
            </div>

            <figure id="img5" class="lbox flip">
              <span>
                <a href="#img4" title="Anterior">
                  <i class="fas fa-angle-left"></i>
                </a>
              </span>
              <img
                title="Cachorrito 5"
                src="https://s3.amazonaws.com/oawk-wordpress-backup/wp-content/uploads/2018/11/30022203/shutterstock_529323067-960x667.jpg"
              />
              <span id="right">
                <a href="#img6" title="Siguiente">
                  <i class="fas fa-angle-right"></i>
                </a>
              </span>
              <a title="Cerrar" href="#_">
                <i class="fas fa-times"></i>
              </a>
            </figure>

            <figure id="img6" class="lbox bounce">
              <span>
                <a href="#img5" title="Anterior">
                  <i class="fas fa-angle-left"></i>
                </a>
              </span>
              <img
                title="Cachorrito 6"
                src="https://i.ytimg.com/vi/3ggIHfwkIWM/maxresdefault.jpg"
              />
              <span id="right">
                <a href="#img7" title="Siguiente">
                  <i class="fas fa-angle-right"></i>
                </a>
              </span>
              <a title="Cerrar" href="#_">
                <i class="fas fa-times"></i>
              </a>
            </figure>

            <figure id="img7" class="lbox flip">
              <span>
                <a href="#img6" title="Anterior">
                  <i class="fas fa-angle-left"></i>
                </a>
              </span>
              <img
                title="Cachorrito 7"
                src="https://iheartdogs.com/wp-content/uploads/2015/01/Screenshot-2015-01-17-16.15.29.png"
              />
              <span id="right">
                <a href="#img8" title="Siguiente">
                  <i class="fas fa-angle-right"></i>
                </a>
              </span>
              <a title="Cerrar" href="#_">
                <i class="fas fa-times"></i>
              </a>
            </figure>

            <figure id="img8" class="lbox bounce">
              <span>
                <a href="#img7" title="Anterior">
                  <i class="fas fa-angle-left"></i>
                </a>
              </span>
              <img
                title="Cachorrito 8"
                src="https://pupbox.com/wp-content/themes/pupbox-jb/assets/blog.v2/posts-by-age/puppy-running2.jpg"
              />
              <span id="right">
                <a href="#img9" title="Siguiente">
                  <i class="fas fa-angle-right"></i>
                </a>
              </span>
              <a title="Cerrar" href="#_">
                <i class="fas fa-times"></i>
              </a>
            </figure>

            <div id="img9" class="lbox flip">
              <span>
                <a href="#img8" title="Anterior">
                  <i class="fas fa-angle-left"></i>
                </a>
              </span>
              <div title="Video 9" class="vid">
                <iframe
                  src="https://player.vimeo.com/video/109943349"
                  width="640"
                  height="360"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
              <span id="right">
                <a href="#img10" title="Siguiente">
                  <i class="fas fa-angle-right"></i>
                </a>
              </span>
              <a title="Cerrar" href="#_">
                <i class="fas fa-times"></i>
              </a>
            </div>

            <figure id="img10" class="lbox flip">
              <span>
                <a href="#img9" title="Anterior">
                  <i class="fas fa-angle-left"></i>
                </a>
              </span>
              <img
                title="Cachorrito 10"
                src="http://d279m997dpfwgl.cloudfront.net/wp/2019/10/AP_18169701089570-1000x694.jpg"
              />
              <span id="right">
                <a href="#img11" title="Siguiente">
                  <i class="fas fa-angle-right"></i>
                </a>
              </span>
              <a title="Cerrar" href="#_">
                <i class="fas fa-times"></i>
              </a>
            </figure>

            <figure id="img11" class="lbox fade">
              <span>
                <a href="#img10" title="Anterior">
                  <i class="fas fa-angle-left"></i>
                </a>
              </span>
              <img
                title="Cachorrito 11"
                src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg"
              />
              <span id="right">
                <a href="#img12" title="Siguiente">
                  <i class="fas fa-angle-right"></i>
                </a>
              </span>
              <a title="Cerrar" href="#_">
                <i class="fas fa-times"></i>
              </a>
            </figure>

            <div id="img12" class="lbox bounce">
              <span>
                <a href="#img11" title="Anterior">
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
        </body>
      </section>

      <SCFooter></SCFooter>
    </SCTiradorPuertas>
  );
}
