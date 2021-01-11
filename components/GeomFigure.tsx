import styles from './GeomFigure.module.scss';

type GeomFigureProps = {
  type: string;
  size: string;
  color: string;
  rotation?: string;
};

const GeomFigure = ({
  type,
  size,
  color,
  rotation = null,
}: GeomFigureProps) => {
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

  const figureContainerStyles = {
    transform: rotation && `rotate(${rotation})`,
  };

  const figureClassName =
    type !== 'triangle' ? `${styles[type]} ${styles[color]}` : null;

  return (
    <div className="figure-container" style={figureContainerStyles}>
      <div className={figureClassName} style={figureStyles}>
        {type === 'triangle' && <TriangleSvg />}
      </div>
    </div>
  );
};

export default GeomFigure;
