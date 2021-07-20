import styled from "styled-components";

const SCFinanciacion = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 
  }

  .div-obra-nueva{
  background-image: url(
    /calculadora2.jpg);
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

.hr-titulo{
  width:100px;
  height:4px;
  color: rgb(236,167,0);
  margin:auto;
  margin-bottom:45px;
}


.h2-formulario{
  color:black;
  margin-top:60px;
  margin-bottom:20px;
  font-family: 'Oswald','Arial';
  text-align: center;
  
}

.p1-obra{
  margin-top:30px;
  text-align: justify;
  margin-bottom: 30px;
}


.section-financiacion{
  margin-bottom: 70px;
}

/*CARRUSEL FINANCIACION*/

.div-general-carousel{
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  justify-content:center;
 
  
  
}

.a-box {
  display: inline-block;
  width: 240px;
  text-align: center;
  margin:10px;
}

.a-box:hover{
  transform: scale(1.15);
}

.img-container {
    height: 230px;
    width: 200px;
    overflow: hidden;
    border-radius: 0px 0px 20px 20px;
    display: inline-block;
   
    
    
}

.img-container img {
    transform: skew(0deg, -13deg);
    height: 250px;
    margin: -35px 0px 0px -70px;
    
}



.inner-skew {
    display: inline-block;
    border-radius: 20px;
    overflow: hidden;
    padding: 0px;
    transform: skew(0deg, 13deg);
    font-size: 0px;
    margin: 30px 0px 0px 0px;
    background: #c8c2c2;
    height: 250px;
    width: 200px;
    
   
    
}

.text-container {
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  padding: 120px 20px 20px 20px;
  border-radius: 20px;
  background: white;
  margin: -120px 0px 0px 0px;
  line-height: 19px;
  font-size: 14px;
  color:black;
  font-family: 'Arial';
  
}



.text-container h3 {
  margin: 20px 0px 10px 0px;
  color: rgb(236,167,0);
  font-size: 24px;
  font-weight:700;
  font-family: 'Oswald';
  
}

`;

export default SCFinanciacion;
