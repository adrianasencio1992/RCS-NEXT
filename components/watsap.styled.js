import styled from "styled-components";

const SCWatsap = styled.section`

}

#contact-wa .sticky-btn {
  position: fixed;
  bottom: -96px;
  left: 33px;
  background: rgba(255, 255, 255, 0.81);
  padding: 12px;
  border-radius: 50%;
  transition: all 0.8s ease;
  z-index:1000;
}
#contact-wa .sticky-btn:hover {
  background: rgba(255, 255, 255, 0.81);
  transform: translateY(-3px);
  z-index:1000;
}
#contact-wa .sticky-btn img {
  width: 45px;
  z-index:1000;
}

#contact-wa .sticky-btn.revealed {
  bottom: 60px;
  opacity: 1;
  z-index:1000;
}

@media screen and (max-width: 768px) {
  #contact-wa .sticky-btn {
    left: 20px;
  } 
  #contact-wa .sticky-btn img {
    width: 36px;
  }
  #contact-wa .sticky-btn.revealed {
    bottom: 12px;
  } 
}


`;

export default SCWatsap;
