import React from 'react';
import { render, screen } from '@testing-library/react';
import { Post } from '../../utils/types';
import { examplePosts } from '../utils/mockData';
import { POST_PREVIEW_DESCRIPTION_LENGTH } from '../../utils/constants';
import { truncate } from '../../utils/helpers';

import BlogIndex from '../../pages/blog/index';

describe('Blog Index', () => {
  beforeEach(() => {
    render(<BlogIndex posts={examplePosts as Post[]} />);
  });

  it('renders without crashing', async () => {
    expect(screen.getByAltText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Latest Posts')).toBeInTheDocument();
  });

  it('renders navigation components', () => {
    expect(screen.getAllByRole('navigation')).toHaveLength(2);
  });

  it('renders the correct number of Cards', () => {
    expect(screen.getAllByTestId('cardComponent')).toHaveLength(
      examplePosts.length
    );
  });

  it('renders expected post info', () => {
    examplePosts.forEach((post) => {
      const { title, postContent } = post.fields;
      const truncatedParagraph = truncate(
        postContent.content[0].content[0].value,
        POST_PREVIEW_DESCRIPTION_LENGTH
      );

      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(truncatedParagraph)).toBeInTheDocument();
    });
  });
});
