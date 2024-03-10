// pages/contact.js
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
    </div>
  );
}

