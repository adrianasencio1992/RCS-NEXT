import styled from "styled-components";

const SCPuertasCocina = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 

 
  }

  .div-obra-nueva{
  background-image: url(
    /puertas-cocina.jpg);
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
  margin-bottom:50px;
}

.div-links{
  margin-left:30px;
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

.container{
  height: 50%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  display:flex;
  flex-wrap:wrap;
}
.border{
  height: 219px;
  width: 140px;
  background: transparent;
  border-radius: 10px;
  transition: border 1s;
  position: relative;
  
  &:hover{
    border: 1px solid white;
    
}
}
.card{
  height: 229px;
  width: 150px;
  background: grey;
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  background: black;
  box-shadow: 0 70px 63px -60px #000000; 
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin:20px;
  border: 2px solid rgb(191, 191, 191);
}
.card0{
  background: url('/lacadas/Cadaqués.jpg') center center no-repeat;
  background-size: 190px;
  

  &:hover{
    background: url('/lacadas/Cadaqués.jpg') left center no-repeat;
    background-size: 265px;

    h2{
      opacity: 1;
}
    .fa{
      opacity: 1;
}
}
}
.card1{
  background: url('/madera/Cambridge.jpg') center center no-repeat;
  background-size: 190px;

  &:hover{
    background: url('/madera/Cambridge.jpg') left center no-repeat;
    background-size: 265px;

    h2{
      opacity: 1;
}
    .fa{
      opacity: 1;
}
}
}

.card2{
  background: url('/polilaminado/Lima.jpg') center center no-repeat;
  background-size: 190px;

  &:hover{
    background: url('/polilaminado/Lima.jpg') left center no-repeat;
    background-size: 265px;

    h2{
      opacity: 1;
}
    .fa{
      opacity: 1;
}
}
}

.card3{
  background: url('/canteado/vega.jpg') center center no-repeat;
  background-size: 190px;

  &:hover{
    background: url('/canteado/vega.jpg') left center no-repeat;
    background-size: 265px;

    h2{
      opacity: 1;
}
    .fa{
      opacity: 1;
}
}
}

h2{
  font-family: 'Oswald';
  color: black;
  margin: 14px;
  opacity: 0;
  transition: opacity 1.3s;
  font-size:20px;
}


`;

export default SCPuertasCocina;
