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
          <li key={entry.link} className={styles.desktop_menu_item}>
            {
              !!entry.external ? (
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noopener"
                  className={styles.desktop_menu_item_link}
                >{entry.description}</a>
              ) : (
                  <Link href={!!entry.anchor ? `#${entry.link}` : entry.link}>
                    <a className={styles.desktop_menu_item_link}>{entry.description}</a>
                  </Link>
                )
            }
          </li>
        ))}
      </ul>
    </nav>
  );
}
