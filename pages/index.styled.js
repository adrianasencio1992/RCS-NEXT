import styled from "styled-components";

const SCIndex = styled.section`
  font-family: "Oswald", sans-serif;
  }
  /*SLIDER*/
 div#slider { overflow: hidden; } /* las imágenes no van a salir del márgen de la pantalla*/
div#slider figure img { width: 20%; float: left; }

div#slider figure { 
  position: relative;
  width: 500%;
  margin: 0;
  left: 0;
  text-align: left;
  font-size: 0;
  animation: 30s slidy infinite; /*el movimiento se va a mantener de forma indefinida -infinito-*/
}


/*esta parte del código define el movimiento de las imágenes a la izquierda*/
@keyframes slidy {
0% { left: 0%; }
20% { left: 0%; }
25% { left: -100%; }
45% { left: -100%; }
50% { left: -200%; }
70% { left: -200%; }
75% { left: -300%; }
95% { left: -300%; }
100% { left: -400%; }
}
/*Formulario*/
@import url( 'https://fonts.googleapis.com/css?family=Roboto');

*,
*::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.section-formulario{
background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/fondo-arquitectura.jpg");

}

.contenedor {
  max-width: 1170px;
  margin: 0 auto 1rem;
  padding: 1.5rem;
  
}

.wrapper {
  box-shadow: 0 0 20px 0 rgba($color-principal, .7);
  border-radius: 5px;
  @media screen and(min-width: $bk1) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}

.servicios {
  list-style: none;
  text-align: center;
  @media screen and(min-width: $bk1) {
    text-align: left;
  }
}



.info-empresa {
  padding: 1rem;
  background-color: lighten($color-principal, 50%);

  h3 {
    @media screen and(min-width: $bk1) {
      text-align: left;
      margin-bottom: 0.5rem;
    }
    text-align: center;
  }
}

.nombre-empresa {
  color: darken($color-principal, 15%);
}

.contacto {
  padding: 1rem;
  background-color: lighten($color-principal, 60%);

  h3 {
    margin-bottom: 1rem;
  }
}

.formulario {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.25rem;

  label {
    display: block;
  }

  button,
  input,
  textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid lighten($color-principal, 50%);
  }

  textarea {
    resize: none;
  }
}

.full {
  grid-column: 1 / 3;
  
}

.full2{
  display:flex;
  justify-content:center;
}

.boton-enviar {
  background-color: rgb(236,167,0);
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  width:33% !important;
  

  &:focus,
  &:hover {
    background-color: rgb(254,206,79);
    color: #fff;
    outline: 0;
    transition: background-color 1s ease-out;
  }
}

.input-formulario{
  
  outline:none;
}
  `;

export default SCIndex;
