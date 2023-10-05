import React, { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthForm } from '@/components/Auth/AuthForm.component';
import { AuthContext } from '@/context/Auth.context';
import { PagePaths } from '@/constants/pages';
import { Footer } from '@/components/Footer/components/Footer/Footer.component';

const LoginPage: FC = () => {
  const { user } = useContext(AuthContext);
  const { push } = useRouter();

  useEffect(() => {
    user && push(PagePaths.HOME_PAGE);
  });

  return (
    <>
      <AuthForm />
      <Footer />
    </>
  );
};

export default LoginPage;
