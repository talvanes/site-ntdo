import { useCallback, useState } from "react";
import cn from "classnames";

import Link from "next/link";
import dynamic from "next/dynamic";

const HamburgerButton = dynamic(
  () => import("@/components/Buttons/HamburgerButton"),
  {
    loading: () => <p>Loading...</p>,
    ssr: true
  }
)

import styles from "./MobileMenu.module.css";

interface MobileMenuEntry {
  link: string;
  description: string;
  anchor?: boolean;
  external?: boolean;
}

interface MobileMenuProps {
  entries: MobileMenuEntry[];
  selected_item: string;
}

export default function MobileMenu({ entries, selected_item }: MobileMenuProps) {
  /* State: toggle menu */
  const [toggle, setToggle] = useState(false);

  /* Handle: toggle button */
  const handleClick = useCallback(() => {
    setToggle(state => !state);
  }, []);

  return (
    <nav className={styles.mobile_menu}>
      {/* Ícone de Menu */}
      <HamburgerButton toggle={toggle} onToggle={handleClick} />

      {/* Menu Mobile */}
      <ul className={cn(styles.mobile_menu_submenu, {
        [styles.mobile_menu_submenu_no_display]: !toggle
      })}>
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
                  <Link href={!!entry.anchor ? `#${entry.link}` : entry.link} replace={!!entry.anchor}>
                    <a className={cn(styles.mobile_menu_item_link, {
                      [styles.mobile_menu_item_link_selected]: entry.link === selected_item
                    })}>{entry.description}</a>
                  </Link>
                )
            }
          </li>
        ))}
      </ul>
    </nav>
  )
}
