import styled from "styled-components";

const SCPolilaminado = styled.section`
overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 

 
  }

  .div-obra-nueva{
  background-image: url(
    /polilaminado/Lima-cocina.jpg);
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

.p-formulario{
  text-align:center;
  margin-top:20px;
}


/*CARD*/

.section-card{
  margin-top:50px;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
}

.div-card{
  margin-top: 20px;
  margin-bottom: 20px;
  width: 305px;
  height:355px;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  cursor:pointer;
}


.imagen-card{
  width:225px;
  height:315px;
}

.imagen-card:hover{
  transform: scale(1.2);
  transition-duration: 500ms;
}

.h2-card{
  z-index:10;
  font-size:20px;
  text-transform: uppercase;
}

`;

export default SCPolilaminado;
