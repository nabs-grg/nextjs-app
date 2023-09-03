import { useRouter } from 'next/router';
import React from 'react';

export default function SelectedClient() {
  const router = useRouter();
  console.log(router.query);

  return <div>Selected project of a client</div>;
}
