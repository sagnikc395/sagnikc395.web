//render the posts directly on the pages

import Layout from "@/components/layout";
import { getAllPostIds, getPostData } from "@/lib/posts";
import Head from "next/head";
import Date from "../../components/date";

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h2 className='text-lg p-4 font-bold text-left text-indigo-600'>
          {postData.title}
        </h2>
        {/* using date-fns */}
        <div className='p-2 pl-4 font-semibold text-orange-300'>
          <Date dateString={postData.date} />
        </div>
        {/* added content using dangerously set inner html*/}
        <div
          className='p-4 text-left font-mono'
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
};

export default Post;
