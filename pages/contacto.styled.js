import styled from "styled-components";

const SCContacto = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 
  }

  .div-obra-nueva{
  background-image: url(
    /telefono-contacto.jpg);
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

/*SECCION CONTACTO*/

.h2-rubi{
  color:rgb(236,167,0);
  font-family: 'Oswald';
  font-size: 25px;
}

.h2-encontrar{
  color:black;
  font-family: 'Oswald';
  margin-left: 10px;
  font-size: 25px;
}

.h2-contacto{
  color:black;
  margin-top:60px;
  margin-bottom:20px;
  font-family: 'Oswald','Arial';
  text-align: center;
  
}

.hr-contacto{
  width:100px;
  height:4px;
  color: rgb(236,167,0);
  margin:auto;
}

.p-contacto{
  text-align: justify;
  text-align:center;
  margin-bottom:20px;
  margin-top: 20px;
}

.div-todo{
  display:flex;
  flex-direction: row;
  margin: 50px;
  justify-content:center;
}

.div-general-contacto{
  display:flex;
  flex-direction: column;
  justify-content:center;
  margin-left: 50px;

}

.div-subgeneral-contacto{
  display:flex;
  flex-direction: row;
  align-items:center;
  margin:5px;
}

.div-circulo-contacto{
  width:50px;
  height:50px;
  border-radius: 50%;
  background-color: rgb(236,167,0);
  color: white;
  font-size: 30px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.div-circulo-contacto:hover{
  color: black;
}

.div-circulo-contacto-redes{
  width:50px;
  height:50px;
  border-radius: 50%;
  background-color: rgb(236,167,0);
  color: white;
  font-size: 30px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
}

.div-circulo-contacto-redes:hover{
  background-color: white;
  border: 2px solid rgb(237,173,18);
}

.div-p-contacto{
  margin-left: 30px;
}

.img-instagram{
  width:30px;
  height:30px;
  padding-bottom:3px;
}

.img-facebook{
  width:30px;
  height:30px;
  padding-bottom:3px;
}

.a-contacto{
  text-decoration:none;
}



@media (max-width: 1000px) {
  .div-todo{
  flex-direction: column;
  align-items:center;
}

@media (max-width: 1000px) {
  .div-general-contacto{
  margin-top:30px;
}

@media (max-width: 500px) {
  .div-todo{
  margin: 0;
}

@media (max-width: 500px) {
  .div-general-contacto{
  margin-left:0;
}
}
}
}
}







`;

export default SCContacto;
