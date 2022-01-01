import styled from "styled-components";

const SCFilosofia = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 
  }

  .div-obra-nueva{
  background-image: url(
    /ajedrez.jpg);
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


.section-obra-formulario{
  background-color: rgb(254,251,241);
  padding-top:1px;
}

.h2-principal{
  color:white;
  margin-top:60px;
  margin-bottom:20px;
  font-family: 'Oswald','Arial';
  text-align: center; 
}

.hr-principal{
  width:100px;
  height:4px;
  color: white;
  margin:auto;
  margin-bottom: 50px;
}


/*Seccion mision */

.section-filosofia{
  margin-top: 120px;
}

.div-contenedor-mision{
  display:flex;
  flex-direction: row;
  
}

.foto{
  width: 400px;
  height:300px;
  object-fit: cover;
  position: relative;
  top: 50px;
  left:50px;

}

.div-contenedor-texto{
  background: linear-gradient(to right, rgb(236,167,0),rgb(236,167,0) , white);
  width:100%;
  padding-left: 100px;
  padding-right: 70px;
}


`;

export default SCFilosofia;
