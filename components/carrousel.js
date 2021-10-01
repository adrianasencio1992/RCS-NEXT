import React from "react";
import SCCarrousel from "./carrousel.styled";

export default function Carrousel() {
  return (
    <SCCarrousel>
      <section className="section-opiniones">
        <div class="container">
          <h2 className="h2-opiniones">OPINIONES DE NUESTROS CLIENTES</h2>
          <hr className="hr-opiniones"></hr>
          <p className="p-opiniones">
            Para RCS la transparencia, fiabilidad y confianza son valores
            fundamentales para la realización de la reforma de su hogar. Con
            este compromiso, RCS adjunta las opiniones de clientes que han
            realizado la reforma en Barcelona, Rubí, Terrassa, Sabadell y
            alrededores.
          </p>

          <ul class="slider">
            <li id="slide1">
              <div className="div-general-comentarios">
                <div className="div-comentarios">
                  <div className="div-foto-comentarios">
                    <img className="img-comentario" src="/bano1.jpg"></img>
                  </div>
                  <div>
                    <p>Adrian Asencio</p>
                  </div>
                </div>
                <p className="p-comentarios">
                  ❝ <span>★★★★★</span> Valoro muy positivamente la atención
                  recibida por Angel, es todo un profesional. Solicité un
                  presupuesto para una reforma integral de un piso y agradezco
                  su minuciosidad, conocimiento sobre materiales, consejos,
                  amabilidad y esmero . Mi primera toma de contacto ha sido
                  inmejorable. ¡Muchas gracias! ❞
                </p>
              </div>
            </li>
            <li id="slide2">
              <div className="div-general-comentarios">
                <div className="div-comentarios">
                  <div className="div-foto-comentarios">
                    <img className="img-comentario" src="/bano1.jpg"></img>
                  </div>
                  <div>
                    <p>Adrian Asencio</p>
                  </div>
                </div>
                <p className="p-comentarios">
                  ❝ <span>★★★★★</span> Valoro y me gusta muy positivamente la
                  atención recibida por Angel, es todo un profesional. Solicité
                  un presupuesto para una reforma integral de un piso y
                  agradezco su minuciosidad, conocimiento sobre materiales,
                  consejos, amabilidad y esmero . Mi primera toma de contacto ha
                  sido inmejorable. ¡Muchas gracias! ❞
                </p>
              </div>
            </li>
            <li id="slide3">
              <img src="/texto3.png" />
            </li>
            <li id="slide4">
              <img src="/texto4.png" />
            </li>
            <li id="slide5">
              <img src="/texto5.png" />
            </li>
            <li id="slide6">
              <img src="/texto6.png" />
            </li>
            <li id="slide7">
              <img src="/texto7.png" />
            </li>
            <li id="slide8">
              <img src="/texto8.png" />
            </li>
            <li id="slide9">
              <img src="/texto9.png" />
            </li>
            <li id="slide10">
              <img src="/texto10.png" />
            </li>
          </ul>
          <ul class="menu">
            <li>
              <a href="#slide1">1</a>
            </li>
            <li>
              <a href="#slide2">2</a>
            </li>
            <li>
              <a href="#slide3">3</a>
            </li>
            <li>
              <a href="#slide4">4</a>
            </li>
            <li>
              <a href="#slide5">5</a>
            </li>
            <li>
              <a href="#slide6">6</a>
            </li>
            <li>
              <a href="#slide7">7</a>
            </li>
            <li>
              <a href="#slide8">8</a>
            </li>
            <li>
              <a href="#slide9">9</a>
            </li>
            <li>
              <a href="#slide10">10</a>
            </li>
          </ul>
        </div>
      </section>
    </SCCarrousel>
  );
}
