import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import { Post } from '../../../utils/types';
import { useFetchPosts, useFetchSinglePost } from '../../../hooks/postsHooks';

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
  console.log(post);
  const { title, postContent } = post.fields;
  return (
    <div className="container">
      <img
        className={styles['cover-photo']}
        src={post.fields.coverImage?.fields.file.url}
      />
      <div className={styles.post}>
        <h1>{title}</h1>
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
