import React from 'react';

import Input from './Form.Input';

const Form = (props: { children: React.ReactNode }) => {
  return props.children;
};

Form.Input = Input;

export default Form;
