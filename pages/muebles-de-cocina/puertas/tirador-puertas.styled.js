import styled from "styled-components";

const SCTiradorPuertas = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 

 
  }

  .div-obra-nueva{
  background-image: url(
    /puertas-tirador-index.jpg);
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

/*Seccion del lineal*/


.section{
  margin-top:20px;
  margin-bottom:50px;
}

.link{
margin-left: 50px;
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

.imagen{
  height:150px;
  width:100px;
}

.div{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  margin-right:20px;
  margin-left:20px;
}



.lb {
	display: none;
	position: fixed;
	z-index: 9999;
	width: 100%;
	height: 100%;
	top: 0%;
	left: 0%;
	background: rgba(0,0,0,0.8);
  text-align:center;
}

.lb img {
	width: 250px;
	height: 400px;
  position: absolute;
  top: 20%;
  left: 40%;
	
}

.lb:target {
	outline: none;
	display: block;
}

a.lb:hover {cursor:default;}
img:hover {cursor:pointer;}



`;

export default SCTiradorPuertas;
