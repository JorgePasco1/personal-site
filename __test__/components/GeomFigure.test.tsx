import React from 'react';
import { render, screen } from '@testing-library/react';

import GeomFigure from '../../components/index/GeomFigure';

describe('MenuOverlay', () => {
  it('renders GeomFigure Component without crashing', () => {
    render(
      <GeomFigure
        type="circle"
        size="1vh"
        color="red"
        position={{ left: '1rem', top: '1rem' }}
      />
    );

    expect(screen.getByTitle('GeomFigureContainer')).toBeInTheDocument();
    expect(screen.getByTitle('GeomFigure')).toBeInTheDocument();
    expect(screen.queryByTitle('Triangle SVG')).not.toBeInTheDocument();
  });

  it('renders with the correct styles', () => {
    render(
      <GeomFigure
        type="square"
        size="1vh"
        color="green"
        position={{ left: '6rem', top: '2rem' }}
      />
    );

    expect(screen.getByTitle('GeomFigureContainer')).toHaveStyle({
      position: 'absolute',
      left: '6rem',
      top: '2rem',
      zIndex: 1,
    });
    expect(screen.getByTitle('GeomFigure')).toHaveClass(
      'green square squash-animation'
    );
  });

  it('renders a Triangle when type is triangle', () => {
    render(
      <GeomFigure
        type="triangle"
        size="1vh"
        color="cream"
        position={{ left: '1rem', top: '1rem' }}
      />
    );

    expect(screen.getByTitle('Triangle SVG')).toBeInTheDocument();
  });

  it('has a rotate animation', () => {
    render(
      <GeomFigure
        type="square"
        size="1vh"
        color="green"
        position={{ left: '7rem', top: '20rem' }}
        animation={{
          direction: 'clock',
          time: 10,
        }}
      />
    );

    expect(screen.getByTitle('GeomFigureContainer')).toHaveStyle({
      animation: 'clockRotation 1000s infinite linear',
    });
  });
});
