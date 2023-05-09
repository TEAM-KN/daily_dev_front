import React, { useState } from 'react'
import { Button, Container, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import GitHubIcon from '@mui/icons-material/GitHub'

const useStyles = makeStyles(({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: "4px",
    },
    input: {

    },
    button: {

    },
    icon: {

    },
    githubButton: {

        backgroundColor: "#24292e",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#1f6feb",
        }
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
        <Container maxWidth="xs" className={classes.container}>
            <div className={classes.paper}>
                <Typography variant="h4" gutterBottom>
                    로그인
                </Typography>
                <form>
                    <TextField
                        label="Username"
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
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={handleLogin}
                    >
                        로그인
                    </Button>
                    <Button
                        variant="contained"
                        className={classes.githubButton}
                        startIcon={<GitHubIcon className={classes.icon} />}
                    >
                        GitHub 로그인
                    </Button>
                </form>
            </div>
        </Container>
    )
}