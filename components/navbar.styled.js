import styled from "styled-components";

const SCNavBar = styled.section`
    display:flex;
    justify-content:flex-end;
    }

.dropdown:hover .dropdown-menu {
    display: block;
    margin-top:0px;
 }

  .cuadrado{
    width: 500px;
    height:40px;
    background-color: rgb(254,251,241);
  }

  .triangulo {
   border-bottom: 40px solid rgb(236, 167, 0); 
    border-left: 60px solid rgb(254,251,241);      
  }

  .navegador {
    background-color: rgb(236, 167, 0);
    font-family: "Oswald", sans-serif;
    width: 88%;
    display: flex;
    justify-content: center;
    
  }

  .nav-link {
    color: white;
  }

  .nav-link:hover{
    color: black;
  }

  .dropdown-menu{
    background-color: rgb(245,226,180);
  }

  .dropdown-item:hover{
    background-color:rgb(254,251,241);
  }
`;

export default SCNavBar;
