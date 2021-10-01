import styled from "styled-components";

const SCFooter = styled.section`
background-color: rgb(254,251,241);
font-family: "Oswald", sans-serif;
}

.div-general-footer{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    margin-left:30px;
    margin-right:30px;
}


.div-subgeneral-footer{
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 30%;
}



.h2-footer{
    color:rgb(236,167,0);
    margin-bottom:20px;
    margin-top:30px;
}

.p-footer{
    margin-bottom: 20px;
    font-family: 'Arial';
    font-weight:100;
    font-size:14px;
    text-align:justify;
}

.p2-footer{
  padding:10px;
  text-align:center;
}

.div-redes-sociales-footer{
    display:flex;
    flex-direction: row;
}

.facebook{
    width:40px;
    height:40px;
    position:absolute;
    left:47%;
    visibility: visible;
    cursor:pointer;
}

.facebook:hover{
    opacity:0;
}

.instagram{
    width:40px;
    height:40px;
    margin-left:10px;
    position:absolute;
    left: 50%;
    visibility: visible;
    cursor:pointer; 
}

.instagram:hover{
    opacity:0;
}



.div-li-footer{
    display:flex;
    flex-direction:row;
    font-family: 'Arial';
    font-weight:100;
    font-size:14px;
}


.ul-footer{
    list-style-type: circle;
    color:rgb(236,167,0);
    margin-right:10px;
    margin-left: 10px;

}




.li-footer{
    margin-bottom: 15px;
    
}

a{
text-decoration:none;
color: black;

}

a:hover{
color:rgb(236,167,0);
}

.div-contacto-footer{
    font-family: 'Arial';
    font-weight:100;
    font-size:14px;
}

.div-final-footer{
    background-color: black;
    color: grey;
    height:70px;
    display: flex;
    justify-content:center;
    align-items:center;
    margin-top:20px;
}

.p-final-footer{
    margin-left: 40px;
    font-family: 'Arial';
    margin-left:10px;
    margin-right:10px;
}


 @media (max-width: 1220px) {
  .div-general-footer {
    flex-direction:column;
    margin-left:20px;
    margin-right:20px;
    
  }
  .div-subgeneral-footer{
    width:100%;
    margin-bottom: 30px;
  }
  .facebook{
    left:45%
  }
 }

 @media (max-width: 650px) {
  .facebook {
    left:40%;
  }
 

  @media (max-width: 430px) {
  .div-li-footer {
    flex-direction:column;
  }
 }

   @media (max-width: 350px) {
  .facebook {
    left:35%;
  }
   }
 }

 @media (max-width: 350px) {
  .div-final-footer {
    height:150px;
  }
   }
   
`;

export default SCFooter;
