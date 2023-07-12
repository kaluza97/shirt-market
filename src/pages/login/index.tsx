import React, { FC, useContext } from 'react';
import { SignInWithEmailPassword } from '@/components/SignIn/SignInWithEmailAndPassword';
import { AuthContext } from '@/context/AuthContext';

const LoginPage: FC = () => {
    const { authError } = useContext(AuthContext);

    return (
        <>
            <p>Login</p>
            <SignInWithEmailPassword />
            <p>{authError.code}</p>
        </>
    );
};

export default LoginPage;
