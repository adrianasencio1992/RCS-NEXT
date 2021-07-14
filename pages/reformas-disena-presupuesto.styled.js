import styled from "styled-components";

const SCDiseñaPresupuesto = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 
  }

  .div-obra-nueva{
  background-image: url(
    /disena-presupuesto.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: white;
    height: 400px;
    overflow-x: hidden;
  }

  .h2-formulario{
  color:black;
  margin-top:60px;
  margin-bottom:20px;
  font-family: 'Oswald','Arial';
  text-align: center;
  
}

.hr-formulario{
  width:100px;
  height:4px;
  color: rgb(236,167,0);
  margin:auto;
}

.p1-obra{
  text-align: justify;
  margin-bottom: 30px;
  margin: 30px 50px;
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

.p1-obra-2{
  text-align: center;
  margin-bottom: 30px;
  margin: 30px 50px;
}


/*seccion Calcula el precio de tu reforma*/
.div-general-input{
  display:flex;
  flex-direction: row;
  justify-content:space-evenly;
}

.div-subgeneral-input{
  display:flex;
  flex-direction: column;
  width:300px;
  border-radius:20px;
  margin-bottom:50px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 2px 15px -1px;}

.div-trigeneral-input{
  display:flex;
  flex-direction: row;
  align-items:center;
  margin-bottom:5px;
  margin-left: 50px;
}

.titulo-input{
  text-align:center;
  font-family: 'Oswald';
  color: rgb(236,167,0);
  font-size:20px;
  margin-top:10px;
}

.caja3{
  display:flex;
  flex-direction:row;
  margin-bottom:10px;
}

input{
  margin-right:5px;
}

.div-total{
  margin-left: 100px;
  margin-bottom: 50px;
}

.input-total{
  width:200px;
  border-radius: 10px;
  padding-left: 10px;
  outline: none;
 border: 1px solid grey;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 2px 15px -1px;}
  
  
}

.p-total{
  font-family: 'Oswald';
  font-size:20px;
}


`;

export default SCDiseñaPresupuesto;
