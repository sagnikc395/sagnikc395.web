import Link from "next/link";
import Head from "next/head";

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>Hello World</title>
      </Head>
      <div className="p-4">
        <h2 className="text-4xl font-semibold">This is my first post.</h2>
        <p>
          <Link href="/">Back</Link>
        </p>
      </div>
    </>
  );
};

export default FirstPost;
