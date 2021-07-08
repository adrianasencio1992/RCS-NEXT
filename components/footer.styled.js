import styled from "styled-components";

const SCFooter = styled.section`
background-color: rgb(254,251,241);
font-family: "Oswald", sans-serif;
}

.div-general-footer{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    flex-wrap:wrap;
}

 @media (max-width: 1150px) {
  .div-general-footer {
    display:flex;
    flex-direction:column;
    align-items:center;
  }
 }

 @media (max-width: 430px) {
  .div-general-footer {
    align-items:flex-start;
  }
 }


.div-subgeneral-footer{
    display:flex;
    flex-direction:column;
    width: 400px;
    
}

@media (max-width: 430px) {
  .div-subgeneral-footer {
    width:300px;
  }
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

.div-redes-sociales-footer{
    display:flex;
    flex-direction: row;

    
}

.facebook{
    width:40px;
    height:40px;
    left:8%;
    position:absolute;
    visibility: visible;
    cursor:pointer;
    
    
}

.facebook:hover{
    opacity:0;
}

@media (max-width: 1150px) {
  .facebook {
    left:55%;
  }
 }

@media (max-width: 390px) {
  .facebook {
    left:65%;
  }
 }
 

.instagram{
    width:40px;
    height:40px;
    margin-left:10px;
    position:absolute;
    left:12%;
    visibility: visible;
    cursor:pointer;
    
}

.instagram:hover{
    opacity:0;
}

@media (max-width: 1150px) {
  .instagram {
    left:60%;
  }
 }

 @media (max-width: 700px) {
  .instagram {
    left:65%;
  }
 }

 @media (max-width: 390px) {
  .instagram {
    left:75%;
  }
 }

.div-subgeneral2-footer{
    display:flex;
    flex-direction:column;
    width:430px;
    margin-left:20px;
    

}

.div-li-footer{
    display:flex;
    flex-direction:row;
    font-family: 'Arial';
    font-weight:100;
    font-size:14px;
}

@media (max-width: 430px) {
  .div-li-footer {
    flex-direction:column;
  }
 }

.ul-footer{
    margin-right:20px;
    list-style-type: circle;
    color:rgb(236,167,0);
    
    
}

.li-footer{
    margin-right:30px;
    margin-bottom: 15px;
    
}

a{
text-decoration:none;
color: black;
}

a:hover{
color:rgb(236,167,0);
}

.div-subgeneral3-footer{
    display:flex;
    flex-direction:column;
    width: 230px;
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
    margin:0;

}
`;

export default SCFooter;
