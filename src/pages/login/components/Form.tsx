import { Button } from 'components/Button';
import { Form } from 'components/Form';
import { Text } from 'components/Text';
import React from 'react';

const FormLogin = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <form className="mt-1">
      <Form.Input label="email" placeholder="Masukkan alamat email" />
      <Form.Input label="password" placeholder="Masukkan password" secure={!showPassword} />
      <label className="flex items-center pt-3.5 mb-0.5">
        <input
          type="checkbox"
          className="appearance-none checked:bg-black checked:hover:bg-black checked:focus:bg-black focus:ring-0"
          onChange={() => setShowPassword(!showPassword)}
        />
        <Text label="Tampilkan password" className="ml-2.5" />
      </label>
      <Button.Normal label="Log In" className="mt-6" />
      <Button.Normal label="Lupa Password?" className="mt-2" variant="secondary" />
    </form>
  );
};

export default React.memo(FormLogin);
