import styled from "styled-components";

const SCCards = styled.section`
padding-bottom: 40px;
}

:root {
  --surface-color: #fff;
  --curve: 40;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans JP', sans-serif;
  background-color: #fef8f8;

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
  transition: .2s ease-in-out;
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
  transition: .2s ease-in-out;
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
  margin: 0 0 .3em;
  color: rgb(236,167,0);
  font-family: 'Oswald';
}

.card__tagline {
  display: block;
  margin: 1em 0;
  font-family: "MockFlowFont";  
  font-size: .8em; 
  color: #D7BDCA;  
}

.card__status {
  font-size: .8em;
  color: #D7BDCA;
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

@media (max-width: 899px) {
  .card__image {
     height:100%;
    
  }
}

@media (max-width: 588px) {
  .cards {
     grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 100px 30px;
  }
}

${
  "" /* @media (max-width: 522px) {
  .cards {
     grid-template-columns: repeat(auto-fit, minmax(160px, 10fr));
     gap: 100px 30px;
  }
} */
}
`;

export default SCCards;
