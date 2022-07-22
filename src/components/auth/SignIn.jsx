import React, { useState } from "react";
import { Navigate, Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/actions/authActions";

import { Container } from '@material-ui/core';
import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    contentStyle:{
        margin: "30px auto"
    },
    formStyle: {
        margin: "0px auto",
        padding: "30px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px",
    },
    spacing: {
        marginTop: "20px"
    },
    buttonStyle: {
        marginTop: "20px",
        backgroundColor: "#f14d54",
        color: "#FFFFFF",
    },
    registerButton: {
        marginBottom: "20px",
        color: "#FFFFFF",
        textDecoration: "none",
        backgroundColor: "#f14d54",
    },
    registerButton1:{
        color: "#FFFFFF",
        textDecoration: "none",
    }
});

const SignIn = () => {
    const classes = useStyles();
    const navigate=useNavigate();
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const [creds, setCreds] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(creds));
        setCreds({
            email: "",
            password: ""
        })
        navigate("/")
    };

    if (auth._id) return navigate("/")

    return (
        <>
         <Container maxWidth="md">
          <Container className={classes.contentStyle} maxWidth="sd">
            <Typography variant="h5" >New customer</Typography>
            <Button variant="contained" className={classes.registerButton}>
                <Link  className={classes.registerButton1} to="/signup">
                    Create an Account
                </Link>
            </Button>


            <form
                className={classes.formStyle}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}>
                <Typography variant="h5"> Registered customer</Typography>
                <TextField
                    className={classes.spacing}
                    id="enter-email"
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    value={creds.email}
                    onChange={(e) => setCreds({ ...creds, email: e.target.value })}
                />
                <TextField
                    className={classes.spacing}
                    id="enter-password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    value={creds.password}
                    onChange={(e) => setCreds({ ...creds, password: e.target.value })}
                />
                <Button
                    className={classes.buttonStyle}
                    variant="contained"
                    type="submit">
                    Login
                </Button>
            </form>
            </Container>
            </Container>
        </>
    );
}

export default SignIn;