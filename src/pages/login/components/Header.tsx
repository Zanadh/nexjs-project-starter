import { Icon } from 'components/Icon';
import { Title } from 'components/Title';

const Header = () => {
  return (
    <>
      <Icon name={'yummy'} size={'64px'} />
      <Title label={'Selamat datang di'} className="mt-4" />
      <Title label={'Yummy Corp Point Of Sales'} fontStyle={'Inter-Medium'} />
    </>
  );
};

export default Header;
