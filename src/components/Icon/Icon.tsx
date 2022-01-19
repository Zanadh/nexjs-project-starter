import { YummyIcon } from 'assets/icons';

import { IconProps } from './Icon.type';

const Icon = ({ name, color, size }: IconProps) => {
  const svgIconProps = {
    fill: color || '#212121',
    height: size || '24px',
    width: size || '24px',
  };

  const iconName = {
    yummy: <YummyIcon {...svgIconProps} />,
  };

  return iconName[name];
};

export default Icon;
