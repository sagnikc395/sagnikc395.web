import Link from "next/link";
import Layout, { sitetitle } from "@/components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{sitetitle}</title>
      </Head>
      <section className="items-center flex flex-col">
        <p className="text-2xl font-bold">Sagnik's Blog </p>
        <p className="text-lg font-monospace">
        👋, I'm <span className="underline">Sagnik</span>. I'm a software
          developer and like to create beautiful digital products.
        </p>
      </section>
      <div className="flex flex-col items-center">
        <ul className="">
          <li className="font-semibold">
            <a href="https://github.com/sagnikc395/">Github</a>
          </li>
          <li className="font-semibold">
            <a href="https://twitter.com/sagnikchat3/">Twitter</a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
