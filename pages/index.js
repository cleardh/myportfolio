import { useEffect } from 'react';
import Head from 'next/head';
import Resume from '../components/Resume';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Achievements from '../components/Achievements';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 1, behavior: 'smooth' });
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
        <Achievements />
        <Resume />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
