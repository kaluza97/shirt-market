import React, { FC, useState } from 'react';
import { SignInWithEmailPassword } from '@/components/SignIn/SignInWithEmailAndPassword/SignInWithEmailAndPassword.component';
import {
    AuthContainer,
    FormContent,
    TabItem,
    TabPanel,
    TextLogo,
} from './AuthForm.styles';
import { Tab, Tabs, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from '@/styles/material.styles';
import Image from 'next/image'
import { Footer } from '../Footer/Footer.component';

const AuthForm: FC = () => {
    type LoginOrRegister = 'login' | 'register';

    const [value, setValue] = useState<LoginOrRegister>('login');

    const handleChange = (
        event: React.SyntheticEvent,
        newValue: LoginOrRegister
    ) => {
        setValue(newValue);
    };

    return (
        <>
            <AuthContainer>
                <FormContent>
                    <Image src="/assets/shirt.png"
                        width={50}
                        height={50}
                        alt="Yellow Shirt Logo" />
                    <Typography component='h1' variant='h5' sx={TextLogo}>
                        Shirt Market
                    </Typography>
                    <ThemeProvider theme={mainTheme}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="Panel with login or register"
                            sx={TabPanel}
                            variant="fullWidth"
                        >
                            <Tab value="login" label="Login" sx={TabItem} />
                            <Tab value="register" label="Register" sx={TabItem} />
                        </Tabs>
                    </ThemeProvider>
                    <SignInWithEmailPassword />
                </FormContent>
            </AuthContainer>
            <Footer />
        </>
    );
};

export default AuthForm;
