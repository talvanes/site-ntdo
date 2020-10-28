import { ReactNode } from "react";
import Link from "next/link";

import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
    {/* Main header */}
    <header className={styles.main_header}>
      <div className={styles.main_header_content}>
        <img src="/logo.svg" alt="nTDO"/>

        {/* TODO desktop navigation menu */}
        {/* TODO mobile navigation menu */}
      </div>
    </header>

    {/* Main content */}
    <main>{children}</main>

    {/* Main Footer */}
    <section className={styles.main_footer}>
      <div className={styles.main_footer_content}>
        {/* Nossas Páginas */}
        <article className={styles.main_footer_links}>
          <header>
            <h1>Nossas Páginas</h1>
          </header>

          <ul>
            <li>
              <Link href="/">
                <a>Início</a>
              </Link>
            </li>

            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </article>

        {/* Links Úteis */}
        <article className={styles.main_footer_legal}>
          <header>
            <h1>Links Úteis</h1>
          </header>

          <ul>
            <li>
              <Link href="/privacy">
                <a>Política de Privacidade</a>
              </Link>
            </li>

            <li>
              <Link href="/legal">
                <a>Aviso Legal</a>
              </Link>
            </li>

            <li>
              <Link href="/terms">
                <a>Termos de Uso</a>
              </Link>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <footer className={styles.main_footer_rights}>
      <p>
        Site desenvolvido por <a href="https://www.talvanes.dev/" target="_blank">Talvanes Ferreira de Sousa</a>.
        (c) 2020 - nTDO. Todos os direitos reservados.
      </p>
    </footer>
    </>
  );
}
