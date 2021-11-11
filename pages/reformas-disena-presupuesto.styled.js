import styled from "styled-components";

const SCDiseñaPresupuesto = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 
  }

  .div-obra-nueva{
  background-image: url(
    /disena-presupuesto2.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: white;
    height: 400px;
    overflow-x: hidden;
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

.p1-obra{
  text-align: justify;
  margin-bottom: 30px;
  margin: 30px 100px;
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


.section-obra-formulario{
  background-color: rgb(254,251,241);
  padding-top:1px;
}

/*seccion Calcula el precio de tu reforma*/
.div-general-input{
  display:flex;
  flex-direction: row;
  justify-content:space-evenly;
  flex-wrap:wrap;
}

.div-subgeneral-input{
  display:flex;
  flex-direction: column;
  width:300px;
  border-radius:20px;
  margin-bottom:50px;
  margin-left: 10px;
  margin-right: 10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 2px 15px -1px;
}

.div-trigeneral-input{
  display:flex;
  flex-direction: row;
  align-items:center;
  margin-bottom:5px;
  margin-left: 50px;
}

.titulo-input{
  text-align:center;
  font-family: 'Oswald';
  color: rgb(236,167,0);
  font-size:20px;
  margin-top:10px;
}

.caja3{
  display:flex;
  flex-direction:row;
  margin-bottom:10px;
}

input{
  margin-right:5px;
}

.div-total{
  margin-left: 100px;
  margin-bottom: 50px;
}

.input-total{
  width:200px;
  border-radius: 10px;
  padding-left: 10px;
  outline: none;
 border: 1px solid grey;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 2px 15px -1px;}
  
  
}

.p-total{
  font-family: 'Oswald';
  font-size:20px;
 
}

.input-div{
  display:flex;
  align-items:center;
  padding-left: 10px;
  width: 200px;
  height:30px;
  border-radius:5px;
  border: 1px solid black;
}



/*Formulario*/
@import url( 'https://fonts.googleapis.com/css?family=Roboto');



.section-formulario{
background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/fondo-arquitectura.jpg");
font-family: 'Oswald';
}

.contenedor {
  max-width: 1170px;
  margin: 0 auto 0rem;
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
`;

export default SCDiseñaPresupuesto;
