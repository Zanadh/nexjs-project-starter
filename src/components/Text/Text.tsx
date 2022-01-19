import styled from 'styled-components';
import { ColorBaseEnum } from 'styles/Color';

import { TextProps } from './Text.type';

const TextStyled = styled.p`
  color: ${(props: TextProps) => props.color || ColorBaseEnum.black};
  font-family: ${(props: TextProps) => props.fontStyle || 'Inter-Light'};
  font-size: ${(props: TextProps) =>
    props.variant === 'large'
      ? '16px'
      : props.variant === 'small'
      ? '13px'
      : props.variant === 'super-small'
      ? '12px'
      : props.variant === 'micro'
      ? '10px'
      : '14px'};
`;

const Text = (props: TextProps) => {
  return <TextStyled {...props}>{props.label}</TextStyled>;
};

export default Text;
