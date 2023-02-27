import Link from "next/link";
import Layout, { sitetitle } from "@/components/layout";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
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
      <h2 className="p-4 text-2xl underline"> Blog Posts</h2>
      <ul className="p-2 justify-center space-y-3">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className="p-2 border-2 rounded-lg border-gray-900">
            Title: {title} <br /> 
            Topics: {id} <br /> 
            Published Date: {date}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
