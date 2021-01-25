import Head from 'next/head';
import Link from 'next/link';

import { Post } from '../../utils/types';
import { useFetchPosts } from '../../hooks/postsHooks';

export const getStaticProps = async () => {
  const posts = await useFetchPosts();
  return {
    props: {
      posts,
    },
  };
};

const index: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Jorge Pasco | Blog</title>
        <link rel="icon" href="blog-favicon.ico" />
      </Head>
      <h1>Welcome to my blog.</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <Link href={`/blog/posts/${post.fields.slug}`}>
              <a>{post.fields.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default index;
