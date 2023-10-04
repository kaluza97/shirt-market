import React, { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthForm from '@/components/Auth/AuthForm.component';
import { BasicFooter } from '@/components/Footer/components/BasicFooter/BasicFooter.component';
import { AuthContext } from '@/context/Auth.context';
import { PagePaths } from '@/constants/pages';

const LoginPage: FC = () => {
  const { user } = useContext(AuthContext);
  const { push } = useRouter();

  useEffect(() => {
    user && push(PagePaths.HOME_PAGE);
  });

  return (
    <>
      <AuthForm />
      <BasicFooter />
    </>
  );
};

export default LoginPage;
