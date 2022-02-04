import styled from "styled-components";

const SCCookies = styled.section`

}

body{
  margin:0;
  padding:0;
  
  
}

.barra-aceptacion-cookie{
  background: rgba(42,42,42, .8);
  border-top: thin solid #606060;
  box-sizing: border-box;
  position: fixed;
  bottom:0;
  padding: .5em 1em;
  font-size: 14px;
  font-family: sans-serif, arial, verdana;
  width: 100%;
  z-index: 999998;
  display:none;
  
 
  .p-cookies{
    color: white !important;
    font-size: .8em;
    margin-bottom: 0;
    font-weight: 400;
    letter-spacing: normal;
    text-align:center;
    z-index: 999999;
    
  }
  a, a:hover{
    color: white !important;
    margin-left: 30px;
    
  }


  button{
    margin-left: 30px;
    color: black;
    text-decoration:none;
    outline: none;
    border:0;
    
  }
}

`;

export default SCCookies;
