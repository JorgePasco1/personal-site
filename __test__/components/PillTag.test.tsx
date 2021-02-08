import React from 'react';
import { render, screen } from '@testing-library/react';

import PillTag from '../../components/blog/PillTag';

describe('PillTag', () => {
  it('should render the PillTag component without crashing', () => {
    render(<PillTag>Testing Pill</PillTag>);
    expect(screen.getByText('Testing Pill')).toBeInTheDocument();
  });
});
