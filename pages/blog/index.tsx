import Head from 'next/head';
import Link from 'next/link';
import { Text } from '@contentful/rich-text-types';

import { Post, GetStaticPropsReturn } from '../../utils/types';
import { fetchPosts } from '../../proxies/contentfulProxy';
import { createDateText, getPreviewText } from '../../utils/helpers';

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
      <header className={styles.header} role="navigation">
        <Link href="/">
          <a className={styles['header__pictureLink']}>
            <img
              src="/assets/profile.webp"
              className={styles['header__picture']}
              alt="Profile"
            ></img>
          </a>
        </Link>
        <Link href="/">
          <a className={styles.navLink}>About</a>
        </Link>
        <a
          href="https://github.com/JorgePasco1/project-tree"
          target="_blank"
          rel="noreferrer"
          className={styles.navLink}
        >
          Work
        </a>
        <button className={`unstyled-button ${styles.active}`}>Blog</button>
        <div className={styles['menu-overlay-container']}>
          <MenuOverlay color="dark" />
        </div>
      </header>
    );
  };

  const PostPreview: React.FC<{ post: Post }> = ({ post }) => {
    const { title, coverImage, postContent, slug } = post.fields;
    const { createdAt: publicationDate } = post.sys;
    const dateText = createDateText(new Date(publicationDate));
    const linkToPost = `/blog/posts/${slug}`;
    const imageLink = coverImage?.fields.file.url;

    return (
      <>
        <div className={styles.dateText}>{dateText}</div>
        <Card
          title={title}
          description={getPreviewText(
            postContent?.content[0]?.content as Text[]
          )}
          link={linkToPost}
          imageLink={imageLink}
          className={styles.card}
        />
      </>
    );
  };

  return (
    <>
      <Head>
        <title>Jorge Pasco | Blog</title>
        <meta
          name="keyword"
          content="portfolio, javascript, developer, engineer, software, backend, frontend, blog, blogging"
        />
        <meta
          name="description"
          content="Jorge Pasco's Software Development Blog"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Jorge Pasco | Blog" />
        <meta property="og:url" content="https://www.jorgepasco.me" />
        <meta property="og:type" content="blog" />
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
