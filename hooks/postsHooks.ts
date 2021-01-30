import { createClient } from 'contentful';
import { Post } from '../utils/types';

const POST_CONTENT_TYPE = 'blogPost';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
});

export const fetchPosts = async (): Promise<Post[]> => {
  const getPosts = async (): Promise<Post[]> => {
    const response = await client.getEntries({
      content_type: POST_CONTENT_TYPE,
    });
    return response.items as Post[];
  };

  const posts = await getPosts();
  return posts as Post[];
};

export const fetchSinglePost = async (slug: string): Promise<Post> => {
  const getPost = async (): Promise<Post> => {
    const response = await client.getEntries({
      content_type: POST_CONTENT_TYPE,
      'fields.slug': slug,
    });
    return response.items[0] as Post;
  };

  const post = await getPost();
  return post as Post;
};
