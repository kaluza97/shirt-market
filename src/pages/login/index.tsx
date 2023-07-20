import React, { FC, useContext, useEffect } from 'react';
import AuthForm from '@/components/AuthForm/AuthForm.component';
import { Footer } from '@/components/Footer/Footer.component';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/AuthContext';


const LoginPage: FC = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    user && router.push('/');
  }, []);

  return (
    <>
      <AuthForm />
      <Footer />
    </>

  );
};

export default LoginPage;