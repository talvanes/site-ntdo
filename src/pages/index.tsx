import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

import styles from "@/styles/utils.module.css";

export default function Home() {
  return (
    <>
    <SEO
      title="nTDO, Do Nada ao Tudo"
      description="nTDO, do Nada ao Tudo. Realize seus sonhos com a gente!"
      home
    />

    <Layout>
      <div className={styles.container}>
        <h1>Hello, World!</h1>
      </div>
    </Layout>
    </>
  )
}
