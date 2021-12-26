import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'
import { Typography, TextField, Button } from '@mui/material';
import { login } from '../../actions/auth';
import { useDispatchContext } from '../../GlobalState';


import useStyles from './authStyles.js';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const classes = useStyles();
    const { dispatchUser } = useDispatchContext();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            let msg = await login({ email, password });
            console.log(msg.message);
            navigate('/mylearnings', { replace: true });
        } catch (error) {
            console.dir(error.response.data.message);
            setEmail('');
            setPassword('');
        }
    }

    return (

        <div className={classes.splitScreen}>
            <div className={`${classes.leftSide} ${classes.leftNright}`}>
                <section className={classes.leftCopy}>
                    <Typography variant="h2">Forget more, <br /> Know more</Typography>
                    <p>Join us and schedule your learning.</p>
                </section>
            </div>
            <div className={`${classes.rightSide} ${classes.leftNright}`}>
                <form onSubmit={handleLogin}>
                    <section className={classes.rightCopy}>
                        <h2>Login</h2>
                        <div className={classes.loginContainer}>
                            <p>Do not have an account? <Link className={classes.link} to="/signup">
                                <strong>Sign Up</strong></Link></p>
                        </div>
                    </section>
                    <div className={`${classes.inputContainer} ${classes.email}`}>
                        <label htmlFor="email">Email</label>
                        <TextField id="email" className={classes.input} required value={email} type="email" size="small" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={`${classes.inputContainer} ${classes.password}`}>
                        <label htmlFor="password">Password</label>
                        <TextField id="password" className={classes.input} required value={password} type="password" minLength="8" size="small" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Button className={classes.signupBtn} variant="contained" size="large" type="submit" color="primary">Login</Button>
                </form>
            </div >
        </div >
    )
}

export default Login;
