import React from "react";
import SCSliderCocinas from "./slider-cocinas.styled";

export default function SliderCocinas() {
  return (
    <SCSliderCocinas>
      <div class="section full-height over-hide px-4 px-sm-0">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-lg-10 col-xl-8 align-self-center padding-tb">
              <div class="section mx-auto text-center slider-height-padding">
                <input
                  class="checkbox frst"
                  type="radio"
                  id="slide-1"
                  name="slider"
                  checked
                />
                <label for="slide-1"></label>
                <input
                  class="checkbox scnd"
                  type="radio"
                  name="slider"
                  id="slider-2"
                  checked
                />
                <label for="slider-2"></label>
                <input
                  class="checkbox thrd"
                  type="radio"
                  name="slider"
                  id="slider-3"
                  checked
                />
                <label for="slider-3"></label>
                <input
                  class="checkbox foth"
                  type="radio"
                  name="slider"
                  id="slider-4"
                  checked
                />
                <label for="slider-4"></label>
                <input
                  class="checkbox cinc"
                  type="radio"
                  name="slider"
                  id="slider-5"
                  checked
                />
                <label for="slider-5"></label>
                <input
                  class="checkbox sis"
                  type="radio"
                  name="slider"
                  id="slider-6"
                  checked
                />
                <label for="slider-6"></label>
                <input
                  class="checkbox set"
                  type="radio"
                  name="slider"
                  id="slider-7"
                  checked
                />
                <label for="slider-7"></label>
                <input
                  class="checkbox vuit"
                  type="radio"
                  name="slider"
                  id="slider-8"
                  checked
                />
                <label for="slider-8"></label>
                <input
                  class="checkbox nou"
                  type="radio"
                  name="slider"
                  id="slider-9"
                  checked
                />
                <label for="slider-9"></label>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SCSliderCocinas>
  );
}
