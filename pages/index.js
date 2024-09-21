import Link from 'next/link';

const Home = () => (
  <div>
    <h1>Welcome to My Website</h1>
    <nav>
      <ul>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/sidequests">Sidequests</Link></li>
      </ul>
    </nav>
  </div>
);

export default Home;
