import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "sagnikc395";
export const sitetitle = "sagnik's blog";

const Layout = ({ children, home }) => {
  return (
    <div className='p-4 pt-3 flex flex-col min-h-screen items-center bg-neutral-900 text-slate-100'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='blog' />
      </Head>
      <main>{children}</main>
      <footer className='mt-auto'>
        {!home && (
          <div className='items-center text-indigo-600 font-bold text-2xl'>
            <Link href='/'>Back to Home</Link>
          </div>
        )}
        <ul className='flex flex-row justify-center gap-x-4'>
          <li className='font-semibold text-pink-400 text-xl'>
            <a href='https://github.com/sagnikc395/'>Github</a>
          </li>
          <li className='font-semibold text-pink-400 text-xl'>
            <a href='https://github.com/sagnikchat3/'>Twitter</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
