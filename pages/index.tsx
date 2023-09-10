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
  console.log(cars[0].name, 'cars');
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
          <li>{car.name}</li>
        </ul>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  console.log('regenrating....');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData as any);

  return {
    props: {
      cars: [
        {
          logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/bmw.png',
          name: 'BMW',
          id: 1,
        },
        {
          logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/marchedrs.png',
          name: 'Mercedes',
          id: 2,
        },
        {
          logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/mclaren.png',
          name: 'Mclaren',
          id: 3,
        },
        {
          logo: 'https://www.car-logos.org/wp-content/uploads/2011/09/audi.png',
          name: 'Audi',
          id: 4,
        },
      ],
    },
  };
}
