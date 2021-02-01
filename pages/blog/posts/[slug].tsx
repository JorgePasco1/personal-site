import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { Icon } from 'semantic-ui-react';

import PillTag from '../../../components/blog/PillTag';
import { fetchPosts, fetchSinglePost } from '../../../hooks/postsHooks';
import {
  Post,
  GetStaticPropsReturn,
  GetStaticPathsReturn,
} from '../../../utils/types';
import { createDateText } from '../../../utils/helpers';

import styles from './Post.module.scss';
import { useRouter } from 'next/dist/client/router';

export const getStaticPaths = async (): Promise<GetStaticPathsReturn> => {
  const posts = await fetchPosts();
  return {
    paths: posts.map((post: Post) => ({
      params: { slug: post.fields.slug },
    })),
    fallback: true,
  };
};

type GetStaticPropsParams = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsParams): Promise<GetStaticPropsReturn> => {
  const post = await fetchSinglePost(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 2,
  };
};

const PostComponent: React.FC<{ post: Post }> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Post not found</h1>;
  }
  const { title, subtitle, postContent } = post.fields;
  const { createdAt: publicationDate } = post.sys;

  const PostImage: React.FC<{ node: { [key: string]: any } }> = ({ node }) => {
    return (
      <div className={styles.postImageWrapper}>
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          width={node.data.target.fields.file.details.image.width}
          height={node.data.target.fields.file.details.image.height}
        />
      </div>
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

  const CoverImage: React.FC<{ post: Post }> = ({ post }) => {
    const imgSource = post.fields.coverImage
      ? post.fields.coverImage.fields.file.url
      : 'https://source.unsplash.com/random/800x500';

    return (
      <img className={styles['cover-photo']} src={imgSource} alt="Cover" />
    );
  };

  const PostContent: React.FC = () => {
    return (
      <div>
        {documentToReactComponents(postContent, {
          renderNode: {
            // eslint-disable-next-line
            [BLOCKS.EMBEDDED_ASSET]: (node) => <PostImage node={node} />,
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
      {post && <CoverImage post={post} />}
      <NavComponent />
      <div className={styles.post}>
        <PillTag>{createDateText(new Date(publicationDate))}</PillTag>
        <h1 className={styles.post__title}>{title}</h1>
        <div className={styles.post__subtitle}>{subtitle}</div>
        <PostContent />
      </div>
    </div>
  );
};

export default PostComponent;
