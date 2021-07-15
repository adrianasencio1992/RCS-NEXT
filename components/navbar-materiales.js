import React from "react";
import SCNavbarMateriales from "./navbar-materiales.styled";

export default function NavbarMateriales() {
  return (
    <SCNavbarMateriales>
      <div class="flex-shrink-0 p-3 bg-white">
        <ul class="list-unstyled ps-0">
          <li class="mb-1">
            <button
              class="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              Cocinas
            </button>
            <div class="collapse show" id="home-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" class="link-dark rounded">
                    Muebles de cocina
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Electrodomésticos
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Encimeras de cocina
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Fregaderos
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Grifos de cocina
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button
              class="btn btn-toggle align-items-center rounded"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              Baños
            </button>
            <div class="collapse show" id="dashboard-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" class="link-dark rounded">
                    Muebles de baño
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Mamparas de ducha y bañeras
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Platos de ducha
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    WC
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Grifería de baño
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Accesorios para la ducha
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Espejos para baño
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Accesorios y complementos de baño
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Bañeras
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Hidromasaje y Wellnes
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Lavabos
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Iluminación para el baño
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Extractores
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button
              class="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              Cerámica
            </button>
            <div class="collapse" id="orders-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" class="link-dark rounded">
                    Azulejos cerámicos
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Suelos cerámicos
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Cerámica para exteriores y piscinas
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Cenefas y decoraciones cerámicas
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li class="mb-1">
            <button
              class="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="false"
            >
              Climatización y calefacción
            </button>
            <div class="collapse" id="account-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" class="link-dark rounded">
                    Aires acondicionados
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Calderas y radiadores de agua
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Termos eléctricos
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Calentadores de agua
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Radiadores eléctricos
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <a
              href="#"
              class="btn btn-toggle align-items-center rounded collapsed"
              aria-expanded="false"
            >
              Iluminación
            </a>
          </li>
          <li class="mb-1">
            <a
              href="#"
              class="btn btn-toggle align-items-center rounded collapsed"
              aria-expanded="false"
            >
              Parquet
            </a>
          </li>
          <li class="mb-1">
            <a
              href="#"
              class="btn btn-toggle align-items-center rounded collapsed"
              aria-expanded="false"
            >
              Tejado
            </a>
          </li>
        </ul>
      </div>
    </SCNavbarMateriales>
  );
}
