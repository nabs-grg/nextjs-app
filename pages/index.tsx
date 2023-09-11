import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import path from 'path';
import fs from 'fs/promises';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage(props: any) {
  const { cars } = props;
  return (
    <div className={styles.container}>
      Hello WORLD
      <ul>
        {/* <li>
          <Link href="/portfolio">Portfolio</Link>
        </li> */}
        {/* <li>
          <Link href="/clients">Portfolio</Link>
        </li> */}
      </ul>
      {cars.map((car: any) => (
        <ul key={car.id}>
          <Link href={`/${car.name}`}>
            {' '}
            <li>{car.name}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData as any);

  if (data.cars.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      cars: data.cars,
    },
    revalidate: 10,
  };
}
