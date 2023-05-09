import { Grid } from '@mui/material'
import LoginForm from './LoginForm'

export default function Login() {

    return (
        <Grid container spacing={12}>
            <Grid item xs={12}>
                <LoginForm />
            </Grid>
        </Grid>
    )
}