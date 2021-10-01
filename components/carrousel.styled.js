import styled from "styled-components";

const SCCarrousel = styled.section`
  font-family: "Oswald", sans-serif;
  
  }
  
.section-opiniones{
  background: rgb(244,244,244);
}

.h2-opiniones{
  text-align:center;
  margin-bottom:30px;

}

.hr-opiniones{
  width:100px;
  height:4px;
  color: rgb(236,167,0);
  margin:auto;
  margin-bottom:45px;
}

.p-opiniones{
  text-align:center;
  margin-bottom:20px;
}




.container{
  margin: auto;
  width: 100%;
  padding: 30px;

}

ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
    
}

ul.slider{
  position: relative;
  width: 100%;
  height: 300px;
}

ul.slider li {
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0;
    width: inherit;
    height: inherit;
    transition: opacity .3s;
    background:rgb(244,244,244);
    display: flex;
  justify-content: center;
  align-items: center;
    
    
}

ul.slider li img{
  width: 100%;
  height: 100%;
}



ul.slider li:first-child {
    opacity: 1; 
}

ul.slider li:target {
    opacity: 1; 
}

.menu{
  text-align: center;
  margin-bottom:30px;
 
  
}

.menu li{
  display: inline-block;
  text-align: center;
}

.menu li a{
  display: flex;
  justify-content: center;
  align-items:center;
  margin-right:5px;
  margin-top:20px;
  color: white;
  text-decoration: none;
  background-color: rgb(236,167,0);
  width: 25px;
  height: 25px;
  font-size: 16px;
  border-radius: 100%;
  z-index:10;
  
}

.menu li a:hover{
background-color: rgb(236,200,0);
}

.menu li a:active{
background-color: rgb(236,200,0);
}

/* COMENTARIOS*/

.div-general-comentarios{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 200px;
  background-color: white;
  border: 1px solid gold;
  padding: 50px;
  
}

.div-comentarios{
  display:flex;
  flex-direction: column;
  align-items:center;
}

.div-foto-comentarios{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid gold;
  display:flex;
  flex-direction: column;
}

.img-comentario{
  border-radius: 50%;
  
}

.p-comentarios{
  width: 900px;
  margin-left:30px;
  
}

span{
  color:gold;
}


`;
export default SCCarrousel;
