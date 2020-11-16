import { useCallback, useState } from "react";
import { Motion, spring, presets } from "react-motion";

import styles from "./HamburgerButton.module.css";

export default function HamburgerButton() {
  /* State: toggle button */
  const [toggle, setToggle] = useState(false);

  /* Handler: button click */
  const handleClick = useCallback(() => {
    setToggle(state => !state);
  }, []);

  return (
    <div className={styles.hamburger_button}>
      <div className={styles.hamburger_button_content}>
        {/* Use SVG here */}
        <svg className={styles.hamburger_button_svg} viewBox="0 0 96 96"
          height="3rem" onClick={handleClick}>
          <Motion style={{
            x: spring(Number(toggle), presets.wobbly),
            y: spring(Number(!toggle), presets.wobbly)
          }}>
            {({ x, y }) => (
              <g id="navicon"
                fill="none"
                stroke="currentColor"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line
                  transform={`translate(${x * 12}, ${x * -7}) rotate(${x * 45}, 7, 26)`}
                  x1="7" y1="26" x2="89" y2="26"
                />
                <line
                  transform={`translate(${x * 12}, ${x * 7}) rotate(${x * -45}, 7, 70)`}
                  x1="7" y1="70" x2="89" y2="70"
                />
                <line
                  transform={`translate(${x * -96})`}
                  opacity={y}
                  x1="7" y1="48" x2="89" y2="48"
                />
              </g>
            )}
          </Motion>
        </svg>
      </div>
    </div>
  )
}
