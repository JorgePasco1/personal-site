import { Post } from '../../../utils/types';
import { useFetchPosts, useFetchSinglePost } from '../../../hooks/postsHooks';

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
  return <div>Hello!</div>;
};

export default PostComponent;
