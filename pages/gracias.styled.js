import styled from "styled-components";

const SCGracias = styled.section`
  overflow-x: hidden;
  font-family: "Arial";
  font-size: 15px;

  .div-obra-nueva {
    background-image: url(/materiales.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: white;
    height: 350px;
    overflow-x: hidden;
  }

  @media only screen and (max-width: 500px) {
    .div-obra-nueva {
      background-attachment: inherit;
    }
  }

  .h1-obra-nueva {
    color: rgb(236, 167, 0);
    text-shadow: 2px 2px black;
    font-size: 50px;
    font-weight: 700;
    padding-top: 100px;
    margin-left: 30px;
  }

  .p-obra-nueva {
    color: white;
    font-size: 20px;
    font-weight: 700;
    margin-left: 30px;
    text-shadow: 2px 2px black;
  }

  /*GRACIAS*/

  .section-gracias {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  }

  .h2-formulario {
    color: black;
    margin-top: 0px;
    margin-bottom: 50px;
    font-family: "Oswald", "Arial";
    font-size: 70px;
    text-align: center;
  }

  .p2-obra {
    text-align: justify;
    text-align: center;
    font-size: 20px;
    color: black;
  }

  .boton-enviar {
    margin-top: 20px;
    background-color: rgb(236, 167, 0);
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    width: 150px !important;
    height: 30px;
    color: white;
    font-family: "Arial";
    margin-bottom: 50px;
    outline: none;
    text-align: center;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus,
    &:hover {
      background-color: rgb(254, 206, 79);
      color: black;
      outline: 0;
      transition: background-color 1s ease-out;
      text-shadow: 0px 0px black;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 70px 30px;
    margin: 4rem 5vw;
    padding: 0;
    list-style-type: none;
  }

  .card {
    position: relative;
    display: block;
    height: 120%;
    border-radius: 40px;
    overflow: hidden;
    text-decoration: none;
  }

  .card__image {
    width: 100%;
    height: 82%;
  }

  .card__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    border-radius: 40px;
    background-color: #fff;
    transform: translateY(100%);
    transition: 0.2s ease-in-out;
  }

  .card:hover .card__overlay {
    transform: translateY(0);
  }

  .card__header {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 1em;
    border-radius: 40px 0 0 0;
    background-color: #fff;
    transform: translateY(-100%);
    transition: 0.2s ease-in-out;
  }

  .card__arc {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 100%;
    right: 0;
    z-index: 1;
  }

  .card__arc path {
    fill: #fff;
    d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
  }

  .card:hover .card__header {
    transform: translateY(0);
  }

  .card__thumb {
    flex-shrink: 0;
    width: 60px;
    height: 35px;
    border-radius: 50%;
  }

  .card__title {
    font-size: 20px;
    margin: 0 0 0.3em;
    color: rgb(236, 167, 0);
    font-family: "Oswald";
  }

  .card__tagline {
    display: block;
    margin: 1em 0;
    font-family: "MockFlowFont";
    font-size: 0.8em;
    color: #d7bdca;
  }

  .card__status {
    font-size: 0.8em;
    color: #d7bdca;
  }

  .card__description {
    padding: 0 2em 2em;
    margin: 0;
    color: grey;
    font-family: "MockFlowFont";
    display: -webkit-box;
    -webkit-box-orient: vertical;

    overflow: hidden;
  }

  flex-direction: row;

  /*MEDIA QUERY*/
  @media (max-width: 1000px) {
    .section-obra-formulario {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 970px) {
    .div-primera-carta {
      flex-direction: column;
      margin: 0;
    }

    .div-primera-carta2 {
      flex-direction: column-reverse;
    }

    .imagen-carta {
      margin: 0;
    }

    .div-primera-subcarta {
      margin-left: 0px;
      flex-direction: column-reverse;
    }

    .div-primera-subcarta2 {
      margin-right: 0px;
    }
  }

  @media (max-width: 899px) {
    .card__image {
      height: 100%;
    }
  }

  @media (max-width: 650px) {
    .div-union {
      flex-direction: column;
    }
  }

  @media (max-width: 588px) {
    .cards {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 100px 30px;
    }
  }
`;

export default SCGracias;
