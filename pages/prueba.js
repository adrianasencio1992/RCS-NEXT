import React, { Component } from "react";
import Link from "next/link";
import SCPrueba from "./prueba.styled";

function Prueba({ page, name }) {
  let a, b;
  a = 10;
  b = 5;
  let resultado = a + b;
  console.log(`La suma de a+b es ${resultado}`);

  return (
    <SCPrueba>
      <section id="About">
        <h1 className="h1">About {page}</h1>
        <p>My name is {name}</p>
        <Link href="/">
          <a>Ir a Home</a>
        </Link>
      </section>
    </SCPrueba>
  );
}

export async function getStaticProps(ctx) {
  return {
    props: {
      page: "page",
      name: "John Serrano",
    },
  };
}

export default Prueba;
