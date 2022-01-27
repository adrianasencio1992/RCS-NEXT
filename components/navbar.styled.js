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
      top: 0%;
      animation-duration: 0s;
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
  height:56px;
  width:565px;
  z-index: 100;
  visibility: hidden;
   transform: skew(-40deg);
   margin-left:25px;
   display:flex;
   z-index:1000;
   flex-direction:row;
   justify-content:flex-end;
   background-color: rgb(236, 167, 0);
  
}

.imagen-navbar-sticky{
  width:100px;
  height:55px;
  z-index: 100;
  transform: skew(40deg);
}

.contendor-nombre-y-eslogan{
  display:flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  width: 500px;
}

.h1-navbar{
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 0.35em;
  border: 4px rgba(0, 0, 0, 0.25);
  border-width: 4px 0;
  width: 30em;
  font-size: 16px;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  text-align: center;
}

.div-eslogan{
  text-align:center;
}

.eslogan {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  transform: skew(40deg);
  font-size: 12px;
}

.eslogan:first-of-type {
  /* For increasing performance 
                       ID/className should've been used. 
                       For a small demo 
                       it's okaish for now */
  animation: showup 7s infinite;
}

.eslogan:last-of-type {
  width: 0px;
  animation: reveal 7s infinite;
}

.eslogan:last-of-type span {
  margin-left: -355px;
  animation: slidein2 7s infinite;
}

@keyframes showup {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes slidein2 {
  0% {
    margin-left: -800px;
  }
  20% {
    margin-left: -800px;
  }
  35% {
    margin-left: 0px;
  }
  100% {
    margin-left: 0px;
  }
}

@keyframes reveal {
  0% {
    opacity: 0;
    width: 0px;
  }
  20% {
    opacity: 1;
    width: 0px;
  }
  30% {
    width: 116px;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    width: 116px;
  }
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
    border-left: 55px solid transparent;
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
