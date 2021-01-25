import { createClient } from 'contentful';

const POST_CONTENT_TYPE = 'blogPost';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
});

export const useFetchPosts = async (): Promise<any> => {
  const getPosts = async () => {
    const response = await client.getEntries({
      content_type: POST_CONTENT_TYPE,
    });
    return response.items;
  };

  const posts = await getPosts();
  return posts;
};

export const useFetchSinglePost = async (slug: string): Promise<any> => {
  const getPost = async () => {
    const response = await client.getEntries({
      content_type: POST_CONTENT_TYPE,
      'fields.slug': slug,
    });
    return response.items[0]
  };

  const post = await getPost();
  return post;
};
