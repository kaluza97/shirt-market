import React, { FC } from 'react';
import { SignInWithEmailPassword } from '@/components/SignIn/SignInWithEmailAndPassword';

const AuthPage: FC = () => {
    return (
        <>
            <p>Auth Page</p>
            <SignInWithEmailPassword />
        </>
    );
};

export default AuthPage;
