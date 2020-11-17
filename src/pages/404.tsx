import Link from "next/link";

import Layout, { DEFAULT_LINK } from "@/components/Layout";
import SEO from "@/components/SEO";

import styles from "@/styles/pages/error.module.css";

export default function Error() {
  return (
    <>
      <SEO
        title="Ops, algo aconteceu aqui!"
        home
      />

      <Layout menu_entries={[
        {
          link: DEFAULT_LINK,
          description: 'Início'
        },
        {
          link: 'blog',
          description: 'Blog'
        }
      ]}>
        <section className={styles.error}>
          <div className={styles.error_container}>
            <header className={styles.error_title}>
              <h1>Ops, algo aconteceu aqui.</h1>
              <p className={styles.error_subtitle}>Parece que essa página não existe.</p>
            </header>

            <p className={styles.error_description}>Se você estiver perdido, <Link href="/"><a className={styles.error_description_link}>clique aqui para recomeçar</a></Link>.</p>
          </div>
        </section>
      </Layout>
    </>
  );
}
