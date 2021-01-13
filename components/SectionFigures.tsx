import GeomFigure from '../components/GeomFigure';

export const LeftSectionFigures = () => {
  const figures = [
    {
      type: 'circle',
      size: '6vw',
      color: 'yellow',
      position: { left: '6vw', top: '10vh' },
      animation: { direction: 'counter' as const, time: 15 },
    },
    {
      type: 'square',
      size: '2vw',
      color: 'light-purple',
      position: { right: '20vw', top: '10vh' },
      rotation: '-30deg',
      animation: { direction: 'clock' as const, time: 15 },
    },
    {
      type: 'square',
      size: '4vw',
      color: 'red',
      position: { right: '32vw', top: '30vh' },
      rotation: '40deg',
      animation: { direction: 'counter' as const, time: 30 },
    },
    {
      type: 'triangle',
      size: '3vw',
      color: 'yellow',
      position: { right: '10vw', top: '29vh' },
      rotation: '-20deg',
      animation: { direction: 'counter' as const, time: 15 },
    },
    {
      type: 'circle',
      size: '3.5vw',
      color: 'cream',
      position: { right: '20vw', bottom: '15vh' },
      animation: { direction: 'clock' as const, time: 15 },
    },
    {
      type: 'square',
      size: '5vw',
      color: 'cream',
      position: { left: '15vw', bottom: '10vh' },
      rotation: '10deg',
      animation: { direction: 'clock' as const, time: 15 },
    },
    {
      type: 'triangle',
      size: '10vw',
      color: 'purple',
      position: { left: '-5vw', bottom: '-5vh' },
      rotation: '40deg',
      animation: { direction: 'counter' as const, time: 60 },
    },
    {
      type: 'square',
      size: '3vw',
      color: 'yellow',
      position: { right: '5vw', bottom: '3vh' },
      rotation: '-30deg',
      animation: { direction: 'clock' as const, time: 8 },
    },
    {
      type: 'triangle',
      size: '4vw',
      color: 'red',
      position: { left: '3vw', bottom: '40vh' },
      rotation: '70deg',
      animation: { direction: 'counter' as const, time: 45 },
    },
    {
      type: 'circle',
      size: '10vw',
      color: 'purple',
      position: { left: '35vw', bottom: '35vh' },
      rotation: '70deg',
      animation: { direction: 'clock' as const, time: 15 },
    },
    {
      type: 'triangle',
      size: '3vw',
      color: 'cream',
      position: { left: '28vw', top: '10vh' },
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
      size: '8vw',
      color: 'green',
      position: { right: '-2vw', top: '0' },
      rotation: '-30deg',
      animation: { direction: 'counter' as const, time: 60 },
    },
    {
      type: 'triangle',
      size: '3vw',
      color: 'purple',
      position: { left: '2vw', top: '15vh' },
      rotation: '20deg',
      animation: { direction: 'clock' as const, time: 45 },
    },
    {
      type: 'square',
      size: '4vw',
      color: 'red',
      position: { left: '15vw', top: '25vh' },
      rotation: '-60deg',
      animation: { direction: 'clock' as const, time: 25 },
    },
    {
      type: 'circle',
      size: '2vw',
      color: 'red',
      position: { left: '5vw', bottom: '25vh' },
      animation: { direction: 'clock' as const, time: 5 },
    },
    {
      type: 'triangle',
      size: '4vw',
      color: 'yellow',
      position: { right: '5vw', bottom: '18vh' },
      rotation: '-20deg',
      animation: { direction: 'counter' as const, time: 15 },
    },
    {
      type: 'circle',
      size: '4vw',
      color: 'green',
      position: { right: '15vw', bottom: '-3vh' },
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
