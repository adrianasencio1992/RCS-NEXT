import styled from "styled-components";

const SCDiseñaPresupuesto = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 
  }

  .div-obra-nueva{
  background-image: url(
    /disena-presupuesto2.jpg);
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

/*seccion Calcula el precio de tu reforma*/
.div-general-input{
  display:flex;
  flex-direction: row;
  justify-content:space-evenly;
  flex-wrap:wrap;
}

.div-subgeneral-input{
  display:flex;
  flex-direction: column;
  width:300px;
  border-radius:20px;
  margin-bottom:50px;
  margin-left: 10px;
  margin-right: 10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 2px 15px -1px;
}

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
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  height:35px;
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
  margin-right: 10px;
  margin-bottom: 0px;
 
}

.input-div{
  display:flex;
  align-items:center;
  padding-left: 10px;
  width: 200px;
  height:30px;
  border-radius:5px;
  border: 1px solid black;
  
}

.div-iva{
display:flex;
align-items:center;
justify-content:center;
height:35px;
}

.p-iva{
  color: grey;
  font-style: oblique;
  font-size: 12px;
  margin-bottom: 0px;
  
}

@media (max-width: 765px) {
  .p-iva {
    margin-top:20px;
  }
}

ul {
  counter-reset: checked;
  list-style: none;
}

.li1 input:checked {
  counter-increment: checked 6500;
}

.li2 input:checked {
  counter-increment: checked 10000;
}

.li3 input:checked {
  counter-increment: checked 5000;
}

.li4 input:checked {
  counter-increment: checked 7000;
}

.li5 input:checked {
  counter-increment: checked 3000;
}

.li6 input:checked {
  counter-increment: checked 1000;
}

.li7 input:checked {
  counter-increment: checked 14294;
}

.li8 input:checked {
  counter-increment: checked 4000;
}

.li9 input:checked {
  counter-increment: checked 6000;
}

.li10 input:checked {
  counter-increment: checked 8000;
}

.li11 input:checked {
  counter-increment: checked 10000;
}

.li12 input:checked {
 counter-increment: checked 10000;
}

.count:after {
  content: counter(checked);
  font-family: 'Oswald';
  font-size:20px;
  margin-left: 10px;
  margin-right: 5px;
  display:flex;
  align-items:center;
  padding-left: 5px;
  width: 70px;
  height:30px;
  border-radius:5px;
  border: 1px solid black;
  color: rgb(236,167,0);
  
}




`;

export default SCDiseñaPresupuesto;
