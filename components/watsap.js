import React from "react";
import SCWatsap from "./watsap.styled";
import Link from "next/dist/client/link";

export default function Watsap() {
  if (typeof $ !== "undefined") {
    // browser code por si algo no funciona ponerlo despues de typeof y escribir le codigo dentro
    var scroll_offset = 120;
    $(window).scroll(function () {
      var $this = $(window);
      if ($(".sticky-btn").length) {
        if ($this.scrollTop() > scroll_offset) {
          $(".sticky-btn").addClass("revealed");
        } else {
          $(".sticky-btn").removeClass("revealed");
        }
      }
    });
  }
  return (
    <SCWatsap>
      <div id="contact-wa">
        <Link href="https://api.whatsapp.com/send?phone=+34674686045&text=Hola, Nececito mas informacion!">
          <a target="blank" class="sticky-btn">
            <img src="https://byjaris.com/code/icons/whatsapp-icon.svg" />
          </a>
        </Link>
      </div>
      <script src="https://byjaris.com/code/js/jquery.min.js"></script>
    </SCWatsap>
  );
}
