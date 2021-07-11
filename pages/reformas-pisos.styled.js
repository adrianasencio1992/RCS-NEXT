import styled from "styled-components";

const SCPisos = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 
  }

  .div-obra-nueva{
  background-image: url(
    /piso.jpg);
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

  .div-general-obra{
  width:70%;
}

.section-obra-formulario{
  display:flex;
  flex-direction:row;
}

@media (max-width: 1000px) {
  .section-obra-formulario {
    flex-direction:column;
    align-items:center;
  }
}

.div-general-obra{
  margin:30px 80px;;
  
}

.p1-obra{
  margin-top:30px;
  text-align: justify;
  margin-bottom: 30px;
}

.h2-formulario{
  color:black;
  margin-top:60px;
  margin-bottom:20px;
  font-family: 'Oswald','Arial';
  text-align: center;
  
}


.hr-formulario{
  width:100px;
  height:4px;
  color: rgb(236,167,0);
  margin:auto;
}

.div-primera-carta{
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
  
}

@media (max-width: 650px) {
  .div-primera-carta {
    flex-direction:column-reverse;
    margin:0;
    
  }
}

.div-primera-carta2{
  display:flex;
  flex-direction: row;
  align-items: center;
}

@media (max-width: 650px) {
  .div-primera-carta2 {
    flex-direction:column;
    
  }
}

.div-primera-subcarta{
  margin-left: 60px;
}
@media (max-width: 650px) {
  .div-primera-subcarta{
    margin-left:0;
    margin-top:20px;
  }
}


.div-primera-subcarta2{
  margin-right: 60px;
}

@media (max-width: 650px) {
  .div-primera-subcarta2 {
    margin:0;;
    
  }
}

.imagen-carta{
  width:200px;
  height:200px;
  margin-top:35px;
  
}

@media (max-width: 650px) {
  .imagen-carta{
   margin:0;
  }
}


.p2-obra{
  text-align: justify;
  text-align:center;
  font-family: "Oswald", sans-serif;
  font-size:25px;
  color: rgb(236,167,0);
  
}

.p3-obra{
  text-align: justify;
  
}

.p3-obra2{
  text-align: justify;
  
  
}


@import url( 'https://fonts.googleapis.com/css?family=Roboto');

*,
*::before,
::after {
  box-sizing: border-box;
  

}

.contenedor {
  width: 30%;
  margin: 0;;
  background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/fondo-arquitectura2.jpg");
  font-family: "Oswald", sans-serif;
}

@media (max-width: 1000px) {
  .contenedor {
    width:100%;
  }
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
    margin-top: 40px;

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
}


}`;

export default SCPisos;
