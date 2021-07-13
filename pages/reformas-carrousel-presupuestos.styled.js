import styled from "styled-components";

const SCCarrouselPresupuestos = styled.section`
  
  }

.div-general-carousel-presupuestos{
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
  
}



.text-container h3 {
  margin: 20px 0px 10px 0px;
  color: rgb(236,167,0);
  font-size: 20px;
  font-weight:700;
  
}


/*CANVAS*/ 

.offcanvas{
  width:1000px;
  margin: 50px;
  display:flex;
  justify-content:center;
  
}

.offcanvas-body{
  display:flex;
  flex-direction:column;
}

h5{
  color: rgb(237,173,18);
  font-family: 'Oswald';
  font-size:30px;
  
}

th{
  padding:10px;
}

td{
 
  text-align:center;
  font-size:14px;
}

.td-naranja{
  background-color: rgb(250,233,192);
}

.td-naranja-oscuro{
  background-color: rgb(237,173,18);
  color:white;
  text-align:center;
  
}

.td-blanco{
  background-color:white;
}

.td-texto{
  text-align:left;
}

.p-iva{
  font-style: oblique;
}
`;

export default SCCarrouselPresupuestos;
