import styled from 'styled-components';

import { ButtonNormalProps } from './Button.Normal.type';

const ButtonNormalStyled = styled.button`
  font-family: Inter-Medium;
  font-size: 14px;
`;

const ButtonNormal = (props: ButtonNormalProps) => {
  return (
    <ButtonNormalStyled
      className={`${props.className} ${
        props?.variant === 'secondary' ? 'bg-none text-black' : 'bg-black text-white'
      } w-full h-12 rounded-lg`}
      type={props.type || 'button'}>
      {props.label}
    </ButtonNormalStyled>
  );
};

export default ButtonNormal;
