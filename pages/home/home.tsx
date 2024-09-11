import React from 'react';
import styles from './home.module.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

export default function home() {
  return (
    <div>
      <Header />
      <main>
        <h2 className={styles.heading2}>SOMETHING 2!</h2>
        <p className={styles.paragraph}>i dont know what to write in here :P.</p>
      </main>
      <Footer />
    </div>
  );
}