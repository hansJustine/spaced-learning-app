import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'
import { Typography, TextField, Button } from '@mui/material';
import { signup } from '../../actions/auth';

import useStyles from './authStyles.js';

function Signup() {
    const [newUser, setNewUser] = useState({ name: '', username: '', email: '', password: '', phoneNumber: 0 });
    const navigate = useNavigate();
    const classes = useStyles();


    async function handleSignUp(e) {
        e.preventDefault();

        try {
            const msg = await signup(newUser)
            console.log(msg.message);
            navigate('/mylearnings', { replace: true });
        } catch (error) {
            console.dir(error.response.data.message);
            // setNewUser({ name: '', username: '', email: '', password: '', phoneNumber: 0 });
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
                <form onSubmit={handleSignUp}>
                    <section className={classes.rightCopy}>
                        <h2>Sign Up</h2>
                        <div className={classes.loginContainer}>
                            <p>Already have an account? <Link className={classes.link} to="/login">
                                <strong>Log In</strong></Link></p>
                        </div>
                    </section>
                    <div className={`${classes.inputContainer} ${classes.name}`}>
                        <label htmlFor="name">Full Name</label>
                        <TextField id="name" className={classes.input} required value={newUser.name} size="small" variant="outlined" onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                    </div>
                    <div className={`${classes.inputContainer} ${classes.phoneNumber}`}>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <TextField id="phoneNumber" className={classes.input} required value={newUser.phoneNumber} type="number" size="small" variant="outlined" onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })} />
                    </div>
                    <div className={`${classes.inputContainer} ${classes.username}`}>
                        <label htmlFor="username">Userame</label>
                        <TextField id="username" className={classes.input} required value={newUser.username} size="small" variant="outlined" onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} />
                    </div>
                    <div className={`${classes.inputContainer} ${classes.email}`}>
                        <label htmlFor="email">Email</label>
                        <TextField id="email" className={classes.input} required value={newUser.email} type="email" size="small" variant="outlined" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                    </div>
                    <div className={`${classes.inputContainer} ${classes.password}`}>
                        <label htmlFor="password">Password</label>
                        <TextField id="password" className={classes.input} required value={newUser.password} type="password" minLength="8" size="small" variant="outlined" onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                    </div>
                    <Button className={classes.signupBtn} variant="contained" size="large" type="submit" color="primary">Sign Up</Button>
                    <section className={`${classes.rightCopy} ${classes.legal}`}>
                        <p><span className={classes.small}>
                            By continuing, you agree to accept our <br />
                            <a className={classes.link} href="#">Privacy Policy</a> &amp;
                            <a className={classes.link} href="#">Terms of Service</a>.
                        </span></p>
                    </section>
                </form>
            </div >
        </div >
    )
}

export default Signup;
