import { Document } from '@contentful/rich-text-types';

export type Post = {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    subtitle: string;
    postContent: Document;
    slug: string;
    coverImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    author: string;
  };
};
