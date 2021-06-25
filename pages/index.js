import Link from "next/link";
import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import SCIndex from "./index.styled";

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>RCS | Reformas, Construcciones y Servicios</title>
          <link rel="icon" href="/logo-imagenes.png" />
        </Head>
      </Layout>
      <SCIndex>
        <div class="card">
          <div class="card_part card_part-one"></div>

          <div class="card_part card_part-two"></div>

          <div class="card_part card_part-three"></div>

          <div class="card_part card_part-four"></div>
        </div>
      </SCIndex>
    </div>
  );
}
