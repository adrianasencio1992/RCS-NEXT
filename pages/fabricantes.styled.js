import styled from "styled-components";

const SCFabricantes = styled.section`
 font-family: 'Arial';
 font-size:15px;
 
  }

  .div-obra-nueva{
  background-image: url(
    /marcas.jpg);
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

.section-fabricantes{
 
}

/* NAVEGADOR*/
.nav{
  display:flex;
  justify-content:center;
  border:0;
  margin-top:50px;

}

.nav-link{
  color:black;
  font-size:15px;
  font-family: 'Oswald';
  border:0;
 
  
}

.nav-link:hover {
  color:rgb(236,167,0);
  text-decoration: underline;
}

.nav-link:focus {
  color:rgb(236,167,0);
  text-decoration: underline;
}

.nav-link:active {
  color:rgb(236,167,0);
  text-decoration: underline;
}

/*CONTENIDO*/

.tab-content{
  margin:30px;
  display:flex;
  justify-content:center;
  
}

.active{
  display:flex;
  justify-content:center;
  flex-wrap: wrap;
  
}

.espaciado{
  padding:10px;
  
}

.imagen{
  height:100px;
  width:150px;
}

.imagen:hover{
  transform: scale(1.2);
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
  background-color: whitesmoke;
  padding-bottom:50px;
}

.section-obra-formulario2{
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:100%;
  background-color: whitesmoke;
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

export default SCFabricantes;
