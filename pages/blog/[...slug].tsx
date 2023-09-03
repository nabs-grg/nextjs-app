import { useRouter } from 'next/router';
import React from 'react';

export default function BlogPosts() {
  const router = useRouter();
  console.log(router.query);

  return <div>The blog post</div>;
}
