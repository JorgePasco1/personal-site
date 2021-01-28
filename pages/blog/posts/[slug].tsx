import Image from 'next/image';
import Head from 'next/head';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import {
  format,
  differenceInDays,
  differenceInCalendarYears,
  formatDistance,
} from 'date-fns';

import { Post } from '../../../utils/types';
import { useFetchPosts, useFetchSinglePost } from '../../../hooks/postsHooks';
import PillTag from '../../../components/blog/PillTag';

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
  console.log(postContent);
  const { createdAt: publicationDate } = post.sys;

  const getDateText = (date: Date) => {
    const daysDifference = differenceInDays(new Date(), date);
    const yearsDifference = differenceInCalendarYears(new Date(), date);
    return Math.abs(daysDifference) > 7
      ? format(
          date,
          Math.abs(yearsDifference) > 0 ? 'LLLL do, yyyy' : 'LLLL do'
        )
      : `${formatDistance(date, new Date())} ago`;
  };

  return (
    <div className="container">
      <Head>
        <title>{title} | Jorge Pasco Blog</title>
      </Head>
      <img
        className={styles['cover-photo']}
        src={post.fields.coverImage?.fields.file.url}
      />
      <div className={styles.post}>
        <PillTag>{getDateText(new Date(publicationDate))}</PillTag>
        <h1>{title}</h1>
        <div className={styles['post__subtitle']}>{subtitle}</div>
        <div>
          {documentToReactComponents(postContent, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <Image
                  src={`https:${node.data.target.fields.file.url}`}
                  width={node.data.target.fields.file.details.image.width}
                  height={node.data.target.fields.file.details.image.height}
                />
              ),
            },
          })}
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
