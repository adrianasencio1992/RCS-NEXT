import styled from "styled-components";

const SCIndex = styled.section`
  font-family: "Oswald", sans-serif;
  overflow-x: hidden;
  }
  /*SLIDER*/


 div#slider { overflow: hidden; } /* las imágenes no van a salir del márgen de la pantalla*/
div#slider figure img { width: 20%; float: left; }

div#slider figure { 
  position: relative;
  width: 500%;
  margin: 0;
  left: 0;
  text-align: left;
  font-size: 0;
  animation: 30s slidy infinite; /*el movimiento se va a mantener de forma indefinida -infinito-*/
}


/*esta parte del código define el movimiento de las imágenes a la izquierda*/
@keyframes slidy {
0% { left: 0%; }
20% { left: 0%; }
25% { left: -100%; }
45% { left: -100%; }
50% { left: -200%; }
70% { left: -200%; }
75% { left: -300%; }
95% { left: -300%; }
100% { left: -400%; }

}



/*SECCION DE REFORMAS PROVINCIA BARCELONA*/



.h2-provincia{
text-align:center;
margin-top:30px;
margin-bottom:30px;
}

.hr-titulo{
  width:100px;
  height:4px;
  color: rgb(236,167,0);
  margin:auto;
  margin-bottom:45px;
}

.div-general-provincias{
  display:flex;
  flex-direction: row;
  margin-left: 20px;
  margin-right:20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items:flex-start;

 
}

.div-subgeneral{
  display:flex;
  flex-direction:column;
  align-items:center;
  width: 400px;
  height:400px;
  margin-left:20px;
  margin-right:20px;
  text-align:center;
  
}



.img-provincias{
  width:160px;
  height:200px;
  background-color: white;
}

.h3-provincias{
  margin-bottom: 20px;
  font-size: 22px;
}

.hr-provincias{
  width:40px;
  height:2px;
  margin-bottom:20px;
  color: rgb(236,167,0);
 
  
}

.p-provincias{
  color:grey;
  font-family: 'Arial';
  font-size: 15px;
}


/*SECCION DE DISEÑA TU PRESUPUESTO*/

.section-disena-presupuesto{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;
  width: 100vw;
  margin-bottom:100px;
}

.div-disena-presupuesto{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

}

.h2-disena-presupuesto{
  text-align:center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.hr-disena-presupuesto{
  width:100px;
  height:4px;
  color: rgb(236,167,0);
  margin:auto;
  margin-bottom:45px;;
 
}

.p-disena-presupuesto{
  text-align:center;
  margin-bottom:40px;
  margin-left:20px;
  margin-right:20px;
}

.button-disena-presupuesto{
  background-color: rgb(236,167,0);
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  width:120px !important;
  height:40px;
  color: white;
  font-family: 'Arial';
  z-index:10;
  margin-bottom:40px;
}

.button-disena-presupuesto:hover{
background-color: rgb(254,206,79);
    color: black;
    outline: 0;
    transition: background-color 1s ease-out;
    text-shadow: 0px 0px black;
    z-index:10;
}





@media (max-width: 1170px) {
  .imagen-disena-presupuesto {
     width:350px;
     height:300px;
  }
}

@media (max-width: 980px) {
  .imagen-disena-presupuesto {
     width:300px;
     height:250px;
  }
}

@media (max-width: 805px) {
  .imagen-disena-presupuesto {
     width:250px;
     height:200px;
  }
}


@media (max-width: 705px) {
  .imagen-disena-presupuesto {
     display:none;
  }
}


  `;

export default SCIndex;
