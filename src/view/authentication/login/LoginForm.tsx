import React from 'react'
import {Button, Container, TextField, Typography} from '@mui/material'
import {makeStyles} from '@mui/styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import {LoginForm} from './index'
import {Controller, useForm} from 'react-hook-form'
import axios from "axios";

export default function LoginForm() {
    const classes = useStyles();
    const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>()

    const handleLogin = async (login: LoginForm) => {
        try {
            const response = await axios.post<any>(
                '/auth/login',
                login
            )

            const accessToken = response.headers['access-token']
            if (accessToken)
                localStorage.setItem('access-token', accessToken)

        } catch (error) {

        }
    }

    return (
        <Container maxWidth="xs" className={classes.mainContainer}>
            <div className={classes.formContainer}>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit(handleLogin)} className={classes.form}>
                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required: true
                        }}
                        render={({field}) => (
                            <TextField
                                label="Email"
                                variant="outlined"
                                className={classes.input}
                                value={field.value ?? ''}
                                onChange={field.onChange}
                                error={!!errors["email"]}
                                helperText={errors["email"] && errors["email"]?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        rules={{
                            required: true
                        }}
                        render={({field}) => (
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                className={classes.input}
                                value={field.value}
                                onChange={field.onChange}
                                error={!!errors["password"]}
                                helperText={errors["password"] && errors["password"]?.message}
                            />
                        )}
                    />

                    <div className={classes.buttonContainer}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="info"
                            className={classes.button}
                        >
                            로그인
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.button}
                        >
                            회원가입
                        </Button>
                    </div>
                    <Button
                        variant="contained"
                        className={classes.githubButton}
                        startIcon={<GitHubIcon />}
                    >
                        GitHub 로그인
                    </Button>
                </form>
            </div>
        </Container>
    )
}


const useStyles = makeStyles(({
    mainContainer: {
        maxWidth: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '10px',
        maxWidth: '400px',
        width: '100%',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        margin: '8px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        flex: '1',
        margin: '8px',
        backgroundColor: "#556cd6",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "8px",
        padding: "8px 24px",
        '&:hover': {
            backgroundColor: "#1e40af",
        },
    },
    divider: {
        margin: "16px 0",
        width: "100%",
        borderBottom: "1px solid #D1D1D1",
    },
    githubButton: {
        margin: '8px',
        backgroundColor: "#000",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "8px",
        padding: "8px 24px",
        '&:hover': {
            backgroundColor: "#333",
        },
    }
}));