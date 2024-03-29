import styled from "styled-components";

const SCTiradorIntegrado = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 

 
  }


  .div-obra-nueva{
  background-image: url(
    /tirador-integrado/cocina-tirador-integrado.jpg);
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

.p-formulario{
  text-align:center;
  margin-top:20px;
}


/*LightBox*/ 

.p-imagen{
text-align:center;
margin-top: 10px;
font-family: 'Oswald';
font-size:14px;
}

figure {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        vertical-align: baseline;
        background: transparent
    }
/*Estilos de la galeria*/
.galeria {
 width: 90%;
 margin: auto;
 list-style: none;
 padding: 20px;
 box-sizing: border-box;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
}
.galeria li {
 margin: 5px 5px 2em 5px;
 background: #fff;
}
.galeria img {
 position: relative;
 width: 140px;
 height: 210px;
 border: solid 7px #fff;
 object-fit: cover;
 transition: all .2s ease-in-out;
 -webkit-box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);
box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);
  -moz-box-sizing: border-box;
 box-sizing: border-box;
}

.galeria img:hover {
  transform: scale(1.03);
  opacity: 1;
  -webkit-animation: flash 1.5s;
  animation: flash 1.5s;
}

/*GALERIA 2*/
.galeria2 {
 width: 90%;
 margin: auto;
 list-style: none;
 padding: 20px;
 box-sizing: border-box;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
}
.galeria2 li {
 margin: 5px 5px 2em 5px;
 background: #fff;
}
.galeria2 img {
 position: relative;
 width: 150px;
 height: 240px;
 border: solid 7px #fff;
 object-fit: cover;
 transition: all .2s ease-in-out;
 -webkit-box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);
box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);
  -moz-box-sizing: border-box;
 box-sizing: border-box;
}

.galeria2 img:hover {
  transform: scale(1.03);
  opacity: 1;
  -webkit-animation: flash 1.5s;
  animation: flash 1.5s;
}

/*GALERIA 3*/
.galeria3 {
 width: 90%;
 margin: auto;
 list-style: none;
 padding: 20px;
 box-sizing: border-box;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
}
.galeria3 li {
 margin: 5px 5px 2em 5px;
 background: #fff;
}
.galeria3 img {
 position: relative;
 width: 200px;
 height: 240px;
 border: solid 7px #fff;
 object-fit: cover;
 transition: all .2s ease-in-out;
 -webkit-box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);
box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);
  -moz-box-sizing: border-box;
 box-sizing: border-box;
}

.galeria3 img:hover {
  transform: scale(1.03);
  opacity: 1;
  -webkit-animation: flash 1.5s;
  animation: flash 1.5s;
}

/*GALERIA 4*/
.galeria4 {
 width: 90%;
 margin: auto;
 list-style: none;
 padding: 20px;
 box-sizing: border-box;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
}
.galeria4 li {
 margin: 5px 5px 2em 5px;
 background: #fff;
}
.galeria4 img {
 position: relative;
 width: 250px;
 height: 350px;
 border: solid 7px #fff;
 object-fit: cover;
 transition: all .2s ease-in-out;
 -webkit-box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);
box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);
  -moz-box-sizing: border-box;
 box-sizing: border-box;
}

.galeria4 img:hover {
  transform: scale(1.03);
  opacity: 1;
  -webkit-animation: flash 1.5s;
  animation: flash 1.5s;
}

@-webkit-keyframes flash {
  0% {
    opacity: .4;
  }
  100% {
    opacity: 1;
  }
}
@keyframes flash {
  0% {
    opacity: .4;
  }
  100% {
    opacity: 1;
  }
}
/*Para empezar, lbox necesita una posicion fija y ocupar todo su contenedor*/
.lbox {
    position: fixed;
    display: block;
    overflow: hidden;
    background: rgba(0,0,0,0.8);
    z-index: 9999;
    -webkit-font-smoothing: antialiased;
    visibility: hidden;
}
/*todas las transiciones (si tuviera más)*/
.lbox.fade:target > img {
    -webkit-transition: opacity 1s;
       -moz-transition: opacity 1s;
         -o-transition: opacity 1s;
            transition: opacity 1s;
}

/*Para no repetir codigo, lo agrupamos aquí*/
.lbox, .lbox > img, .lbox > div {top: 0;left: 0;right: 0;bottom: 0;}

/*Al dar clic, el contenedor lbox que se encuentre "target" se mostrará*/
.lbox {top: -100%;}
.lbox:target {top: 0;visibility: visible;}

