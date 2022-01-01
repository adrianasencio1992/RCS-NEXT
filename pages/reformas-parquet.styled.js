import styled from "styled-components";

const SCParquet = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 
  }

  .div-obra-nueva{
  background-image: url(
    /parquet.jpg);
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
  margin-bottom:10px;
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
`;

export default SCParquet;
