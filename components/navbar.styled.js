import styled from "styled-components";

const SCNavBar = styled.section`
    display:flex;
    justify-content:flex-end;
    }

.navbar{
  z-index:1100;
}

.margin{
  margin-right:60px;
}

.dropdown:hover .dropdown-menu {
    display: block;
    margin-top:0px;
 }

  .cuadrado{
    width: 100vw;
    height:60px;
    background-color: rgb(254,251,241);
  }

  .nav-link {
    color: white;
    font-family: "Oswald", sans-serif;
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

.dropdown-item{
font-family: "Oswald", sans-serif;
}

.text-white:hover{
  color:black !important;
}

.bg-warning{
  background-color: rgb(236,167,0) !important;
}

@media (max-width: 1000px) {
  .triangulo {
    display: none;
  }

  .cuadrado{
    display:none;
  }

  .navbar{
    position: absolute;
    z-index: 2000;
  }
}
`;

export default SCNavBar;
