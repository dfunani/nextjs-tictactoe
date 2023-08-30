import Head from 'next/head';
import Game from '../components/Game';
import { useState } from 'react';

export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(false)
  return (
    <div>
      <Head>
        <title>Tic-Tac-Afro</title>
        <meta name="description" content="Tic-Tac-Toe Game with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 onClick={() => setIsDark((prev: boolean) => !prev)}>Tic-Tac-Afro</h1>
        <Game isDark={isDark}/>
      </main>

      <footer>
        <p>POWERED BY AFRODEVS</p>
      </footer>
    </div>
  );
}
