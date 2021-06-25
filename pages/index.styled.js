import styled from "styled-components";

const SCIndex = styled.section`
  
  }
  /* SLIDE */

*,
*::before,
*::after { box-sizing: border-box; }

html,
body {
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}


.card {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

/*Light blue cover above the slide show*/
.card::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  z-index: 900;
  display: block;
  width: 100%;
  height: 100%;
}

.card_part {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: translateX( 100% );
  background-image: url("/masnou.jpg");
  animation: opaqTransition 28s cubic-bezier(0, 0, 0, 0.97) infinite;
}


.card_part.card_part-two {
  z-index: 6;
  background-image: url("/masnou2.jpeg");
  animation-delay: 7s;
}

.card_part.card_part-three {
  z-index: 5;
  background-image: url(/masnou3.jpeg);
  animation-delay: 14s;
}

.card_part.card_part-four {
  z-index: 4;
  background-image: url(/masnou4.jpeg);
  animation-delay: 21s;
}


@keyframes opaqTransition {
  3% { transform: translateX( 0 ); }
  25% { transform: translateX( 0 ); }
  28% { transform: translateX( -100% ); }
  100% { transform: translateX( -100% ); }
}


  `;

export default SCIndex;
