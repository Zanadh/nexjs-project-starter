import { ColorBaseEnum, ColorBaseGrayEnum, ColorPrimaryEnum } from 'styles/Color';

export type TextVariant = 'large' | 'micro' | 'regular' | 'small' | 'super-small';
export type FontStyle = 'Inter-Light' | 'Inter-Medium' | 'Inter-SemiBold';
export type TextColorType = ColorBaseEnum | ColorPrimaryEnum | ColorBaseGrayEnum;

export interface TextProps {
  fontStyle?: FontStyle;
  color?: TextColorType;
  variant?: TextVariant;
  label: string;
  className?: string;
}
