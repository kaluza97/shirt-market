import React, { FC } from 'react';
import AuthForm from '@/components/AuthForm/AuthForm.component';
import { Footer } from '@/components/Footer/Footer.component';

const LoginPage: FC = () => (
  <>
    <AuthForm />
    <Footer />
  </>
);


export default LoginPage;
