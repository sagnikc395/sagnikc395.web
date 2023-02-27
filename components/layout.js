import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "sagnikc395";
export const sitetitle = "sagnik's blog";

const Layout = ({ children, home }) => {
  return (
    <div className="pt-3 flex flex-col items-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="blog" />
      </Head>
      <header className="header">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="border-2 rounded-lg border-b-gray-900"
              height={144}
              width={144}
              alt=""
            />
            <h1 className="">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className="border-2 rounded-3xl border-gray-900"
                height={100}
                width={108}
                alt=""
              />
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="">
          <Link href="/">Back to Home</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
