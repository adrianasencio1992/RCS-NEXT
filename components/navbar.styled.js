import styled from "styled-components";

const SCNavBar = styled.section`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: 0px;
  }

  .div-general{
    display:flex;
    flex-direction:row;
    z-index: 1100;
  }

  .sticky{
    position: fixed;
    top: 0;

}

  .sticky2{
      position: fixed;
      top: 0;
      left: 0;
      animation-duration: 2s;
      animation-name: slidein;
    animation-iteration-count: 1,0;
  @keyframes slidein {
  from {
    margin-left: 40%;
    width: 300%
  }

  to {
    margin-left: 25px;
    width: 100%;
  }
}
  }

.main{
  height:55px;
  width:100%;
  z-index: 100;
  background-color: white;
  visibility: hidden;
   transform: skew(-40deg);
   margin-left:25px;
   box-shadow: rgba(0, 0, 0, 0.45) 0px 15px 10px -10px;
}

.imagen-navbar-sticky{
  width:100px;
  height:55px;
  background-color: white;
  z-index: 100;
  margin-left: 300px;
  transform: skew(40deg);
  
  
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
    z-index: 1100;
  }

  .triangulo {
    width: 0;
    height: 0;
    border-bottom: 60px solid rgb(236, 167, 0);
    border-left: 80px solid transparent;
    z-index: 1100;
  }

  .triangulo2{
    width: 0;
    height: 0;
    border-bottom: 60px solid rgb(236, 167, 0);
    border-left: 80px solid transparent;
    z-index: 1100;
    transform: skew(40deg);
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
      z-index: 2000;
    }
    .triangulo {
      border-bottom: 60px solid transparent;
    }
    .main {
      display: none;
    }
  }
`;

export default SCNavBar;
