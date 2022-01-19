import styled from "styled-components";

const SCPrueba = styled.section`
 overflow-x: hidden;
 font-family: 'Arial';
 font-size:15px;
 
  }
 body {
    margin: 0 auto;
    padding: 36px;
    box-sizing: border-box;    
  }
  .h1 {
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    color: dodgerblue;
    text-align: center;
    margin-bottom: 0;
    text-transform: uppercase;
  }
  .h2 {
    font-family: sans-serif;
    font-size: 27px;
    font-weight: 100;
    color: #666;
    text-align: center;
    margin: 9px;
    padding-bottom: 21px;
    line-height: 1.2;
  }
  .h2 span {
    font-family: monospace;
    color: red;
    font-weight: 900;
    text-align: center;
  }  
.content p {
    font-family: sans-serif;
    font-size: 21px;
    font-weight: 300;
    color: #666;
    text-align: left;
    text-transform: none;
  max-width: 960px;
  margin: 0 auto;
  }


  #top .sticky-btn {
  position: fixed;
  bottom: -60px;
  right: 60px;
  background: dodgerblue;
  opacity: .6;
  border-radius: 6px;
  transition: all 0.8s ease;
}
#top .sticky-btn.revealed {
  bottom: 60px;
  opacity: 1;
}
#top a.sticky-btn {
  font-family: sans-serif;
  padding: 15px 20px;
  display: block;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
}
#top a.sticky-btn:hover {
  color: yellow;
}

@media screen and (max-width: 768px) {
  #top .sticky-btn {
    right: 20px;
  }  
  #top .sticky-btn.revealed {
    bottom: 20px;
  }
  #top a.sticky-btn {
    font-size: 12px;
    padding: 10px 15px;
  }  
}

/*
*************************************************

---   SECTION   --->   WHATSAPP-STICKY
   
*************************************************
*/


#contact-wa .sticky-btn {
  position: fixed;
  bottom: -96px;
  left: 33px;
  background: rgba(255, 255, 255, 0.81);
  padding: 12px;
  border-radius: 50%;
  transition: all 0.8s ease;
}
#contact-wa .sticky-btn:hover {
  background: rgba(255, 255, 255, 0.81);
  transform: translateY(-3px);
}
#contact-wa .sticky-btn img {
  width: 45px;
}

#contact-wa .sticky-btn.revealed {
  bottom: 60px;
  opacity: 1;
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

export default SCPrueba;
