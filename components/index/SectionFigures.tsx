import GeomFigure from './GeomFigure';

export const LeftSectionFigures = () => {
  const figures = [
    {
      type: 'circle',
      size: '6vmax',
      color: 'yellow',
      position: { left: '6vmax', top: '10vmin' },
      animation: { direction: 'counter' as const, time: 15 },
    },
    {
      type: 'square',
      size: '2vmax',
      color: 'light-purple',
      position: { right: '20vmax', top: '10vmin' },
      rotation: '-30deg',
      animation: { direction: 'clock' as const, time: 15 },
    },
    {
      type: 'square',
      size: '4vmax',
      color: 'red',
      position: { right: '32vmax', top: '30vmin' },
      rotation: '40deg',
      animation: { direction: 'counter' as const, time: 30 },
    },
    {
      type: 'triangle',
      size: '3vmax',
      color: 'yellow',
      position: { right: '10vmax', top: '29vmin' },
      rotation: '-20deg',
      animation: { direction: 'counter' as const, time: 15 },
    },
    {
      type: 'circle',
      size: '3.5vmax',
      color: 'red',
      position: { right: '15vmax', bottom: '15vmin' },
      animation: { direction: 'clock' as const, time: 15 },
    },
    {
      type: 'square',
      size: '5vmax',
      color: 'cream',
      position: { left: '15vmax', bottom: '10vmin' },
      rotation: '10deg',
      animation: { direction: 'clock' as const, time: 15 },
    },
    {
      type: 'triangle',
      size: '10vmax',
      color: 'purple',
      position: { left: '-5vmax', bottom: '-5vmin' },
      rotation: '40deg',
      animation: { direction: 'counter' as const, time: 60 },
    },
    {
      type: 'square',
      size: '3vmax',
      color: 'yellow',
      position: { right: '5vmax', bottom: '3vmin' },
      rotation: '-30deg',
      animation: { direction: 'clock' as const, time: 8 },
    },
    {
      type: 'triangle',
      size: '4vmax',
      color: 'red',
      position: { left: '3vmax', bottom: '40vmin' },
      rotation: '70deg',
      animation: { direction: 'counter' as const, time: 45 },
    },
    {
      type: 'circle',
      size: '10vmax',
      color: 'purple',
      position: { left: '35vmax', bottom: '35vmin' },
      rotation: '70deg',
      animation: { direction: 'clock' as const, time: 15 },
    },
    {
      type: 'triangle',
      size: '3vmax',
      color: 'cream',
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

export const RightSectionFigures = () => {
  const figures = [
    {
      type: 'square',
      size: '8vmax',
      color: 'green',
      position: { right: '-2vmax', top: '0' },
      rotation: '-30deg',
      animation: { direction: 'counter' as const, time: 60 },
    },
    {
      type: 'triangle',
      size: '3vmax',
      color: 'purple',
      position: { left: '2vmax', top: '15vmin' },
      rotation: '20deg',
      animation: { direction: 'clock' as const, time: 45 },
    },
    {
      type: 'square',
      size: '4vmax',
      color: 'red',
      position: { left: '15vmax', top: '25vmin' },
      rotation: '-60deg',
      animation: { direction: 'clock' as const, time: 25 },
    },
    {
      type: 'circle',
      size: '2vmax',
      color: 'red',
      position: { left: '5vmax', bottom: '25vmin' },
      animation: { direction: 'clock' as const, time: 5 },
    },
    {
      type: 'triangle',
      size: '4vmax',
      color: 'yellow',
      position: { right: '5vmax', bottom: '18vmin' },
      rotation: '-20deg',
      animation: { direction: 'counter' as const, time: 15 },
    },
    {
      type: 'circle',
      size: '4vmax',
      color: 'green',
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
