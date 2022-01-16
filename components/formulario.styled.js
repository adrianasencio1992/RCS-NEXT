import styled from "styled-components";

const SCFormulario = styled.section`
font-family: 'Arial';
}

.section-formulario2{
  background: linear-gradient(to right, rgb(236,167,0), white);
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  align-items:center;
  flex-direction:column;
}

.h2-formulario{
  text-align:center;
  font-family: 'Oswald';

}

.p-subtitulo{
  color: black;
  font-family:'Arial';
  text-align:center;
  margin-bottom: 50px;
  
}

.contenedor{
  width: 600px;
  padding: 30px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius:10px;
  
}

.p-titulo{
  font-family:'Oswald';
  color: rgb(236,167,0);
  font-size:20px;
  text-align:center;
  
}

.p-titulo2{
  font-family:'Oswald';
  color: rgb(236,167,0);
  font-size:20px;
  text-align:center;
  margin-top:30px;
}

.p-input{
  margin:0;
}

.p-contacto{
  margin-bottom:5px;
}

.input-formulario{
  width: 100%;
  background-color: whitesmoke;
  border: 0;
  border-radius: 10px;
  height: 30px;
  padding: 10px;
  margin-bottom:15px;
}

.div-labels{
  display:flex;
  justify-content: space-around;
}

.div-labels-2{
display:flex;
align-items:center;
}

.input-label{
  margin-right: 5px;
}

.input-label:active{
  background-color: red;
}

.label-checkbox{
  display:flex;
  flex-direction: row;
  align-items:center;
  margin-right: 5px;
}

.label{
  font-size: 14px;
}

.grupos-general-checkbox{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
 
}

.grupos-checkbox{
  display: flex;
  flex-direction: column;
  
}

.label-checkbox{
  font-size: 14px;
  
}

.input-checkbox{
  margin-right: 5px;
}

.text-area-checkbox{
  width:140px;
  background-color: whitesmoke;
  border-radius: 10px;
  resize:none;
  border: 0;
  outline: none;
  padding: 10px;
  font-size:12px;
}

.text-area-comentarios{
   width:100%;
  background-color: whitesmoke;
  border-radius: 10px;
  resize:none;
  border: 0;
  outline: none;
  padding: 10px;
  font-size:12px;
}

.boton-enviar{
  margin-top:20px;
   background-color: rgb(236,167,0);
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  width:33% !important;
  color: white;
  font-family: 'Arial';
  
 
  

  &:focus,
  &:hover {
    background-color: rgb(254,206,79);
    color: black;
    outline: 0;
    transition: background-color 1s ease-out;
    text-shadow: 0px 0px black;
  }
}
  
}

.full{
  display: flex;
  justify-content: center;
}

.p-asterisco{
  font-size: 10px;
  font-style: italic;
}

@media (max-width: 650px) {
  .contenedor {
     width:500px;
  }
}

@media (max-width: 530px) {
  .contenedor {
     width:450px;
  }

  .p-subtitulo{
    margin-left:20px;
    margin-right:20px;
  }
}

@media (max-width: 470px) {
  .contenedor {
     width:350px;
  }

  .grupos-general-checkbox{
    flex-direction:column; 
    justify-content: center;
    
  }

  .label-checkbox{
    margin-right:15px;
    margin-left:15px;
  }

  .text-area-checkbox{
    width:290px;
  }

  .p-contacto{
    margin-top: 10px;
  }
}


`;

export default SCFormulario;
