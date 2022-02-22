import styled from "styled-components";

const SCNube = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 

 
  }

  .div-obra-nueva{
  background-image: url(
    /madera/Calabria-cocina.jpg);
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
  text-transform: lowercase;
}

.h1-obra-nueva:first-letter {
    text-transform: uppercase;
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
  text-transform:uppercase;
  
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
  margin-left: 50px;
  margin-right: 50px;
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
  width:400px;
  height:400px;
  font-size:14px;
}

tr{
  border-top: black 0.5px solid;
  border-bottom:black 0.5px solid;
}

.derecha{
  text-align:right;
  text-transform:lowercase;
}

.derecha:first-letter {
    text-transform: uppercase;
}

.imagen-muestrario{
  width: 350px;
  height: 300px;
}

a{
  cursor:pointer;
}

.div-muestra{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  margin-bottom:50px;
}

/*CAROUSEL*/

.outer-wrapper {
  max-width: 600px;
  margin: 50px auto;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
}

.s-wrap {
  width: 100%;
  height:auto;
  margin-bottom: 50px;
  padding-bottom: 94%;
  position: relative;
  border: 10px solid #fff;
  background-color: #efefe8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  
}
.s-wrap > input {
  display: none;
}
.s-wrap .s-content {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 500%;
  height: 100%;
  font-size: 0;
  list-style: none;
  transition: transform 1s;
  
}
.s-wrap .s-item {
  display: inline-block;
  width: 20%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
}
.s-wrap .s-item-1 {
  background-image: url(/madera/colores1.jpg);
}
.s-wrap .s-item-2 {
  background-image: url("/madera/colores.jpg");
}
.s-wrap .s-item-3 {
  background-image: url("/madera/colores2.jpg");
}
.s-wrap .s-item-4 {
  background-image: url("/madera/colores5.jpg");
}
.s-wrap .s-item-5 {
  background-image: url("/madera/colores4.jpg");
}

.s-type-1 .s-control {
  position: absolute;
  bottom: 18px;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  transition-timing-function: ease-out;
}
.s-type-1 .s-control > label[class^="s-c-"] {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid #999;
  background-color: #efefe8;
  cursor: pointer;
}
.s-type-1 .s-nav label {
  display: none;
  position: absolute;
  top: 50%;
  padding: 5px 10px;
  transform: translateY(-50%);
  cursor: pointer;
}
.s-type-1 .s-nav label::before, .s-type-1 .s-nav label::after {
  content: "";
  display: block;
  width: 8px;
  height: 24px;
  background-color: #fff;
}
.s-type-1 .s-nav label::before {
  margin-bottom: -12px;
}
.s-type-1 .s-nav label.left {
  left: 20px;
}
.s-type-1 .s-nav label.left::before {
  transform: rotate(45deg);
}
.s-type-1 .s-nav label.left::after {
  transform: rotate(-45deg);
}
.s-type-1 .s-nav label.right {
  right: 20px;
}
.s-type-1 .s-nav label.right::before {
  transform: rotate(-45deg);
}
.s-type-1 .s-nav label.right::after {
  transform: rotate(45deg);
}
.s-type-1 #s-1:checked ~ .s-content {
  transform: translateX(0%);
}
.s-type-1 #s-1:checked ~ .s-control .s-c-1 {
  background-color: #333;
}
.s-type-1 #s-1:checked ~ .s-nav .s-nav-1 {
  display: block;
}
.s-type-1 #s-2:checked ~ .s-content {
  transform: translateX(-20%);
}
.s-type-1 #s-2:checked ~ .s-control .s-c-2 {
  background-color: #333;
}
.s-type-1 #s-2:checked ~ .s-nav .s-nav-2 {
  display: block;
}
.s-type-1 #s-3:checked ~ .s-content {
  transform: translateX(-40%);
}
.s-type-1 #s-3:checked ~ .s-control .s-c-3 {
  background-color: #333;
}
.s-type-1 #s-3:checked ~ .s-nav .s-nav-3 {
  display: block;
}

.s-type-1 #s-4:checked ~ .s-content {
  transform: translateX(-60%);
}
.s-type-1 #s-4:checked ~ .s-control .s-c-4 {
  background-color: #333;
}
.s-type-1 #s-4:checked ~ .s-nav .s-nav-4 {
  display: block;
}

.s-type-1 #s-5:checked ~ .s-content {
  transform: translateX(-80%);
}
.s-type-1 #s-5:checked ~ .s-control .s-c-5 {
  background-color: #333;
}
.s-type-1 #s-5:checked ~ .s-nav .s-nav-5 {
  display: block;
}

}

@keyframes slider-animation {
  0%,
    7% {
    transform: translateX(0%);
  }
  12.5%,
    19.5% {
    transform: translateX(-20%);
  }
  25%,
    32% {
    transform: translateX(-40%);
  }
  37.5%,
    44.5% {
    transform: translateX(-60%);
  }
  50%,
    57% {
    transform: translateX(-80%);
  }
  62.5%,
    69.5% {
    transform: translateX(-60%);
  }
  75%,
    82% {
    transform: translateX(-40%);
  }
  87.5%,
    94.5% {
    transform: translateX(-20%);
  }
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
    width:90%;
    height: auto;
    
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

export default SCNube;
