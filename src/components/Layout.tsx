import { ReactNode, useCallback, useState } from "react";
import Link from "next/link";
import cn from "classnames";

import DesktopMenu from "@/components/Menus/DesktopMenu";
import MobileMenu from "@/components/Menus/MobileMenu";

import utils from "@/styles/utils.module.css";
import styles from "./Layout.module.css";

interface MenuEntryProps {
  link: string;
  description: string;
  anchor?: boolean;
  external?: boolean;
}

interface LayoutProps {
  children: ReactNode,
  menu_entries: MenuEntryProps[],
  sticky_menu_bar?: boolean;
  default_menu_item?: string;
}

/* Default Anchor (and Page): "Início" */
export const DEFAULT_LINK = '/';

export default function Layout({
  children,
  menu_entries,
  sticky_menu_bar = false,
  default_menu_item = ''
}: LayoutProps) {
  /* State: selected menu item */
  const [selectedMenuItem, setSelectedMenuItem] = useState(default_menu_item);

  /* Handler: handles selected menu items */
  const handleMenuSelection = useCallback((event) => {
    // get clicked link
    const clickedLinkElement = event.target;

    // update choice
    const [, anchorLink] = (clickedLinkElement.href as string).split('#');
    setSelectedMenuItem(anchorLink || DEFAULT_LINK);
  }, []);

  return (
    <>
      {/* Main header */}
      <header className={cn(styles.main_header, {
        [utils.sticky_menu]: sticky_menu_bar
      })}>
        <div className={styles.main_header_content}>
          <img src="/logo.svg" alt="nTDO" />

          {/* desktop navigation menu */}
          <DesktopMenu
            entries={menu_entries}
            selected_item={selectedMenuItem}
            selection_handler={handleMenuSelection}
          />

          {/* mobile navigation menu */}
          <MobileMenu
            entries={menu_entries}
            selected_item={selectedMenuItem}
            selection_handler={handleMenuSelection}
          />
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
