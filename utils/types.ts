/* eslint-disable @typescript-eslint/no-explicit-any */
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

export type GetStaticPropsReturn = {
  props: {
    [key: string]: any;
  };
  revalidate?: number;
};

export type GetStaticPathsReturn = {
  paths: any[];
  fallback: boolean;
};

export type ProjectInfo = {
  html_url: string;
  description: string;
  name: string;
  imageLink?: string;
};

export type SendGridResponse = {
  statusCode: number;
  body: unknown;
  headers: {
    server: string;
    date: string;
    'content-length': string;
    connection: string;
    'x-message-id': string;
    'access-control-allow-origin': string;
    'access-control-allow-methods': string;
    'access-control-allow-headers': string;
    'access-control-max-age': string;
    'x-no-cors-reason': string;
  };
};
