import React from 'react';
import styles from './navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="/home/home" className={styles.navLink}>Home</a></li>
        <li className={styles.navItem}><a href="/form/form" className={styles.navLink}>Form</a></li>
        <li className={styles.navItem}><a href="/about" className={styles.navLink}>About</a></li>
        <li className={styles.navItem}><a href="/contact" className={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  );
}