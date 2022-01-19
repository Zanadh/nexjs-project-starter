import type { NextPage } from 'next';
import styled from 'styled-components';

import FormLogin from './components/Form';
import Header from './components/Header';

const ContainerStyled = styled.div`
  width: 500px;
`;

const Login: NextPage = () => {
  return (
    <section className="bg-neutral-200 h-screen w-full flex items-center">
      <ContainerStyled className="mx-auto bg-white p-10 rounded-none sm:rounded-lg">
        <Header />
        <FormLogin />
      </ContainerStyled>
    </section>
  );
};

export default Login;
