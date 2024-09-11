import React from 'react';
import styles from './header.module.css';
import Navigation from '../navigation/navigation';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        {t('header.title')}
      </h1>
      <div className={styles.headerNavbar}>
        <Navigation />
      </div>
    </header>
  );
}