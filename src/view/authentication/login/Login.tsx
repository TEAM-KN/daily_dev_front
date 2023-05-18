import React from 'react'
import {Button, Container, Divider, Grid, TextField} from '@mui/material'
import {makeStyles} from '@mui/styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import {Controller, useForm} from "react-hook-form"
import {TLoginForm} from './index'
import axios from 'axios'
import Cloud from '../../../assets/images/cloud.svg'

export default function Login() {
    const classes = useStyles()

    const { control, handleSubmit, formState: { errors } } = useForm<TLoginForm>()

    const handleLogin = async (login: TLoginForm) => {
        try {
            const response = await axios.post(
                '/dailyb/login',
                login
            )

            const accessToken = response.headers['access-token']
            if (accessToken)
                localStorage.setItem('access-token', accessToken)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Grid container spacing={12}>
            <Grid item xs={12}>
                <Container maxWidth="xs" className={classes.mainContainer}>
                    <div className={classes.formContainer}>
                        <img
                            width="124"
                            height="124"
                            src={Cloud}
                        />

                        <form onSubmit={handleSubmit(handleLogin)} className={classes.form}>
                            <Controller
                                control={control}
                                name="email"
                                rules={{
                                    required: {
                                        value: true,
                                        message: '이메일을 입력해 주세요.'
                                    }
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
                                        value={field.value ?? ''}
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
                            </div>
                        </form>

                        <Divider flexItem >
                            또는
                        </Divider>

                        <div className={classes.buttonContainer}>
                            <Button
                                variant="contained"
                                className={classes.githubButton}
                                startIcon={<GitHubIcon />}
                            >
                                GitHub 로그인
                            </Button>
                        </div>
                    </div>
                </Container>
            </Grid>
        </Grid>
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
    buttonContainer: {
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
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
    button: {
        flex: '1',
        marginTop: '16px',
        marginBottom: '16px',
        backgroundColor: "#74b9ff",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "8px",
        padding: "8px 24px",
        '&:hover': {
            backgroundColor: "#1e40af",
        },
    },
    githubButton: {
        flex: 1,
        margin: '8px',
        backgroundColor: "#fff",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "8px",
        padding: "10px 24px",
        '&:hover': {
            backgroundColor: "#333",
        },
    }
}))