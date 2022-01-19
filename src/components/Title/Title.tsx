import styled from 'styled-components';
import { ColorBaseGrayEnum } from 'styles/Color';

import { TitleProps } from './Title.type';

const Title1Styled = styled.h1`
  font-size: 36px;
  font-family: ${(props: TitleProps) => props.fontStyle || 'Inter-Light'};
  color: ${ColorBaseGrayEnum.gray700};
`;

const Title2Styled = styled.h2`
  font-size: 24px;
  font-family: ${(props: TitleProps) => props.fontStyle || 'Inter-Light'};
  color: ${ColorBaseGrayEnum.gray700};
`;

const Title3Styled = styled.h3`
  font-size: 20px;
  font-family: ${(props: TitleProps) => props.fontStyle || 'Inter-Light'};
  color: ${ColorBaseGrayEnum.gray700};
`;

const SubtitleStyled = styled.h4`
  font-size: 18px;
  font-family: ${(props: TitleProps) => props.fontStyle || 'Inter-Light'};
  color: ${ColorBaseGrayEnum.gray700};
`;

const Title = (props: TitleProps) => {
  switch (props.variant) {
    case 'title1':
      return <Title1Styled {...props}>{props.label}</Title1Styled>;
    case 'title2':
      return <Title2Styled {...props}>{props.label}</Title2Styled>;
    case 'title3':
      return <Title3Styled {...props}>{props.label}</Title3Styled>;
    case 'subtitle':
      return <SubtitleStyled {...props}>{props.label}</SubtitleStyled>;
    default:
      return <Title1Styled {...props}>{props.label}</Title1Styled>;
  }
};

export default Title;
