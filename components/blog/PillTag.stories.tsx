import 'semantic-ui-css/semantic.min.css';

import PillTag from './PillTag';

export default {
  component: PillTag,
};

export const Default = (): React.ReactElement => <PillTag>Default</PillTag>;
export const CustomGreen = (): React.ReactElement => (
  <PillTag backgroundColor="#008000">Custom Green</PillTag>
);
export const LightBackground = (): React.ReactElement => (
  <PillTag backgroundColor="#add8e6" color="#212121">
    Light Background
  </PillTag>
);
