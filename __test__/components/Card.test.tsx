import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from '../../components/common/Card';

const createExampleCard = (): {
  cardTitle: string;
  cardDescription: string;
  cardLink: string;
} => {
  const cardTitle = 'Test Card';
  const cardDescription = 'This is a testing description';
  const cardLink = 'https://jorgepasco.me';

  return { cardTitle, cardDescription, cardLink };
};

describe('App', () => {
  it('renders App Component without crashing', () => {
    const { cardTitle, cardDescription, cardLink } = createExampleCard();
    render(
      <Card title={cardTitle} description={cardDescription} link={cardLink} />
    );

    expect(screen.getByText(cardTitle)).toBeInTheDocument();
    expect(screen.getByText(cardDescription)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText('Card Cover')).toBeInTheDocument();
  });
});
