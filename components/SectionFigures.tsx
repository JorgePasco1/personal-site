import GeomFigure from '../components/GeomFigure';

export const LeftSectionFigures = () => {
  const figures = [
    {
      type: 'circle',
      size: '6vw',
      color: 'yellow',
      position: { left: '6vw', top: '10vh' },
    },
    {
      type: 'square',
      size: '2vw',
      color: 'purple',
      position: { right: '20vw', top: '10vh' },
      rotation: '-30deg',
    },
    {
      type: 'square',
      size: '4vw',
      color: 'red',
      position: { right: '32vw', top: '32vh' },
      rotation: '40deg',
    },
    {
      type: 'triangle',
      size: '3vw',
      color: 'yellow',
      position: { right: '10vw', top: '29vh' },
      rotation: '-20deg',
    },
    {
      type: 'circle',
      size: '3.5vw',
      color: 'purple',
      position: { right: '20vw', bottom: '15vh' },
    },
    {
      type: 'square',
      size: '5vw',
      color: 'cream',
      position: { left: '15vw', bottom: '10vh' },
      rotation: '10deg',
    },
    {
      type: 'triangle',
      size: '10vw',
      color: 'purple',
      position: { left: '-5vw', bottom: '-5vh' },
      rotation: '40deg',
    },
    {
      type: 'square',
      size: '3vw',
      color: 'yellow',
      position: { right: '5vw', bottom: '3vh' },
      rotation: '-30deg',
    },
  ];

  return (
    <>
      {figures.map((figure) => (
        <GeomFigure {...figure} />
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
    },
    {
      type: 'triangle',
      size: '3vw',
      color: 'purple',
      position: { left: '2vw', top: '15vh' },
      rotation: '20deg',
    },
    {
      type: 'square',
      size: '4vw',
      color: 'red',
      position: { left: '15vw', top: '25vh' },
      rotation: '-60deg',
    },
    {
      type: 'circle',
      size: '2vw',
      color: 'red',
      position: { left: '5vw', bottom: '25vh' },
    },
    {
      type: 'triangle',
      size: '4vw',
      color: 'yellow',
      position: { right: '5vw', bottom: '18vh' },
      rotation: '-20deg',
    },
    {
      type: 'circle',
      size: '4vw',
      color: 'yellow',
      position: { right: '15vw', bottom: '-3vh' },
    },
  ];

  return (
    <>
      {figures.map((figure) => (
        <GeomFigure {...figure} />
      ))}
    </>
  );
};
