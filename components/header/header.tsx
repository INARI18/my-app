import React from 'react';
import styles from './header.module.css';
import Navigation from '../navigation/navigation';

export default function header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>SOMETHING</h1>
      <div className={styles.headerNavbar}>
        <Navigation />
      </div>
    </header>
  );
}