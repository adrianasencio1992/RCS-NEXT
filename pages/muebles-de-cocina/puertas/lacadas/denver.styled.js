import styled from "styled-components";

const SCDenver = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 

 
  }

  .div-obra-nueva{
  background-image: url(
    /lacadas/denver-cocina.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: white;
    height: 250px;
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
  padding-top: 50px;
  margin-left:30px;
}

.p-obra-nueva{
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-left:30px;
  text-shadow: 2px 2px black;
}

/*Seccion del lineal*/


.section{
  margin-top:20px;
 
}

.section2{
  margin-bottom:50px;
}

.div-links{
margin-left:30px;
margin-right:30px;
}

.link{

text-decoration: none;
color:rgb(237,173,18);

}

.link2{
margin-left: 5px;
text-decoration: none;
color:rgb(237,173,18);
}

.link3{
  text-decoration: none;
}

span{
  margin-left:5px;
  color: grey;
}

.h3-formulario{
  color:black;
  margin-top:60px;
  margin-bottom:20px;
  font-family: 'Oswald','Arial';
  font-size:35px;
  text-align: center;
  
}

.hr-formulario{
  width:100px;
  height:4px;
  color: rgb(236,167,0);
  margin:auto;
}

.h2-formulario{
  color:black;
  margin-top:60px;
  margin-bottom:20px;
  font-family: 'Oswald','Arial';
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  
}

.p-formulario{
  text-align:center;
  margin-top:20px;
}

/*SECCION FOTOS*/


.section-fotos{
margin-top:50px;
}

.div-fotos{
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  margin-top: 50px;
  margin-bottom: 50px;
}

.imagen-1{
  height:500px;
}

.imagen-2{
  height:500px;
}

/*SECCION DATOS*/

.section-datos{
  display:flex;
  flex-direction:row;
  margin: 50px;
  justify-content: space-around;
}

.h3-datos{
  color:black;
  margin-top:60px;
  margin-bottom:20px;
  font-family: 'Oswald','Arial';
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  
}

.tabla{
  width:500px;
  height:400px;
  font-size:14px;
}

tr{
  border-top: black 0.5px solid;
  border-bottom:black 0.5px solid;
}

.derecha{
  text-align:right;
}

.imagen-muestrario{
  width: 350px;
  height: 300px;
}

a{
  cursor:pointer;
}

@media (max-width: 1310px) {
  .imagen-1{
    height: 400px;
  }
  .imagen-2{
    height: 400px;
  }
}

@media (max-width: 1020px) {
  .div-fotos{
    flex-direction:column-reverse;
    justify-content:center;
    align-items:center;
  }
  
  .imagen-1{
    width:400px;
    height:500px;
    
  }

  .imagen-2{
    width:600px;
  }

  .section-datos{
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
}

@media (max-width: 634px) {
  .imagen-2{
    width:90%;
    height:auto 
  }

  .imagen-1{
    width:70%;
    height:auto 
  }
}

@media (max-width: 530px) {
  .tabla{
    width:310px;
  }

  .imagen-muestrario{
    width:300px;
    height:auto;
   
  }
}
`;

export default SCDenver;
