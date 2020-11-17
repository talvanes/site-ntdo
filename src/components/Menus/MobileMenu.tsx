import cn from "classnames";
import Link from "next/link";
import dynamic from "next/dynamic";

// import HamburgerButton from "@/components/Buttons/HamburgerButton";
const HamburgerButton = dynamic(
  () => import("@/components/Buttons/HamburgerButton"),
  {
    loading: () => <p>Loading...</p>,
    ssr: true
  }
)

import styles from "./MobileMenu.module.css";
import { useCallback, useState } from "react";

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
