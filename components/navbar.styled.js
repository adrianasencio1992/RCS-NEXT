import styled from "styled-components";

const SCNavBar = styled.section`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: 30px;
  }
  
  .section3{
    border: 5px solid red;
  }

  .navbar {
    z-index: 1100;
  }

  .margin {
    margin-right: 60px;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0px;
  }

  .triangulo {
    width: 0;
    height: 0;
    border-bottom: 60px solid rgb(236, 167, 0);
    border-left: 80px solid transparent;
    z-index: 1100;
  }

  .nav-link {
    color: white;
    font-family: "Oswald", sans-serif;
  }

  .nav-link:hover {
    color: black;
  }

  .dropdown-menu {
    background-color: rgb(245, 226, 180);
  }

  .dropdown-item:hover {
    background-color: rgb(254, 251, 241);
  }

  .dropdown-item {
    font-family: "Oswald", sans-serif;
  }

  .text-white:hover {
    color: black !important;
  }

  .bg-warning {
    background-color: rgb(236, 167, 0) !important;
  }

  @media (max-width: 992px) {
    .navbar {
      position: absolute;
      z-index: 2000;
    }
    .triangulo {
      border-bottom: 60px solid transparent;
    }

    
  }
`;

export default SCNavBar;
