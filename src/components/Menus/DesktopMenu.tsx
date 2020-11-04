import Link from "next/link";

import styles from "./DesktopMenu.module.css";

interface DesktopMenuEntry {
  link: string;
  description: string;
  anchor?: boolean;
  external?: boolean;
}

interface DesktopMenuProps {
  entries: DesktopMenuEntry[];
}

export default function DesktopMenu({ entries }: DesktopMenuProps) {
  return (
    <nav className={styles.desktop_menu}>
      <ul className={styles.desktop_menu_container}>
        {entries.map(entry => (
          <li className={styles.desktop_menu_item}>
            {
              !!entry.external ? (
                <a
                key={entry.link}
                href={entry.link}
                target="_blank"
                rel="noopener"
                className={styles.desktop_menu_item_link}
                >{entry.description}</a>
              ) : (
                <Link
                key={entry.link}
                href={!!entry.anchor ? `#${entry.link}` : entry.link}>
                  <a className={styles.desktop_menu_item_link}>{entry.description}</a>
                </Link>
              )
            }
          </li>
        ))}

        {/* <li className={styles.desktop_menu_item}>
          <a className={styles.desktop_menu_item_link} href="/">Início</a>
        </li>
        <li className={styles.desktop_menu_item}>
          <a className={styles.desktop_menu_item_link} href="/about">Sobre</a>
        </li>
        <li className={styles.desktop_menu_item}>
          <a className={styles.desktop_menu_item_link} href="/services">Serviços</a>
        </li>
        <li className={styles.desktop_menu_item}>
          <a className={styles.desktop_menu_item_link} href="/foundations">Missão</a>
        </li>
        <li className={styles.desktop_menu_item}>
          <a className={styles.desktop_menu_item_link} href="/cases">Cases</a>
        </li>
        <li className={styles.desktop_menu_item}>
          <a className={styles.desktop_menu_item_link} href="/contact">Contato</a>
        </li>

        <li className={styles.desktop_menu_item}>
          <Link href="/blog">
            <a className={styles.desktop_menu_item_link}>Blog</a>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
