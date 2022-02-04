import styled from "styled-components";

const SCGracias = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;

 
  }

  .div-obra-nueva{
  background-image: url(
    /materiales.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: white;
    height: 350px;
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


/*GRACIAS*/

.section-gracias{
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
}

.imagen-gracias{
  width:60%;
  height: auto;
  margin-top:50px;
}

.p-gracias{
  margin:10px;
  text-align:center;
}

.boton-enviar{
  margin-top:20px;
   background-color: rgb(236,167,0);
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size:14px;
  cursor: pointer;
  width:150px !important;
  height:30px;
  color: white;
  font-family: 'Arial';
  margin-bottom: 50px;
  outline: none;
  text-align:center;
  text-decoration:none;
  display:flex;
  align-items: center;
  justify-content:center;
 
  

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



/*MEDIA QUERY*/ 
@media (max-width: 1000px) {
  .section-obra-formulario {
    flex-direction:column;
    align-items:center;
  }
}

@media (max-width: 970px) {
  .div-primera-carta {
    flex-direction:column;
    margin:0;
  }

  .div-primera-carta2 {
    flex-direction:column-reverse;
    
  }

  .imagen-carta{
    margin:0;
  }

  .div-primera-subcarta{
  margin-left: 0px;
  flex-direction:column-reverse;
}

  .div-primera-subcarta2{
  margin-right: 0px;
}
}

@media (max-width: 650px) {
  .div-union{
  flex-direction: column;
}
}
`;

export default SCGracias;
