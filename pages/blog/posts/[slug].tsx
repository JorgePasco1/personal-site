import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Icon } from 'semantic-ui-react';

import PillTag from '../../../components/blog/PillTag';
import { useFetchPosts, useFetchSinglePost } from '../../../hooks/postsHooks';
import { Post } from '../../../utils/types';
import { getDateText } from '../../../utils/helpers';

import styles from './Post.module.scss';

export const getStaticPaths = async () => {
  const posts = await useFetchPosts();
  return {
    paths: posts.map((post: Post) => ({
      params: { slug: post.fields.slug },
    })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await useFetchSinglePost(params.slug);
  return {
    props: {
      post: post,
    },
  };
};

const PostComponent: React.FC<{ post: Post }> = ({ post }) => {
  const { title, subtitle, postContent } = post.fields;
  const { createdAt: publicationDate } = post.sys;

  const PostImage: React.FC<{ node: { [key: string]: any } }> = ({ node }) => {
    return (
      <Image
        src={`https:${node.data.target.fields.file.url}`}
        width={node.data.target.fields.file.details.image.width}
        height={node.data.target.fields.file.details.image.height}
      />
    );
  };

  const NavComponent: React.FC = () => {
    return (
      <div className={styles.navigation}>
        <Link href="/blog/">
          <a className={styles.backLink}>
            <Icon name="arrow left" />
            <span className={styles['navigation__back-text']}>
              Back to all posts
            </span>
          </a>
        </Link>
      </div>
    );
  };

  const CoverImage: React.FC = () => {
    return (
      post?.fields.coverImage && (
        <img
          className={styles['cover-photo']}
          src={post.fields.coverImage.fields.file.url}
        />
      )
    );
  };

  const PostContent: React.FC = () => {
    return (
      <div>
        {documentToReactComponents(postContent, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
              return <PostImage node={node} />;
            },
          },
        })}
      </div>
    );
  };

  return (
    <div className="container">
      <Head>
        <title>{title} | Jorge Pasco Blog</title>
      </Head>
      <CoverImage />
      <NavComponent />
      <div className={styles.post}>
        <PillTag>{getDateText(new Date(publicationDate))}</PillTag>
        <h1>{title}</h1>
        <div className={styles['post__subtitle']}>{subtitle}</div>
        <PostContent />
      </div>
    </div>
  );
};

export default PostComponent;
