import Head from "next/head";
import styles from "../components/layout.module.css";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/logo-imagenes.png" />
        <title>RCS | Reformas, Construcciones y Servicios</title>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <h1 className="h1">Hola</h1>
    </Layout>
  );
}
