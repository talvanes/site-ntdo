import cn from "classnames";
import Link from "next/link";

import HamburgerButton from "@/components/Buttons/HamburgerButton";

import styles from "./MobileMenu.module.css";

interface MobileMenuEntry {
  link: string;
  description: string;
  anchor?: boolean;
  external?: boolean;
}

interface MobileMenuProps {
  entries: MobileMenuEntry[];
}

export default function MobileMenu({ entries }: MobileMenuProps) {
  return (
    <nav className={styles.mobile_menu}>
      {/* Ícone de Menu - TODO Criar Componente */}
      <HamburgerButton />

      {/* Menu Mobile */}
      <ul className={cn(styles.mobile_menu_submenu, styles.mobile_menu_submenu_no_display)}>
        {entries.map(entry => (
          <li key={entry.link} className={styles.mobile_menu_item}>
            {
              !!entry.external ? (
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noopener"
                  className={styles.mobile_menu_item_link}
                >{entry.description}</a>
              ) : (
                  <Link href={!!entry.anchor ? `#${entry.link}` : entry.link}>
                    <a className={styles.mobile_menu_item_link}>{entry.description}</a>
                  </Link>
                )
            }
          </li>
        ))}
      </ul>
    </nav>
  )
}
