import Head from 'next/head';
import Link from 'next/link';

import { Post, GetStaticPropsReturn } from '../../utils/types';
import { fetchPosts } from '../../hooks/postsHooks';
import { truncate } from '../../utils/helpers';

import Card from '../../components/common/Card';
import MenuOverlay from '../../components/common/MenuOverlay';

import styles from './blogIndex.module.scss';

export const getStaticProps = async (): Promise<GetStaticPropsReturn> => {
  const posts = await fetchPosts();
  return {
    props: {
      posts,
    },
  };
};

const index: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const Header: React.FC = () => {
    return (
      <header className={styles.header}>
        <img
          src="/assets/profile.png"
          className={styles['header__picture']}
          alt="Profile"
        ></img>
        <Link href="/">
          <a>About</a>
        </Link>
        <a
          href="https://github.com/JorgePasco1/project-tree"
          target="_blank"
          rel="noreferrer"
        >
          Work
        </a>
        <a className={styles.active}>Blog</a>
        <div className={styles['menu-overlay-container']}>
          <MenuOverlay color="dark" />
        </div>
      </header>
    );
  };

  const PostPreview: React.FC<{ post: Post }> = ({ post }) => {
    const { title, coverImage, postContent, slug } = post.fields;
    const linkToPost = `/blog/posts/${slug}`;
    const imageLink = coverImage?.fields.file.url;

    return (
      <Card
        title={title}
        description={
          truncate(postContent.content[0].content[0].value, 150) + '...'
        }
        link={linkToPost}
        imageLink={imageLink}
        className={styles.card}
      />
    );
  };

  return (
    <>
      <Head>
        <title>Jorge Pasco | Blog</title>
        <link rel="icon" href="blog-favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>Latest Posts</h1>
        {posts.map((post) => (
          <PostPreview post={post} key={post.sys.id} />
        ))}
      </main>
    </>
  );
};

export default index;
