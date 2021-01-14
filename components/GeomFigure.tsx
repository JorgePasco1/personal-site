import styles from './GeomFigure.module.scss';

type GeomFigureProps = {
  type: string;
  size: string;
  color: string;
  rotation?: string;
  animation?: {
    direction: 'clock' | 'counter';
    time: number;
  };
  position: {
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
  };
};

const GeomFigure = ({
  type,
  size,
  color,
  rotation = null,
  position,
  animation = null,
}: GeomFigureProps) => {
  const figureContainerStyles = {
    position: 'absolute' as 'absolute',
    ...position,
    transform: rotation && `rotate(${rotation})`,
    zIndex: 1,
    animation:
      animation &&
      `${
        animation.direction === 'clock' ? 'clockRotation' : 'invertRotation'
      } ${animation.time * 100}s infinite linear`,
  };

  const figureStyles = {
    width: size,
    height: size,
  };

  const TriangleSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245.46 220.12">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            d="M98.1,14.22,3.85,177.47a28.44,28.44,0,0,0,24.63,42.65H217a28.43,28.43,0,0,0,24.62-42.65L147.35,14.22A28.43,28.43,0,0,0,98.1,14.22Z"
            className={styles[`${color}-svg`]}
          />
        </g>
      </g>
    </svg>
  );

  const figureClassName =
    type !== 'triangle' ? `${styles[type]} ${styles[color]}` : null;

  const rotationClass = animation && `rotation-${animation}`;

  return (
    <div
      className={rotationClass && styles[rotationClass]}
      style={figureContainerStyles}
    >
      <div className={`${figureClassName} squash-animation`} style={figureStyles}>
        {type === 'triangle' && <TriangleSvg />}
      </div>
    </div>
  );
};

export default GeomFigure;