/*y creamos un boton para cerrarlo*/
.lbox > a {
  margin-top: 15px; 
  margin-right: 20px;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  font-size: 30px;
  text-decoration: none;
  overflow: visible;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  display: block;
  outline: none;
  padding: 0;
  z-index: 1046;
  -webkit-box-shadow: none;
  box-shadow: none;
   opacity: 0.65;
  filter: alpha(opacity=65);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.lbox > a:hover {
  opacity: 1
}

/*tanto los videos como las imágenes necesitan una posicion absoluta*/
.lbox > img, .lbox > div {
    position: absolute;
    margin: auto;
    box-shadow: 0 3px 3px -1px rgba(0, 0, 0, 0.3), 0 1px 0px 0px rgba(0, 0, 0, 0.05);
}

/*Perto solo las imágenes tienen un maximo en alto y ancho*/
.lbox > img {
  max-width: 80%;
  max-height: 80%;
  display: block;
  line-height: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.lbox > .vid iframe, .lbox > .vid object, .lbox > .vid embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
/*mientras que los videos tienen su propio ancho y alto*/
.lbox > .vid {
    max-width: 800px;
    height: 450px;
    width:100%;
}
/*y los textos tambien*/
.lbox > .text::before {
  content: "";
background-image: url(https://4.bp.blogspot.com/-QQOaYOTeYvM/W-3fn4kuV2I/AAAAAAAADzA/HMdOeim-6xAcf8XuDkzWIEufmLazLfbigCLcBGAs/s1600/10PawsDogPattern.png);
    background-repeat: repeat;
    background-size: 45%;
    background-position: 50% 50%;
}
.lbox > .text {
   position: relative;
    max-width: 60%;
    max-height: 50%;
    top: 20%;
    bottom: auto;
    padding: 2em;
    background: #eee;
    color: #757575;
    width:100%;
    overflow-y: scroll;
    display: block;
    font-family: 'Raleway', sans-serif;
    line-height: 20pt;
    text-align: left;
    font-weight: 400;
}
.lbox > .text > img {
 width: 100%;
 height: auto;
}

/*Pero aparecen según el efecto*/

/*fade*/
.lbox.fade > img, .lbox.fade > div {
    opacity: 0;
}
.lbox.fade:target > img, .lbox.fade:target > div {
    opacity: 1;
}

/*bounce*/
@-webkit-keyframes bounce {
    0% {-webkit-transform: scale(0)}
    50% {-webkit-transform: scale(1.1)}
    100% {-webkit-transform: scale(1)}
}
@-moz-keyframes bounce {
    0% {-moz-transform: scale(0)}
    50% {-moz-transform: scale(1.1)}
    100% {-moz-transform: scale(1)}
}
@keyframes bounce { 
    0% {transform: scale(0)}
    50% {transform: scale(1.1)}
    100% {transform: scale(1)}
}

.lbox.bounce:target > img, .lbox.bounce:target > div {
    -webkit-animation: bounce 1s none;
       -moz-animation: bounce 1s none;
         -o-animation: bounce 1s none;
            animation: bounce 1s none;
}

/*flip*/
@-webkit-keyframes flip {
    0% {-webkit-transform: perspective(600px) rotate3d(1, 0, 0, 20deg);opacity: 0;}
    50% {-webkit-transform: perspective(600px) rotate3d(1, 0, 0, -5deg);opacity: 1;}
    100% {-webkit-transform: perspective(600px) rotate3d(1, 0, 0, 0);opacity: 1;}
}
@-moz-keyframes flip {
    0% {-moz-transform: perspective(600px) rotate3d(1, 0, 0, 20deg);opacity: 0;}
    50% {-moz-transform: perspective(600px) rotate3d(1, 0, 0, -5deg);opacity: 1;}
    100% {-moz-transform: perspective(600px) rotate3d(1, 0, 0, 0);opacity: 1;}
}
@keyframes flip { 
    0% {transform: perspective(600px) rotate3d(1, 0, 0, 20deg);opacity: 0;}
    50% {transform: perspective(600px) rotate3d(1, 0, 0, -5deg);opacity: 1;}
    100% {transform: perspective(600px) rotate3d(1, 0, 0, 0);opacity: 1;}
}

.lbox.flip:target > img, .lbox.flip:target > div {
    -webkit-animation: flip 1s none;
       -moz-animation: flip 1s none;
         -o-animation: flip 1s none;
            animation: flip 1s none;
}

/*Algunos estilos para videos según la resolución*/
@media only screen and (max-width: 840px) {
.lbox > .vid {height: 400px;}
}
@media only screen and (max-width: 730px) {
.lbox > .vid {height: 350px;}
}
@media only screen and (max-width: 620px) {
.cream-slider li.tab > div {display: none;}
.lbox > .vid {height: 300px;}
}


.lbox:target > img, .lbox:target > div {
    border: 12px solid white;
}

.lbox > span a {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none; 
}
.lbox > span a {
 color: #fff;
 font-size: 50px;
 text-decoration: none;
  overflow: visible;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  display: block;
  outline: none;
  padding: 0;
  z-index: 1046;
  -webkit-box-shadow: none;
  box-shadow: none; 
  position: absolute;
  opacity: 0.65;
  filter: alpha(opacity=65);
  margin-left: 10px;
  top: 55%;
  margin-top: -55px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.lbox > span a:hover, .lbox > span a:focus {
    opacity: 1;
    filter: alpha(opacity=100); 
}
.lbox > span a:active {
    margin-top: -54px; 
}
.lbox > #right a {
  right: 0; 
  margin-right: 10px; 
}
.lbox > h2 {
  opacity: 0.65;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  font-family: 'Raleway', sans-serif;
}
.lbox:target {
  /** Eliminar el esquema predeterminado del navegador  */
  outline: none;

  /** Mostrar lightbox **/
  display: block;
}
#flex-container {
  margin-top: 55px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url(#);
}
footer {
  align-self: flex-end;
  color: #555;
  padding: 2em;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 12px;
}
footer span p {
  color: #555;
  text-align: center;
  padding-top: 1em;
  letter-spacing: 15px;
  font-size: 13px;
}
footer span a {
  font-weight: normal;
  color: #555;
  transition: all .2s ease-in-out;
}
#demo-menu:hover, #demo-share:hover, footer span a:hover {
  color: #999;
}
`;

export default SCTiradorIntegrado;
