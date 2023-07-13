import React, { FC, useContext } from 'react';
import { SignInWithEmailPassword } from '@/components/SignIn/SignInWithEmailAndPassword/SignInWithEmailAndPassword.component';
import { AuthContext } from '@/context/AuthContext';
import { Grid, Typography } from '@mui/material';
import {
    ErrorMessageWrapper,
    FormWrapper,
    Img,
} from './SignInForm.styles';
import { Colors } from '@/styles/variables';

const SignInForm: FC = () => {
    const { authError } = useContext(AuthContext);

    return (
        <Grid container sx={{ height: '100vh', alignItems: 'center' }}>
            <Grid sx={{ width: '50%' }}>
                <FormWrapper>
                    <Typography
                        component="h2"
                        variant="h4"
                        sx={{
                            color: Colors.primary,
                            marginBottom: '40px',
                            fontFamily: 'Abril Fatface',
                        }}
                    >
                        Login and start shopping
                    </Typography>
                    <SignInWithEmailPassword />
                    <ErrorMessageWrapper>
                        <Typography
                            sx={{
                                color: Colors.primary,
                                visibility: authError.code ? 'visible' : 'hidden',
                                textAlign: 'center',
                            }}
                        >{`Error: ${authError.code}`}</Typography>
                    </ErrorMessageWrapper>
                </FormWrapper>
            </Grid>
            <Grid
                sx={{
                    display: 'flex',
                    width: '50%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    background: `linear-gradient(-110deg, ${Colors.primary} 60%, ${Colors.secondary} 60%)`,
                }}
            >
                <Typography
                    component="h1"
                    variant="h3"
                    sx={{
                        color: Colors.white,
                        marginBottom: '30px',
                        fontFamily: 'Abril Fatface',
                        padding: '10px',
                        backgroundColor: Colors.black,
                    }}
                >
                    Fashion market
                </Typography>
                <Typography
                    component="h3"
                    variant="h5"
                    sx={{
                        color: Colors.black,
                        marginBottom: '60px',
                        fontFamily: 'Abril Fatface',
                    }}
                >
                    The biggest fashion trends
                </Typography>
                <Img
                    width="500"
                    height="500"
                    priority={true}
                    src="/assets/fasionModelAI.png"
                    alt="Picture of Fashion Model"
                />
            </Grid>
        </Grid >
    );
};

export default SignInForm;
