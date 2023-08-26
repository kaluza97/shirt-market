import React, { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthForm from '@/components/Auth/AuthForm.component';
import { Footer } from '@/components/Footer/Footer.component';
import { AuthContext } from '@/context/Auth.context';

const LoginPage: FC = () => {
  const { user } = useContext(AuthContext);
  const { push } = useRouter();

  useEffect(() => {
    user && push('/');
  });

  return (
    <>
      <AuthForm />
      <Footer />
    </>
  );
};

export default LoginPage;
