import React from 'react'
import {Button, Container, Divider, Grid, InputAdornment, TextField} from '@mui/material'
import {makeStyles} from '@mui/styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import {Controller, useForm} from "react-hook-form"
import {TLoginForm} from './index'
import Cloud from '../../../assets/images/cloud.svg'
import axios from 'axios'


const useStyles = makeStyles(({
    formContainer: {
        backgroundColor: '#fffffff',
        padding: '2rem',
        borderRadius: '10px',
        maxWidth: '400px',
        width: '100%',
        boxShadow: '0 0 10px rgba(46, 162, 230, 0.5)',
    },
    buttonContainer: {
        marginTop: '16px',
        marginBottom: '10px',
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
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#fff', // 테두리 색상을 흰색으로 설정
            },
            '& input': {
                color: '#fff', // 텍스트 색상을 흰색으로 설정
            },
            '& input::placeholder': {
                color: '#fff', // placeholder 색상을 흰색으로 설정
            },
            '& label': {
                color: '#fff', // 아이콘 색상을 흰색으로 설정
            },
            '& svg': {
                color: '#fff', // 아이콘 색상을 흰색으로 설정
            },
        },
        '& .MuiInputLabel-root': {
            color: '#fff', // Label 색상을 흰색으로 설정
        },
        '&:hover .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#0459b0', // 마우스 호버 시 테두리 색상 변경
            },
        },
    },
    divider: {
        '&::before': {
            borderTopColor: '#f3f3f3 !important'
        },
        '&::after': {
            borderTopColor: '#f3f3f3 !important'
        },
        color: '#f3f3f3'
    },
    placeholder: {
        color: '#fff', // Placeholder 색상을 흰색으로 설정
    },
}))


export default function Login() {
    const classes = useStyles()

    const { control, handleSubmit, formState: { errors } } = useForm<TLoginForm>()

    const handleLogin = async (login: TLoginForm) => {
        try {
            const response = await axios.post(
                '/dailyb/login',
                login
            )

            if (response.headers) {
                const accessToken = response.headers['access-token']
                if (accessToken)
                    localStorage.setItem('access-token', accessToken)
            }

            alert(response.data?.message)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Grid container spacing={12}>
            <Grid item xs={12}>
                <Container
                    style={{
                        maxWidth: '100%',
                        height: '100vh',
                        backgroundSize: 'cover',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    maxWidth="xs"
                >
                    <div className={classes.formContainer}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                        }}>
                            <img style={{ width: '100px', marginTop: '-72px', paddingBottom: '40px' }} src={Cloud} />
                        </div>

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
                                        style={{
                                            margin: '8px'
                                        }}
                                        size="medium"
                                        label="Email ID"
                                        variant="outlined"
                                        className={classes.input}
                                        value={field.value ?? ''}
                                        onChange={field.onChange}
                                        error={!!errors["email"]}
                                        helperText={errors["email"] && errors["email"]?.message}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonIcon fontSize="small" color="disabled" />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="password"
                                rules={{
                                    required: {
                                        value: true,
                                        message: '비밀번호를 입력해주세요.'
                                    }
                                }}
                                render={({field}) => (
                                    <TextField
                                        style={{
                                            margin: '8px'
                                        }}
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        className={classes.input}
                                        value={field.value ?? ''}
                                        onChange={field.onChange}
                                        error={!!errors["password"]}
                                        helperText={errors["password"] && errors["password"]?.message}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockIcon fontSize="small" color="disabled" />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                )}
                            />

                            <div className={classes.buttonContainer}>
                                <Button
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: "#1e40af",
                                        },
                                    }}
                                    style={{
                                        flex: '1',
                                        backgroundColor: "#2ea2e6",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        borderRadius: "8px",
                                        padding: "8px 24px"
                                    }}
                                    type="submit"
                                    variant="contained"
                                >
                                    로그인
                                </Button>
                            </div>
                        </form>

                        <Divider
                            className={classes.divider}
                            // style={{
                            //     border: "none",
                            //     color: 'red',
                            //     borderTopColor: '#fff'
                            // }}
                            flexItem
                        >
                            또는
                        </Divider>

                        <div className={classes.buttonContainer}>
                            <Button
                                style={{
                                    flex: 1,
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    borderRadius: '8px',
                                    padding: '10px 24px'
                                }}
                                type="button"
                                variant="contained"
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