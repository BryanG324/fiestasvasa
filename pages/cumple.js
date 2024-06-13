// pages/index.js
import Head from 'next/head';
import Review from '../componentes/Review';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reviews</title>
        <meta name="description" content="User reviews" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
      </Head>

      <main className={styles.main}>
        <section className={styles.container}>
          <div className={styles.title}>
            <div className={styles.underline}></div>
          </div>
          <Review />
        </section>
      </main>
    </div>
  );
}
