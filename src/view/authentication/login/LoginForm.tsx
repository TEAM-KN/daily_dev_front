import React, { useState } from 'react'
import { Button, Container, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import GitHubIcon from '@mui/icons-material/GitHub'

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

export default function LoginForm() {
    const classes = useStyles();
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleLogin = () => {
        console.log("Username:", username)
        console.log("Password:", password)
    }

    return (
        <Container maxWidth="xs" className={classes.mainContainer}>
            <div className={classes.formContainer}>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <form className={classes.form}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        className={classes.input}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        className={classes.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={classes.buttonContainer}>
                        <Button
                            variant="contained"
                            color="info"
                            className={classes.button}
                            onClick={handleLogin}
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