import { Text } from 'components/Text';
import styled from 'styled-components';
import { ColorBaseGrayEnum } from 'styles/Color';

import { InputProps } from './Form.Input.type';

const InputStyled = styled.input`
  border-radius: 12px;
  border-color: ${ColorBaseGrayEnum.gray500};

  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: Inter-Light;
    font-size: 14px;
    color: ${ColorBaseGrayEnum.gray500};
  }
`;

const Input = (props: InputProps) => {
  return (
    <label className="block pt-3">
      <Text
        label={props.label}
        variant="micro"
        className="uppercase"
        fontStyle="Inter-SemiBold"
        color={ColorBaseGrayEnum.gray600}
      />
      <InputStyled
        type={props.secure ? 'password' : 'text'}
        className="block w-full mt-2 focus:border-black focus:ring-black focus:ring-0"
        placeholder={props.placeholder}
      />
    </label>
  );
};

export default Input;
