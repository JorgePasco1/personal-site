import { createClient } from 'contentful';
import { Post } from '../utils/types';

const POST_CONTENT_TYPE = 'blogPost';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
});

export const useFetchPosts = async (): Promise<Post[]> => {
  const getPosts = async () => {
    const response = await client.getEntries({
      content_type: POST_CONTENT_TYPE,
    });
    return response.items;
  };

  const posts = await getPosts();
  return posts as Post[];
};

export const useFetchSinglePost = async (slug: string): Promise<Post> => {
  const getPost = async () => {
    const response = await client.getEntries({
      content_type: POST_CONTENT_TYPE,
      'fields.slug': slug,
    });
    return response.items[0];
  };

  const post = await getPost();
  return post as Post;
};
