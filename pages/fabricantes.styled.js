import styled from "styled-components";

const SCFabricantes = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 
  }

  .div-obra-nueva{
  background-image: url(
    /marcas.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: white;
    height: 400px;
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

.section-fabricantes{
 
}

/* NAVEGADOR*/
.nav{
  display:flex;
  justify-content:center;
  border:0;
  margin-top:50px;

}

.nav-link{
  color:black;
  font-size:15px;
  font-family: 'Oswald';
  border:0;
  margin-bottom:20px;
  
}

.nav-link:hover {
  color:rgb(236,167,0);
  text-decoration: underline;
}

.nav-link:focus {
  color:rgb(236,167,0);
  text-decoration: underline;
}

/*CONTENIDO*/

.tab-content{
  margin:30px;
  display:flex;
  justify-content:center;
}

.espaciado{
  padding:10px;
}

.imagen:hover{
  transform: scale(1.2);
}
`;

export default SCFabricantes;
