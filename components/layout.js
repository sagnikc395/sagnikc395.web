import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "sagnikc395";
export const sitetitle = "sagnik's blog";

const Layout = ({ children, home }) => {
  return (
    <div className='p-4 pt-3 flex flex-col items-center bg-orange-200'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='blog' />
      </Head>
      <main>{children}</main>
      {!home && (
        <div className=''>
          <Link href='/'>Back to Home</Link>
        </div>
      )}
      <footer>
        <div className='flex flex-col items-center'>
          <ul className='flex flex-row gap-x-4'>
            <li className='font-semibold'>
              <a href='https://github.com/sagnikc395/'>Github</a>
            </li>
            <li className='font-semibold'>
              <a href='https://twitter.com/sagnikchat3/'>Twitter</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
