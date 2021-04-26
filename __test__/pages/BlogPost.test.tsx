import React from 'react';
import { render, screen } from '@testing-library/react';
import { Post } from '../../utils/types';
import { createDateText } from '../../utils/helpers';
import { examplePosts } from '../utils/mockData';
import { mockNextUseRouter } from '../utils/mockFunctions';

import BlogPost from '../../pages/blog/posts/[slug]';

describe('Blog Post', () => {
  const blogPost = examplePosts[0];
  beforeEach(() => {
    mockNextUseRouter({
      route: `/blog/posts/${blogPost}.fields.slug}`,
      pathname: '/blog/posts/${examplePosts[1].fields.slug}',
      query: '',
      asPath: '',
    });
    render(<BlogPost post={blogPost as Post} />);
  });

  it('renders BlogPost component without crashing', () => {
    const { title, subtitle } = blogPost.fields;
    expect(screen.getByText('Back to all posts')).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
    expect(screen.getByAltText('Cover')).toBeInTheDocument();
  });

  it('shows the corresponding cover image', () => {
    const { url: imageUrl } = blogPost.fields.coverImage.fields.file;
    expect(screen.getByAltText('Cover')).toHaveAttribute('src', imageUrl);
  });

  it('shows a tag with the correct date info', () => {
    const { updatedAt: publicationDate } = blogPost.sys;
    const dateText = createDateText(new Date(publicationDate));
    expect(screen.getByTestId('pillTag')).toHaveTextContent(dateText);
  });

  it('render images with the correct alt text', () => {
    const embeddedAssets = blogPost.fields.postContent.content.filter(
      (el) => el.nodeType === 'embedded-asset-block'
    );

    embeddedAssets.forEach((asset) => {
      const { title } = asset.data.target.fields;
      expect(screen.getByAltText(title)).toBeInTheDocument();
    });
  });
});
