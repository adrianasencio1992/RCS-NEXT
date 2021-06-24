import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>RCS | Reformas, Construcciones y Servicios</title>
          <link rel="icon" href="/logo-imagenes.png" />
        </Head>

        <h2>
          <Link href="/reformas-casas/reformas-casas">
            <a>Reformas casas</a>
          </Link>
        </h2>
        <p>REFORMAS</p>
      </Layout>
    </div>
  );
}
