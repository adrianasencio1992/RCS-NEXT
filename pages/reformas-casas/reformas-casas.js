import Link from "next/link";
import Layout from "../../components/layout";
import styles from "./reformas-casas.module.css";

export default function ReformasCasas() {
  return (
    <Layout>
      <h1 className={styles.h1}>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to homes</a>
        </Link>
      </h2>
    </Layout>
  );
}
