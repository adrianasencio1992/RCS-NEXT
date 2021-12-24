import SCPrueba from "./prueba.styled";
import React from "react";
import PostContainer from "../components/PostContainer";
import SCformulario from "../components/formulario.styled";

export default function Prueba() {
  return (
    <SCPrueba>
      <button>click here</button>
      <PostContainer></PostContainer>
      <SCformulario></SCformulario>
    </SCPrueba>
  );
}
