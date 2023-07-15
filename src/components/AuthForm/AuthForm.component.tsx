import React, { FC, useState } from 'react';
import { SignInWithEmailPassword } from '@/components/SignIn/SignInWithEmailAndPassword/SignInWithEmailAndPassword.component';
import {
    AuthContainer,
    FormContent,
    TabPanel,
} from './AuthForm.styles';
import { Tab, Tabs } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from '@/styles/material.styles';

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
        <AuthContainer>
            <FormContent>
                <ThemeProvider theme={mainTheme}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Panel with login or register"
                        sx={TabPanel}
                        variant="fullWidth"
                    >
                        <Tab value="login" label="Login" />
                        <Tab value="register" label="Register" />
                    </Tabs>
                </ThemeProvider>
                <SignInWithEmailPassword />
            </FormContent>
        </AuthContainer>
    );
};

export default AuthForm;
