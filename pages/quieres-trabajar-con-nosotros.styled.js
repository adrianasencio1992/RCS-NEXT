import styled from "styled-components";

const SCTrabajar = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 
  }

  .div-obra-nueva{
  background-image: url(
    /trabajar.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: white;
    height: 400px;
    overflow-x: hidden;
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

.hr-titulo{
  width:100px;
  height:4px;
  color: rgb(236,167,0);
  margin:auto;
  margin-bottom:15px;
}

.p1-obra{
  margin-top:30px;
  text-align: justify;
  margin-bottom: 30px;
}




/*SECCION Y FORMULARIO*/

.div-union{
  display:flex;
  flex-direction: row;
}

  .div-general-obra{
  width:90%;
  display:flex;
  justify-content:center;
}

.section-obra-formulario{
  display:flex;
  flex-direction:row;
  justify-content:center;
  width:100%;
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

.imagen-carta{
  width:200px;
  height:200px;
  margin-top:35px;
  
}

.div-primera-carta2{
  display:flex;
  flex-direction: row;
  align-items: center;
}


.div-primera-subcarta{
  margin-left: 60px;
}


.div-primera-subcarta2{
  margin-right: 60px;
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

/*SECTION ESCOGER*/

.section-escoger{
  background-color: whitesmoke;
  padding-bottom: 50px;
  
}

.h2-escoger{
  color:black;
  padding-top:60px;
  margin-bottom:20px;
  font-family: 'Oswald','Arial';
  text-align: center;
}

.hr-escoger{
  width:100px;
  height:4px;
  color: rgb(236,167,0);
  margin:auto;
  margin-bottom:35px;
}

.div-general-circulos{
  display:flex;
  flex-direction: row;
  justify-content:center;
}

.div-unidad-circulo{
  width: 200px;
  height: 35<0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin:30px;
}

.div-circulo{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content:center;
  align-items:center;
  margin-bottom: 20px;
  border: 2px solid rgb(236,167,0);
}

.div-circulo:hover{
background-color: rgb(236,167,0);
border: 3px solid white;
}

.p-circulo{
  margin:0;
  padding: 30px;
  color: rgb(236,167,0);
  font-size:30px;
  font-family: 'Oswald','Arial';
}

.p-circulo:hover{
  color:white;
}

.p-texto{
  margin:0;
  text-align: justify;
}

.p-escoger{
  text-align: justify;
  text-align:center;
  font-family: "Oswald", sans-serif;
  font-size:25px;
  color: rgb(236,167,0);
  margin-bottom:20px;
}

/*MEDIA QUERY*/
@media (max-width: 1040px) {
  .div-general-circulos {
    flex-wrap:wrap;
    align-items:center;
  }
}

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

export default SCTrabajar;
