import React, { FC, SyntheticEvent, useState } from 'react';
import { SignInWithEmailPassword } from '@/components/SignIn/SignInWithEmailAndPassword/SignInWithEmailAndPassword.component';
import SignUp from '@/components/SignUp/SignUp.component';
import { Tab, Tabs } from '@mui/material';
import {
  AuthContainer,
  FormContainer,
  FormContent,
  tabPanelOption,
  tabPanel,
  LogoContainer,
} from '@/components/Auth/AuthForm.styles';
import { LoginOrRegisterType } from '@/components/Auth/AuthForm.types';
import { Description } from '@/components/Description/Description.component';
import { Logo } from '../Logo/Logo.component';

export const AuthForm: FC = () => {
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
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Tabs
            value={auth}
            onChange={handleChange}
            aria-label="Panel with login or register"
            sx={tabPanel}
            variant="fullWidth"
          >
            <Tab value="login" label="Login" sx={tabPanelOption} />
            <Tab value="register" label="Register" sx={tabPanelOption} />
          </Tabs>
          {auth === 'login' && <SignInWithEmailPassword />}
          {auth === 'register' && <SignUp />}
        </FormContent>
      </FormContainer>
      <Description />
    </AuthContainer>
  );
};
