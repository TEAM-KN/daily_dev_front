import { Grid, Typography, Stack } from '@mui/material'

import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import AuthWrapper from "../../layout/AuthWrapper";

export default function Login() {

    return (
        <AuthWrapper>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                        <Typography variant="h3">Login</Typography>
                        <Typography component={Link} to="/" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                            Don&apos;t have an account?
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <LoginForm />
                </Grid>
            </Grid>
        </AuthWrapper>
    )
}