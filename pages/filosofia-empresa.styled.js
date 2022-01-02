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

/*Seccion mision-vision-valores*/

.h2-principal{
  color:white;
  margin-top:40px;
  margin-bottom:30px;
  font-family: 'Oswald','Arial';
  text-align: center; 
}

.h2-principal-vision{
  color:rgb(236,167,0);
  margin-top:40px;
  margin-bottom:30px;
  font-family: 'Oswald','Arial';
  text-align: center; 
}


.section-filosofia{
  margin-top: 120px;
}

.section-filosofia-vision{
  margin-top: 50px;
}

.div-contenedor-mision{
  display:flex;
  flex-direction: row;
  
}

.div-contenedor-vision{
  display:flex;
  flex-direction: row-reverse;
  
}

.foto{
  width: 400px;
  height:360px;
  object-fit: cover;
  position: relative;
  top: 50px;
  left:50px;
}

.foto-vision{
  width: 400px;
  height:360px;
  object-fit: cover;
  position: relative;
  top: 50px;
  left:-50px;
}

.div-contenedor-texto{
  background-color: rgb(254,187,47);
  width:100%;
  height:460px;
  padding-left: 100px;
  padding-right: 70px;
  padding-bottom:40px;
  display:flex;
  justify-content:center;
  flex-direction:column;
}

.div-contenedor-texto-vision{
  background-color: rgb(250,245,231);
  width:100%;
  height:460px;
  padding-left: 50px;
  padding-right: 70px;
  padding-bottom:40px;
  display:flex;
  justify-content:center;
  flex-direction:column;
}

.posicionamiento-span{
  display:flex;
  flex-direction:row;
  align-items: flex-start;
  margin:0;
}

.span-flechas{
  font-size: 30px;
  color: white;
  margin-right:20px;
  position: relative;
  top: -12px;
}

.span-numeros{
  font-size: 30px;
  color: rgb(236,167,0);
  margin-right:20px;
  position: relative;
  top: -12px;
}

.p-texto{
  color: black;
  font-size:14px;
}


/*MEDIA QUERY*/
@media (max-width: 1170px) {
  .p-texto{
    width:500px;
  }
}

@media (max-width: 1070px) {
  .p-texto{
    width:400px;
  }

  .div-contenedor-texto{
    height:480px;
  }

  .div-contenedor-texto-vision{
    height:480px;
  }
}

@media (max-width: 980px) {
  .section-filosofia{
      margin-top:0px;
    }

    .section-filosofia-vision{
      margin-top:0px;
    }

  .div-contenedor-mision{
    flex-direction:column;
  }

  .div-contenedor-vision{
    flex-direction:column;
  }

  .p-texto{
    width:100%;
  }

  .foto{
    width:90%;
    margin-left: 5%;
    margin-right: 5%;
    left:0;
    top:50;
  }

  .foto-vision{
    width:90%;
    margin-left: 5%;
    margin-right: 5%;
    left:0;
    top:50;
  }

  .h2-principal{
    margin-top:50px;
  }

  .h2-principal-vision{
    margin-top:50px;
  }

  .div-contenedor-texto{
    height:480px;
  }

  .div-contenedor-texto-vision{
    height:480px;
  }
}

@media (max-width: 900px) {
  .h2-principal{
    margin-top:100px;
  }

  .h2-principal-vision{
    margin-top:100px;
  }
}

@media (max-width: 600px) {
  .h2-principal{
    margin-top:100px;
  }

  .h2-principal-vision{
    margin-top:100px;
  }

  .div-contenedor-texto{
    height:550px;
  }

  .div-contenedor-texto-vision{
    height:550px;
  }
}

@media (max-width: 520px) {
  .div-contenedor-texto{
    height:650px;
  }

  .div-contenedor-texto-vision{
    height:650px;
  }

  .h2-principal{
    margin-top:70px;
  }

  .h2-principal-vision{
    margin-top:70px;
  }
}

@media (max-width: 490px) {
  .div-contenedor-texto{
    height:600px;
    padding-left:40px;
    padding-right: 40px;
  }

  .div-contenedor-texto-vision{
    height:600px;
    padding-left:40px;
    padding-right: 40px;
  }

  .h2-principal{
    margin-top:50px;
  }

  .h2-principal-vision{
    margin-top:50px;
  }
}

@media (max-width: 460px) {
  .div-contenedor-texto{
    height:700px;
    padding-left:40px;
    padding-right: 40px;
  }

  .div-contenedor-texto-vision{
    height:700px;
    padding-left:40px;
    padding-right: 40px;
  }

  .h2-principal{
    margin-top:20px;
  }

  .h2-principal-vision{
    margin-top:20px;
  }
}

@media (max-width: 400px) {
  .div-contenedor-texto{
    height:750px;
    padding-left:40px;
    padding-right: 40px;
  }

  .div-contenedor-texto-vision{
    height:750px;
    padding-left:40px;
    padding-right: 40px;
  }

  .h2-principal{
    margin-top:20px;
  }

  .h2-principal-vision{
    margin-top:20px;
  }
}

@media (max-width: 380px) {
  .div-contenedor-texto{
    height:780px;
    padding-left:40px;
    padding-right: 40px;
  }
  .div-contenedor-texto-vision{
    height:780px;
    padding-left:40px;
    padding-right: 40px;
  }
}
`;

export default SCFilosofia;
