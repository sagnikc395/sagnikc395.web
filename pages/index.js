import Link from "next/link";
import Layout, { sitetitle } from "@/components/layout";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Image from "next/image";

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
    <>
      <Layout>
        <Head>
          <title>{sitetitle}</title>
        </Head>
        <section className='items-center flex flex-col p-4'>
          <p className='text-3xl font-bold text-indigo-600'>
            Sagnik&apos;s Blog{" "}
          </p>
          <p className='text-xl  p-4'>
            I am a software developer who likes to create{" "}
            <span className='bg-violet-500 pl-0.5 pr-0 text-gray-900'>
              beautiful{" "}
            </span>
            digital products.
          </p>
        </section>
        <h2 className='p-4 text-2xl font-bold  text-indigo-600'>
          {" "}
          Blog Posts:
        </h2>
        <ul className='p-2 justify-center space-y-3'>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className='p-2 border-2 rounded-lg border-violet-500'>
              <Link href={`/posts/${id}`} className=''>
                {title}
              </Link>
              <br />
              <small className=''>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
