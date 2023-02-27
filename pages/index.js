import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>sagnikc395.blog</title>
        <meta name="description" content="my blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="p-4">
          <h2 className="text-3xl underline">sagnikc395.blog</h2>
        </div>
        <div className="px-6 pt-1.5">
          <h2 className="text-2xl">Posts</h2>
          <ul>
            <li><Link href="/posts/first-post/">Hello World</Link></li>
          </ul>
        </div>
      </main>
    </>
  );
}
