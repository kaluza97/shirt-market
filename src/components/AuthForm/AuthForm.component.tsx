import React, { FC, useState } from 'react';
import { SignInWithEmailPassword } from '@/components/SignIn/SignInWithEmailAndPassword/SignInWithEmailAndPassword.component';
import SignUp from '@/components/SignUp/SignUp.component';
import Description from '@/components/DescriptionForm/Description.component';
import { Tab, Tabs, Typography } from '@mui/material';
import Image from 'next/image';
import {
    AuthContainer,
    FormContainer,
    FormContent,
    tabItem,
    tabPanel,
    textLogo,
} from '@/components/AuthForm/AuthForm.styles';

const AuthForm: FC = () => {
    type LoginOrRegister = 'login' | 'register';
    const [value, setValue] = useState<LoginOrRegister>('login');

    const handleChange = (
        _event: React.SyntheticEvent,
        newValue: LoginOrRegister
    ) => {
        setValue(newValue);
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
                    <Typography component="h1" variant="h5" sx={textLogo}>
                        Shirt Market
                    </Typography>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Panel with login or register"
                        sx={tabPanel}
                        variant="fullWidth"
                    >
                        <Tab value="login" label="Login" sx={tabItem} />
                        <Tab value="register" label="Register" sx={tabItem} />
                    </Tabs>
                    {value === 'login' && <SignInWithEmailPassword />}
                    {value === 'register' && <SignUp />}
                </FormContent>
            </FormContainer>
            <Description />
        </AuthContainer>
    );
};

export default AuthForm;
