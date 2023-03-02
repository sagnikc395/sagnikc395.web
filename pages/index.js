import Link from "next/link";
import Layout, { sitetitle } from "@/components/layout";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

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
        <section className="items-center flex flex-col p-4">
          
            <p className="text-3xl font-bold text-indigo-600">
              Sagnik&apos;s Blog{" "}
            </p>
          <div className="text-xl sm:text-xl  lg:text-3xl p-2 justify-center">
            Hi, 👋 ! I&apos;m a software developer and tinkerer;
            <div className="text-2xl flex flex-row justify-center text-transparent bg-clip-text bg-gradient-to-r  from-rose-400 via-fuchsia-500 to-indigo-500 font-semibold ">
              making beautiful , impactful and useful{" "}
            </div>
            things on the internet.
          </div>
          <div className="">
            <ul className="flex flex-row gap-x-2">
              <li className="text-lg text-red-400 "><Link href="/about/">About</Link></li>
              <li className="text-lg text-red-400 "><Link href="/projects/">Projects</Link></li>
              <li className="text-lg text-red-400 "><Link href="/books/">Reading</Link></li>
            </ul>
          </div>
        </section>
        <h2 className="p-4 text-2xl font-semibold  text-indigo-600 ">
          {" "}
          Posts:
        </h2>
        <ul className="p-2 justify-center space-y-3">
          {allPostsData.map(({ id, date, title }) => (
            <li
              key={id}
              className="p-2 hover:border-2 rounded-lg hover:border-violet-500"
            >
              <Link href={`/posts/${id}`} className="">
                {title}
              </Link>
              <br />
              <small className="text-start">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
