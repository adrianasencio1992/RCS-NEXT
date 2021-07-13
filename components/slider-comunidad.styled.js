import styled from "styled-components";

const SCSliderComunidad = styled.section`

}

@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

body{
	font-family: 'Poppins', sans-serif;
	font-weight: 300;
	font-size: 15px;
	line-height: 1.7;
	color: #343434;
	background-color: #f1f2f6;
	overflow-x: hidden;
}
a {
	cursor: pointer;
}
a:hover {
	text-decoration: none;
}

.section{
  position: relative;
  width: 100%;

  display: block;
}

.full-height{
  height:100%;
  margin-top:20px;
  margin-bottom:30px;
}

.over-hide{
  overflow: hidden;
}

[type="radio"]:checked,
[type="radio"]:not(:checked){
  position: absolute;
  left: -9999px;
}
.checkbox:checked + label,
.checkbox:not(:checked) + label{
  position: relative;
  cursor: pointer;
  margin: 0 auto;
  text-align: center;
  margin-right: 6px;
  margin-left: 6px;
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgb(250,233,192);
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  background-image: url('/comunidad1.jpg');
  animation: border-transform 6s linear infinite alternate forwards;
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    animation-play-state: paused;
}
.checkbox.scnd + label{
  background-image: url('/comunidad2.jpg');
}
.checkbox.thrd + label{
  background-image: url('/comunidad3.jpg');
}
.checkbox.foth + label{
  background-image: url('/comunidad4.jpg');
}
.checkbox.cinc + label{
  background-image: url('/comunidad5.jpg');
}
.checkbox.sis + label{
  background-image: url('/comunidad6.jpg');
}
.checkbox.set + label{
  background-image: url('/comunidad7.jpg');
}
.checkbox.vuit + label{
  background-image: url('/comunidad8.jpg');
}
.checkbox.nou + label{
  background-image: url('/comunidad9.jpg');
}

.checkbox:checked + label{
  box-shadow: 0 8px 25px 0 rgba(16,39,112,.3);
  transform: scale(1.3);
    -webkit-animation-play-state: running;
    -moz-animation-play-state: running;
    animation-play-state: running;
}
@keyframes border-transform{
  0%,100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
  14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
  28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; } 
  42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; } 
  56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
  70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
  84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; } 
}

.slider-height-padding {
  padding-top: 440px;
}

ul {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  z-index: 100;
  padding: 0;
  margin: 0;
  list-style: none;
}
ul li {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: block;
  z-index: 100;
  padding: 0;
  margin: 0;
  list-style: none;
  height: 400px;
  border: 5px solid rgb(250,233,192);
  background-size: cover;
  background-position: center;
  background-image: url('/comunidad1.jpg');
  border-radius: 50%;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 2.7;
  color: #343434;
  writing-mode: vertical-rl;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0 8px 25px 0 rgba(16,39,112,.1);
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
ul li span {
  mix-blend-mode: difference;
}
ul li:nth-child(2) {
  background-image: url('/comunidad2.jpg');
}
ul li:nth-child(3) {
  background-image: url('/comunidad3.jpg');
}
ul li:nth-child(4) {
  background-image: url('/comunidad4.jpg');
}
ul li:nth-child(5) {
  background-image: url('/comunidad5.jpg');
}
ul li:nth-child(6) {
  background-image: url('/comunidad6.jpg');
}
ul li:nth-child(7) {
  background-image: url('/comunidad7.jpg');
}
ul li:nth-child(8) {
  background-image: url('/comunidad8.jpg');
}
ul li:nth-child(9) {
  background-image: url('/comunidad9.jpg');
}


.checkbox.frst:checked ~ ul li:nth-child(1) {
  opacity: 1;
  pointer-events: auto;
  border-radius: 16px;
}
.checkbox.scnd:checked ~ ul li:nth-child(2) {
  opacity: 1;
  pointer-events: auto;
  border-radius: 16px;
}
.checkbox.thrd:checked ~ ul li:nth-child(3) {
  opacity: 1;
  pointer-events: auto;
  border-radius: 16px;
}
.checkbox.foth:checked ~ ul li:nth-child(4) {
  opacity: 1;
  pointer-events: auto;
  border-radius: 16px;
}
.checkbox.cinc:checked ~ ul li:nth-child(5) {
  opacity: 1;
  pointer-events: auto;
  border-radius: 16px;
}
.checkbox.sis:checked ~ ul li:nth-child(6) {
  opacity: 1;
  pointer-events: auto;
  border-radius: 16px;
}
.checkbox.set:checked ~ ul li:nth-child(7) {
  opacity: 1;
  pointer-events: auto;
  border-radius: 16px;
}
.checkbox.vuit:checked ~ ul li:nth-child(8) {
  opacity: 1;
  pointer-events: auto;
  border-radius: 16px;
}
.checkbox.nou:checked ~ ul li:nth-child(9) {
  opacity: 1;
  pointer-events: auto;
  border-radius: 16px;
}




@media (max-width: 767px) {
  .slider-height-padding {
    padding-top: 340px;
  }
  ul li {
    height: 300px;
    font-size: 13px;
    letter-spacing: 1px;
  }
}

@media (max-width: 575px) {
  .slider-height-padding {
    padding-top: 240px;
  }
  ul li {
    height: 200px;
  }
}`;

export default SCSliderComunidad;