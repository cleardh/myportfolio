import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Resume from '../components/Resume';
import Welcome from '../components/Welcome';
import About from '../components/About';

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <Head>
        <title>Dongha Kang</title>
        <meta name="description" content="Dongha Kang Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='background'></div>
        <Welcome />
        <About />
        <Resume />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
