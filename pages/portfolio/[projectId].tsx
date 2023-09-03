import { useRouter } from 'next/router';

export default function PortfolioProject() {
  const router = useRouter();
  return (
    <div>
      Portfolio project page
      <button>add more projects</button>
    </div>
  );
}
