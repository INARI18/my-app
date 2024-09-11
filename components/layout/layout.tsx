import Header from '../../components/header/header';
import Footer from '../../components/footer/footer'
import styles from './layout.module.css';

export default function Layout({ children }: any) {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
}