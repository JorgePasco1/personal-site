// Taken and adapted from https://codepen.io/KingKabir/pen/QyPwgG
import { useState } from 'react';
import styles from './MenuOverlay.module.scss';
import Link from 'next/link';

const MenuOverlay: React.FC<{ color?: 'dark' | 'light' }> = ({
  color = 'light',
}) => {
  const [overlayActive, setOverlayActive] = useState(false);

  return (
    <>
      <div
        className={`${styles[color]} ${styles.button_container} ${
          overlayActive && styles.active
        }`}
        id={styles.toggle}
        onClick={() => setOverlayActive(!overlayActive)}
        onKeyDown={() => setOverlayActive(!overlayActive)}
        role="button"
        tabIndex={0}
        data-testid="overlayMenuButton"
        aria-label="Open Menu"
      >
        <span className={styles.top}></span>
        <span className={styles.middle}></span>
        <span className={styles.bottom}></span>
      </div>
      <div
        className={`${styles.overlay} ${overlayActive && styles.open}`}
        id={styles.overlay}
        role="dialog"
        data-testid="overlayMenuComponent"
      >
        <nav className={styles['overlay-menu']}>
          <ul>
            <li>
              <a href="/#main-content" onClick={() => setOverlayActive(false)}>
                About
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JorgePasco1/project-tree"
                target="_blank"
                rel="noreferrer"
              >
                Work
              </a>
            </li>
            <li>
              <Link href="/blog">
                <a className="nav-bar__item">Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MenuOverlay;
