// Taken and adapted from https://codepen.io/KingKabir/pen/QyPwgG
import { useState } from 'react';
import styles from './MenuOverlay.module.scss';

const MenuOverlay = () => {
  const [overlayActive, setOverlayActive] = useState(false);

  return (
    <>
      <div
        className={`${styles.button_container} ${
          overlayActive && styles.active
        }`}
        id={styles.toggle}
        onClick={() => setOverlayActive(!overlayActive)}
      >
        <span className={styles.top}></span>
        <span className={styles.middle}></span>
        <span className={styles.bottom}></span>
      </div>
      <div
        className={`${styles.overlay} ${overlayActive && styles.open}`}
        id={styles.overlay}
      >
        <nav className={styles['overlay-menu']}>
          <ul>
            <li>
              <a href="#main-content" onClick={() => setOverlayActive(false)}>About</a>
            </li>
            <li>
              <a href="https://github.com/JorgePasco1/project-tree" target="_blank">Work</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MenuOverlay;
