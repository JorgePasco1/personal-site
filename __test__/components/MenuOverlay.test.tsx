import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MenuOverlay from '../../components/common/MenuOverlay';

describe('MenuOverlay', () => {
  it('renders dark MenuOverlay Component without crashing', () => {
    render(<MenuOverlay color="dark" />);

    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should activate dialog after clicking the button', () => {
    render(<MenuOverlay color="dark" />);
    expect(screen.getByRole('dialog')).not.toHaveClass('open');
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('dialog')).toHaveClass('open');
  });

  it('should activate dialog after key down', () => {
    render(<MenuOverlay color="dark" />);
    expect(screen.getByRole('dialog')).not.toHaveClass('open');
    fireEvent.keyDown(screen.getByRole('button'));
    expect(screen.getByRole('dialog')).toHaveClass('open');
  });

  it('should deactivate dialog after clicking on the about link', () => {
    render(<MenuOverlay color="dark" />);
    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByText('About'));
    expect(screen.getByRole('dialog')).not.toHaveClass('open');
  });
});
