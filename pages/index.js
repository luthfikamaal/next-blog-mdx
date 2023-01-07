import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Hello World</h1>
      <Link href={'/posts'}>Posts</Link>
    </>
  );
}
