import { Document } from '@contentful/rich-text-types';
import { ImageProps } from 'semantic-ui-react';

export type Post = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    publicationDate: Date;
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
