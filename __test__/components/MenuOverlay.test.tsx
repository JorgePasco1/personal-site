import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MenuOverlay from '../../components/common/MenuOverlay';

describe('MenuOverlay', () => {
  it('renders MenuOverlay Component without crashing', () => {
    render(<MenuOverlay />);

    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should activate dialog after clicking the button', () => {
    render(<MenuOverlay />);
    expect(screen.getByRole('dialog')).not.toHaveClass('open');
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('dialog')).toHaveClass('open');
  });

  it('should activate dialog after key down', () => {
    render(<MenuOverlay />);
    expect(screen.getByRole('dialog')).not.toHaveClass('open');
    fireEvent.keyDown(screen.getByRole('button'));
    expect(screen.getByRole('dialog')).toHaveClass('open');
  });

  it('should deactivate dialog after clicking on the about link', () => {
    render(<MenuOverlay />);
    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByText('About'));
    expect(screen.getByRole('dialog')).not.toHaveClass('open');
  });

  it('should display light version when no color prop is passed', () => {
    render(<MenuOverlay />);
    expect(screen.getByRole('button')).toHaveClass('light');
  });

  it('should display dark version when color prop is dark', () => {
    render(<MenuOverlay color="dark" />);
    expect(screen.getByRole('button')).toHaveClass('dark');
  });
});
