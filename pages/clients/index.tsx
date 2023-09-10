import Link from 'next/link';
import React from 'react';

export default function Client() {
  const clients = [
    {
      id: 'george',
      name: 'George',
    },
    {
      id: 'adam',
      name: 'Adam',
    },
  ];
  return (
    <div>
      client page
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
