import { Label } from 'semantic-ui-react';

type PillTagProps = {
  backgroundColor?: string;
  color?: string;
};

const PillTag: React.FC<PillTagProps> = ({
  backgroundColor = '#ed254e',
  color = 'white',
  children,
}) => {
  return (
    <Label
      circular
      style={{
        backgroundColor: backgroundColor,
        color: color,
        padding: '.5em 1em !important',
      }}
    >
      {children}
    </Label>
  );
};

export default PillTag;
