import React from "react";
import SCCookies from "./cookies.styled";
import Head from "next/head";

export default function Cookies() {
  if (typeof $ !== "undefined") {
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
    }

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    var user = getCookie("_namecookie");
    if (user == "") {
      $("#js_barra_aceptacion_cookie").css({
        display: "block",
      });
    }
    $("#js_btn_cookie").on("click", function (e) {
      e.preventDefault();
      user = "Luis Rene";
      if (user != "" && user != null) {
        setCookie("_namecookie", user, 30);
        $("#js_barra_aceptacion_cookie").css({
          display: "none",
        });
        console.log("cookie creada: " + user);
      }
    });
    if (user == "") {
      console.log("cookie actual: Null");
    } else {
      console.log("cookie actual: " + user);
    }
  }

  return (
    <SCCookies>
      <Head>
        <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
      </Head>
      <div className="barra-aceptacion-cookie" id="js_barra_aceptacion_cookie">
        <p className="p-cookies">
          {" "}
          Solicitamos su permiso para obtener datos estadísticos de su
          navegación en esta web, en cumplimiento del Real Decreto-ley 13/2012.
          Si continúa navegando consideramos que acepta el uso de cookies.
          <button id="js_btn_cookie" class="btn-cookie btn-link">
            Aceptar
          </button>
        </p>
      </div>
    </SCCookies>
  );
}
