import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <div className={styles.container}>
      Hello WORLD
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Portfolio</Link>
        </li>
      </ul>
    </div>
  );
}
