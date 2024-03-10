// pages/about.js
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <Link href="/"><a>Home</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </div>
  );
}

