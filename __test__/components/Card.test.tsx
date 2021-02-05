import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from '../../components/common/Card';

describe('App', () => {
  it('renders App Component', () => {
    render(
      <Card
        title="Test Card"
        description="This is a testing description"
        link="https://jorgepasco.me"
      />
    );

    screen.debug();
  });
});
