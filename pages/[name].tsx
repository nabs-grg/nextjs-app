import path from 'path';
import fs from 'fs/promises';

export default function CarDetailPage(props: any) {
  const { loadedCar } = props;
  return (
    <>
      <h1>{loadedCar.id}</h1>
      <p>{loadedCar.description}</p>
    </>
  );
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const carName = params.name;

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData as any);

  const car = data.cars.find((car: any) => car.name === carName);

  return {
    props: {
      loadedCar: car,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          name: 'BMW',
        },
      },
      {
        params: {
          name: 'Mercedes',
        },
      },
      {
        params: {
          name: 'Mclaren',
        },
      },
      {
        params: {
          name: 'Audi',
        },
      },
    ],
    fallback: false,
  };
}
