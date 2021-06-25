import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import SCDashboard from "./reformas-pisos.styled";

export default function ReformasPisos() {
  return (
    <Layout>
      <Head>
        <title>RCS | Reformas, Construcciones y Servicios</title>
      </Head>

      <SCDashboard>
        <h1 className="h1">Pisos</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <h3>Hola</h3>
      </SCDashboard>
    </Layout>
  );
}
