import { FontStyle } from 'components/Text';
import { ColorBaseEnum, ColorPrimaryEnum } from 'styles/Color';

export type TitleVariant = 'title1' | 'title2' | 'title3' | 'subtitle';
export type TitleColorType = ColorBaseEnum | ColorPrimaryEnum;

export interface TitleProps {
  variant?: TitleVariant;
  color?: TitleColorType;
  label: string;
  fontStyle?: FontStyle;
  className?: string;
}
