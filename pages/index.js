// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <Link href="/about"><a>About</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </div>
  );
}

