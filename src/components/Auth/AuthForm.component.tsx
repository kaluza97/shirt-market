import React, { FC, SyntheticEvent, useState } from 'react';
import { SignInWithEmailPassword } from '@/components/SignIn/SignInWithEmailAndPassword/SignInWithEmailAndPassword.component';
import SignUp from '@/components/SignUp/SignUp.component';
import { Tab, Tabs, Typography } from '@mui/material';
import Image from 'next/image';
import {
  AuthContainer,
  FormContainer,
  FormContent,
  tabItem,
  tabPanel,
  logoText,
} from '@/components/Auth/AuthForm.styles';
import { LoginOrRegisterType } from './AuthForm.types';
import { Description } from '../Description/Description.component';

const AuthForm: FC = () => {
  const [auth, setAuth] = useState<LoginOrRegisterType>('login');

  const handleChange = (
    _event: SyntheticEvent,
    newValue: LoginOrRegisterType
  ) => {
    setAuth(newValue);
  };

  return (
    <AuthContainer>
      <FormContainer>
        <FormContent>
          <Image
            src="/assets/shirt.png"
            width={50}
            height={50}
            alt="Green shirt"
          />
          <Typography component="h1" variant="h5" sx={logoText}>
            Shirt Market
          </Typography>
          <Tabs
            value={auth}
            onChange={handleChange}
            aria-label="Panel with login or register"
            sx={tabPanel}
            variant="fullWidth"
          >
            <Tab value="login" label="Login" sx={tabItem} />
            <Tab value="register" label="Register" sx={tabItem} />
          </Tabs>
          {auth === 'login' && <SignInWithEmailPassword />}
          {auth === 'register' && <SignUp />}
        </FormContent>
      </FormContainer>
      <Description />
    </AuthContainer>
  );
};

export default AuthForm;
