import styled from "styled-components";

const SCNavbarMateriales = styled.section`
font-family:'Oswald';
font-size:17px;
background-color: rgb(254,251,241);
}

nav{
  width:390px;
  height:500px;
  background-color: rgb(254,251,241);
}

ul{
  padding:0;
}

               
    li{
    list-style-type:none;
    position:relative;
    width:120px;
    padding:3px;
    }
                
    li a{
    text-decoration:none;
    display:inline-block;
    padding:0px 20px;
    width:237px;
    height:30px;
    color:#000;
    background-color: rgb(254,251,241);
    display:flex;
    align-items:center;
    
    }
            
    li a:hover{
    color:#fff;
    background-color:rgb(236,167,0);
    
    
                
    }

    .li{
      width: 150px;
      background-color: rgb(254,251,241);
      color:#000;
      cursor:pointer;
      
    }
    
    nav li ul{
        display:none;
        position:absolute;
        top:0px;
        left:220px;
        left:150px;
    }
            
    nav li:hover ul{display:block;}

    .sub-ul{
      height:370px;
      width:240px;
      
      
      
    }
    
    .sub-ul1{
      top:-36px;
      height:370px;
      width:240px;
    
    }
    .sub-ul2{
      top:-72px;
      height:370px;
      width:240px;
     
    }
    .sub-ul3{
      top:-108px;
      height:370px;
      width:240px;
     
    }



.h2-formulario-2{
  text-align:center;
  padding-top:50px;
  padding-bottom:20px;
  color:orange;
  text-shadow: 1px 1px 1px black;
  margin-bottom:20px;
  font-family: 'Oswald','Arial';
}



`;

export default SCNavbarMateriales;
