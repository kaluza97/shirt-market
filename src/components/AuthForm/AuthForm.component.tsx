import React, { FC, useState } from 'react';
import { SignInWithEmailPassword } from '@/components/SignIn/SignInWithEmailAndPassword/SignInWithEmailAndPassword.component';
import {
    AuthContainer,
    Footer,
    FormContent,
    Svg,
    TabItem,
    TabPanel,
    TextFooter,
    TextLogo,
} from './AuthForm.styles';
import { Tab, Tabs, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from '@/styles/material.styles';
import Image from 'next/image'
import { Colors } from '@/styles/variables';

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
            <Footer>
                <Svg viewBox="0 0 1440 320"><path fill={Colors.primary} fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,138.7C480,160,600,224,720,208C840,192,960,96,1080,74.7C1200,53,1320,107,1380,133.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></Svg>
                <Typography component='h3' variant='h6' sx={TextFooter}>
                    Website created by Piotr Kałużny
                </Typography>
            </Footer>
        </>
    );
};

export default AuthForm;
