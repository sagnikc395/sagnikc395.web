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
        <p className='pt-4 flex flex-col items-center bg-orange-200'>
          <Image
            priority
            src='/images/profile.jpg'
            className='border-solid border-2 border-neutral-900 rounded-xl'
            height={144}
            width={144}
            alt="sagnik's photo"
          />
        </p>
        <section className='items-center flex flex-col'>
          <p className='text-2xl font-bold'>Sagnik&apos;s Blog </p>
          <p className='text-lg font-monospace p-2'>
            👋, I&apos;m{" "}
            <span className='underline'>
              <a href='https://github.com/sagnikc395/'>Sagnik</a>
            </span>
            .A software developer who likes to create beautiful digital
            products.
          </p>
        </section>
        <h2 className='p-4 text-2xl underline'> Blog Posts</h2>
        <ul className='p-2 justify-center space-y-3'>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className='p-2 border-2 rounded-lg border-gray-900'>
              <Link href={`/posts/${id}`}>{title}</Link>
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
