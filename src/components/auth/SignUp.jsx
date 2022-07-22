import React, { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
    contentStyle: {
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
    buttonStyle:{
        marginTop: "20px",
        backgroundColor:"#f14d54",
        color: "#FFFFFF",
    }
});

const SignUp = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log(state);
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(user));
        setUser({
            name: "",
            email: "",
            phone: "",
            password: ""
        });
    };
    return (
        <>
         <Container maxWidth="md">
          <Container className={classes.contentStyle} maxWidth="sd">
                        <form
                className={classes.formStyle}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Typography variant="h7"> Personal information</Typography>
                <TextField
                    className={classes.spacing}
                    id="enter-name"
                    label="enter name"
                    variant="outlined"
                    fullWidth
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <TextField
                    className={classes.spacing}
                    id="enter-email"
                    type="email"
                    label="enter email"
                    variant="outlined"
                    fullWidth
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <TextField
                    className={classes.spacing}
                    id="enter-phone"
                    type="phone"
                    label="enter phone"
                    variant="outlined"
                    fullWidth
                    value={user.phone}
                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />

                <TextField
                    className={classes.spacing}
                    id="enter-password"
                    type="password"
                    label="enter password"
                    variant="outlined"
                    fullWidth
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <Button
                    className={classes.buttonStyle}
                    variant="contained"
                    type="submit">
                    Register
                </Button>
            </form>
            </Container>
            </Container>

        </>
    );
}

export default SignUp;