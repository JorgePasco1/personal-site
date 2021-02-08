import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectInfo } from '../../utils/types';

import Home from '../../pages/index';

const exampleProjects: ProjectInfo[] = [
  {
    html_url: 'https://github.com/JorgePasco1/natours',
    description:
      'Demo full-stack application to reserve Tours. Integrates login and payments with Stripe, among other functionalities.',
    name: 'Natours',
    imageLink: 'https://test.s3.amazonaws.com/img/projects/natours.png',
  },
  {
    html_url: 'https://github.com/JorgePasco1/example',
    description: 'Example App.',
    name: 'Example',
    imageLink: 'https://test/img/projects/example.png',
  },
];

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home projects={exampleProjects} />);

    expect(screen.getByTestId('heroComponent')).toBeInTheDocument();
    expect(screen.getByAltText('Profile')).toBeInTheDocument();
    expect(screen.getAllByAltText('LinkedIn Logo')).toHaveLength(2);
    expect(screen.getAllByAltText('Github Logo')).toHaveLength(2);
  });

  it('renders the correct amount of Cards', () => {
    render(<Home projects={exampleProjects} />);
    const numberOfProjects = exampleProjects.length;

    expect(screen.getAllByTestId('cardComponent')).toHaveLength(
      numberOfProjects
    );
  });

  it('opens a Contact Modal after clicking the "this form" link', () => {
    render(<Home projects={exampleProjects} />);

    expect(screen.queryByTestId('contactModalComponent')).toBeNull();
    userEvent.click(screen.getByText('this form'));
    expect(screen.getByTestId('contactModalComponent')).toBeInTheDocument();
  });

  it('opens overlay menu after menu button is clicked and closes it after clicked again', () => {
    render(<Home projects={exampleProjects} />);

    expect(screen.getByTestId('overlayMenuComponent')).not.toHaveClass('open');
    userEvent.click(screen.getByTestId('overlayMenuButton'));
    expect(screen.getByTestId('overlayMenuComponent')).toHaveClass('open');
    userEvent.click(screen.getByTestId('overlayMenuButton'));
    expect(screen.getByTestId('overlayMenuComponent')).not.toHaveClass('open');
  });
});
