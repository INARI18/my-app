import React from 'react';
import styles from './navigation.module.css'
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const { t } = useTranslation();
  
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="/home/home" className={styles.navLink}>{t('navbar.home')}</a></li>
        <li className={styles.navItem}><a href="/form/form" className={styles.navLink}>{t('navbar.form')}</a></li>
        <li className={styles.navItem}><a href="/about" className={styles.navLink}>{t('navbar.about')}</a></li>
        <li className={styles.navItem}><a href="/contact" className={styles.navLink}>{t('navbar.contact')}</a></li>
      </ul>
    </nav>
  );
}