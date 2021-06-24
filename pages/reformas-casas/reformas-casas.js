import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function ReformasCasas() {
  return (
    <Layout>
      <h1>Reformas Casas</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
