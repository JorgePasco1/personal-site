import GeomFigure from './GeomFigure';

export const LeftSectionFigures: React.FC = () => {
  const figures = [
    {
      type: 'circle' as const,
      size: '6vmax',
      color: 'yellow' as const,
      position: { left: '6vmax', top: '10vmin' },
      animation: { direction: 'counter' as const, time: 15 },
    },
    {
      type: 'square' as const,
      size: '2vmax',
      color: 'purple' as const,
      position: { right: '20vmax', top: '10vmin' },
      rotation: '-30deg',
      animation: { direction: 'clock' as const, time: 15 },
    },
    {
      type: 'square' as const,
      size: '4vmax',
      color: 'red' as const,
      position: { right: '32vmax', top: '30vmin' },
      rotation: '40deg',
      animation: { direction: 'counter' as const, time: 30 },
    },
    {
      type: 'triangle' as const,
      size: '3vmax',
      color: 'yellow' as const,
      position: { right: '10vmax', top: '29vmin' },
      rotation: '-20deg',
      animation: { direction: 'counter' as const, time: 15 },
    },
    {
      type: 'circle' as const,
      size: '3.5vmax',
      color: 'red' as const,
      position: { right: '15vmax', bottom: '15vmin' },
      animation: { direction: 'clock' as const, time: 15 },
    },
    {
      type: 'square' as const,
      size: '5vmax',
      color: 'cream' as const,
      position: { left: '15vmax', bottom: '10vmin' },
      rotation: '10deg',
      animation: { direction: 'clock' as const, time: 15 },
    },
    {
      type: 'triangle' as const,
      size: '10vmax',
      color: 'purple' as const,
      position: { left: '-5vmax', bottom: '-5vmin' },
      rotation: '40deg',
      animation: { direction: 'counter' as const, time: 60 },
    },
    {
      type: 'square' as const,
      size: '3vmax',
      color: 'yellow' as const,
      position: { right: '5vmax', bottom: '3vmin' },
      rotation: '-30deg',
      animation: { direction: 'clock' as const, time: 8 },
    },
    {
      type: 'triangle' as const,
      size: '4vmax',
      color: 'red' as const,
      position: { left: '3vmax', bottom: '40vmin' },
      rotation: '70deg',
      animation: { direction: 'counter' as const, time: 45 },
    },
    {
      type: 'circle' as const,
      size: '10vmax',
      color: 'purple' as const,
      position: { left: '35vmax', bottom: '35vmin' },
      rotation: '70deg',
      animation: { direction: 'clock' as const, time: 15 },
    },
    {
      type: 'triangle' as const,
      size: '3vmax',
      color: 'cream' as const,
      position: { left: '28vmax', top: '10vmin' },
      rotation: '15deg',
      animation: { direction: 'clock' as const, time: 10 },
    },
  ];

  return (
    <>
      {figures.map((figure, i) => (
        <GeomFigure key={i} {...figure} />
      ))}
    </>
  );
};

export const RightSectionFigures: React.FC = () => {
  const figures = [
    {
      type: 'square' as const,
      size: '8vmax',
      color: 'green' as const,
      position: { right: '-2vmax', top: '0' },
      rotation: '-30deg',
      animation: { direction: 'counter' as const, time: 60 },
    },
    {
      type: 'triangle' as const,
      size: '3vmax',
      color: 'purple' as const,
      position: { left: '2vmax', top: '15vmin' },
      rotation: '20deg',
      animation: { direction: 'clock' as const, time: 45 },
    },
    {
      type: 'square' as const,
      size: '4vmax',
      color: 'red' as const,
      position: { left: '15vmax', top: '25vmin' },
      rotation: '-60deg',
      animation: { direction: 'clock' as const, time: 25 },
    },
    {
      type: 'circle' as const,
      size: '2vmax',
      color: 'red' as const,
      position: { left: '5vmax', bottom: '25vmin' },
      animation: { direction: 'clock' as const, time: 5 },
    },
    {
      type: 'triangle' as const,
      size: '4vmax',
      color: 'yellow' as const,
      position: { right: '5vmax', bottom: '18vmin' },
      rotation: '-20deg',
      animation: { direction: 'counter' as const, time: 15 },
    },
    {
      type: 'circle' as const,
      size: '4vmax',
      color: 'green' as const,
      position: { right: '15vmax', bottom: '-3vmin' },
      animation: { direction: 'counter' as const, time: 30 },
    },
  ];

  return (
    <>
      {figures.map((figure, i) => (
        <GeomFigure key={i} {...figure} />
      ))}
    </>
  );
};
