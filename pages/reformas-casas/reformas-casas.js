import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import styles from "./reformas-casas.module.css";

export default function ReformasCasas() {
  return (
    <Layout>
      <Head>
        <title>RCS | Reformas, Construcciones y Servicios</title>
      </Head>
      <h1 className={styles.h1}>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
