import styled from "styled-components";

const SCObraNueva = styled.section`
 width:100vw;
 overflow-x: hidden;
 
  }

  .div-obra-nueva{
  background-image: url(
    /casa.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: white;
    height: 400px;
    overflow-x: hidden;
  }

  @media only screen and (max-width: 500px) {

.div-obra-nueva {
  background-attachment: inherit;
}
  }
  
.h1-obra-nueva{
  color:rgb(236,167,0);
  text-shadow: 2px 2px black;
  font-size: 50px;
  font-weight: 700;
  padding-top: 100px;
  margin-left:30px;
}

.p-obra-nueva{
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-left:30px;
  text-shadow: 2px 2px black;
}

/*SECCION Y FORMULARIO*/

${
  "" /* .div-general-obra{
  width:50%;
}

.section-obra-formulario{
  display:flex;
  flex-direction:row;
  
}

@import url( 'https://fonts.googleapis.com/css?family=Roboto');

*,
*::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.contenedor {
  width: 50%;
  margin: 0;;
  background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/fondo-arquitectura.jpg");
  
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
  color: white;
  font-family: 'Arial';
  font-weight:100;
 
  

  &:focus,
  &:hover {
    background-color: rgb(254,206,79);
    color: black;
    outline: 0;
    transition: background-color 1s ease-out;
    text-shadow: 0px 0px black;
  }
}

.input-formulario{
  
  outline:none;
} */
}
  `;

export default SCObraNueva;
