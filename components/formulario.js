import React from "react";
import SCFormulario from "./formulario.styled";

export default function Formulario() {
  return (
    <SCFormulario>
      <section className="section-formulario2">
        <div>
          <h2 className="h2-formulario">¿Desea un presupuesto GRATUITO?</h2>
          <p className="p-subtitulo">
            Contacta con nosotros y te proporcionaremos un presupuesto más
            detallado
          </p>
        </div>
        <div className="contenedor">
          <p className="p-titulo">INFORMACIÓN DE CONTACTO</p>
          <form
            action="https://formsubmit.co/rcs.reformas@hotmail.com"
            method="POST"
            name="contacto"
            id="contacto"
          >
            <div className="contenedor-formulario-input">
              <div className="input">
                <p className="p-input">
                  <label>Nombre y apellidos*</label>
                </p>
                {/*Para enviar a la pagina y no tener el control de personas*/}
                <input
                  type="hidden"
                  name="_next"
                  value="https://www.rcs.cat/gracias/"
                ></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <input
                  className="input-catcha"
                  type="text"
                  name="_honey"
                ></input>
                {/**/}
                <input
                  className="input-formulario"
                  type="text"
                  name="Nombre"
                  required
                ></input>
              </div>
              <div className="input">
                <p className="p-input">
                  <label>Teléfono*</label>
                </p>
                <input
                  className="input-formulario"
                  type="text"
                  pattern="[0-9]+"
                  name="Telefono"
                  required
                  maxlength="9"
                  minlength="9"
                ></input>
              </div>
              <div className="input">
                <p className="p-input">
                  <label>Población*</label>
                </p>
                <input
                  className="input-formulario"
                  type="text"
                  name="Poblacion"
                  required
                ></input>
                <div className="input">
                  <p className="p-input">
                    <label>Correo electrónico*</label>
                  </p>
                  <input
                    className="input-formulario"
                    type="email"
                    name="Correo"
                    required
                  ></input>
                </div>
              </div>
            </div>
            <div>
              <p className="p-contacto">
                ¿Cómo deseas que contactemos contigo?*
              </p>
              <div className="div-labels">
                <div className="div-labels-2">
                  <input
                    className="input-label"
                    type="radio"
                    id="telefono"
                    value="telefono"
                    name="Contacto"
                  />
                  <label className="label" for="telefono">
                    Teléfono
                  </label>
                </div>
                <div className="div-labels-2">
                  <input
                    className="input-label"
                    type="radio"
                    id="correo"
                    value="correo electronico"
                    name="Contacto"
                  />
                  <label className="label" for="correo">
                    Correo
                  </label>
                </div>
                <div className="div-labels-2">
                  <input
                    className="input-label"
                    type="radio"
                    id="whatsap"
                    value="whatsap"
                    name="Contacto"
                  />
                  <label className="label" for="whatsap">
                    WhatsApp
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p className="p-titulo2">INFORMACIÓN DE LA OBRA</p>
              <p className="p-contacto">
                Seleccione aquellas opciones que desee realizar en su hogar:*
              </p>
              <div className="grupos-general-checkbox">
                <div className="grupos-checkbox">
                  <label className="label-checkbox">
                    <input
                      className="input-checkbox"
                      type="checkbox"
                      id="cbox1"
                      value="Baño completo"
                      name="Tipo de reforma1"
                    />{" "}
                    Baño completo
                  </label>

                  <label className="label-checkbox">
                    <input
                      className="input-checkbox"
                      type="checkbox"
                      id="cbox2"
                      value="Aseo"
                      name="Tipo de reforma2"
                    />{" "}
                    Aseo
                  </label>

                  <label className="label-checkbox">
                    <input
                      className="input-checkbox"
                      type="checkbox"
                      id="cbox3"
                      value="Cambio bañera a plato"
                      name="Tipo de reforma3"
                    />{" "}
                    Cambio bañera a plato
                  </label>

                  <label className="label-checkbox">
                    <input
                      className="input-checkbox"
                      type="checkbox"
                      id="cbox4"
                      value="Calefaccion"
                      name="Tipo de reforma4"
                    />{" "}
                    Calefacción
                  </label>

                  <label className="label-checkbox">
                    <input
                      className="input-checkbox"
                      type="checkbox"
                      id="cbox5"
                      value="Aluminio"
                      name="Tipo de reforma5"
                    />{" "}
                    Aluminio
                  </label>
                </div>

                <div className="grupos-checkbox">
                  <label className="label-checkbox">
                    <input
                      className="input-checkbox"
                      type="checkbox"
                      id="cbox6"
                      value="Caldera"
                      name="Tipo de reforma6"
                    />{" "}
                    Caldera
                  </label>

                  <label className="label-checkbox">
                    <input
                      className="input-checkbox"
                      type="checkbox"
                      id="cbox7"
                      value="Cocina"
                      name="Tipo de reforma7"
                    />{" "}
                    Cocina
                  </label>

                  <label className="label-checkbox">
                    <input
                      className="input-checkbox"
                      type="checkbox"
                      id="cbox8"
                      value="Parquet"
                      name="Tipo de reforma8"
                    />{" "}
                    Parquet
                  </label>

                  <label className="label-checkbox">
                    <input
                      className="input-checkbox"
                      type="checkbox"
                      id="cbox9"
                      value="Puertas"
                      name="Tipo de reforma9"
                    />{" "}
                    Puertas
                  </label>

                  <label className="label-checkbox">
                    <input
                      className="input-checkbox"
                      type="checkbox"
                      id="cbox10"
                      value="Pintura"
                      name="Tipo de reforma10"
                    />{" "}
                    Pintura
                  </label>
                </div>

                <div className="grupos-checkbox">
                  <label className="label-checkbox">
                    <input
                      className="input-checkbox"
                      type="checkbox"
                      id="cbox11"
                      value="Electricidad"
                      name="Tipo de reforma11"
                    />{" "}
                    Electricidad
                  </label>

                  <label className="label-checkbox">
                    <input
                      className="input-checkbox"
                      type="checkbox"
                      id="cbox12"
                      value="Aire Acondicionado"
                      name="Tipo de reforma12"
                    />{" "}
                    Aire acondicionado
                  </label>

                  <label className="label-checkbox">
                    <input
                      className="input-checkbox"
                      type="checkbox"
                      id="cbox13"
                      value="Obra nueva"
                      name="Tipo de reforma13"
                    />{" "}
                    Obra nueva
                  </label>

                  <label className="label-checkbox">
                    <input
                      className="input-checkbox"
                      type="checkbox"
                      id="cbox14"
                      value="Otros"
                      name="Tipo de reforma14"
                    />{" "}
                    Otros:
                  </label>
                  <textarea
                    className="text-area-checkbox"
                    placeholder="Escribe que deseas..."
                    name="Mensaje de otros tipo de reforma"
                    maxlength="100"
                  ></textarea>
                </div>
              </div>
            </div>
            <div>
              <p className="p-contacto">
                <label>Comentarios adicionales:</label>
              </p>
              <textarea
                className="text-area-comentarios"
                name="Comentarios adicionales"
                placeholder="Aquí puedes explicarnos todos aquellos detalles que desees..."
                maxlength="500"
              ></textarea>
            </div>

            <p className="full full2">
              <button className="boton-enviar" type="submit">
                Enviar
              </button>
            </p>
            <p className="p-asterisco">
              Los campos con asterisco (*) son obligatorios
            </p>
          </form>
        </div>
      </section>
    </SCFormulario>
  );
}
