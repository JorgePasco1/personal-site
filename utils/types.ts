export type Post = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    publicationDate: Date;
    postContent: string;
    slug: string;
  };
};
