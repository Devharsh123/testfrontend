import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { signOut } from "../../store/actions/authActions";

const useStyles = makeStyles({
    mainroot: {
        height: "92px",
        backgroundColor: "#FFFFFF"
    },
    root: {
        flexGrow: 1
    },
    linkStyle: {
        fontSize: "14px",
        color: "#f14d54",
        textDecoration: "none"
    },
    linkStyle1: {
        fontSize: "14px",
        color: "#f14d54",
        textDecoration: "none"
    },
    cartStyle: {
        border: "1px solid",
        boxSizing: "border-box",
        padding: "1px 30px",
        textDecoration: "none",
        color: "#000000",
        borderRadius: "2px",
        boxShadow: "0px 0px 12px -3px",
        borderColor: "black",
        margin: "10px"
    },
    textStyle: {
        textDecoration: "none",
        color: "#000000",
        padding: "0px 0px 0px 50px"
    },


})

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const navigate = useNavigate();

    const handleSignout = () => {
        dispatch(signOut());
        navigate("/signin");
    };

    const handleCreateProduct = () => {
        navigate("/create");
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar color="inherit" className={classes.mainroot}>
                    <Typography variant="h4" className={classes.root}>
                        <Link className={classes.linkStyle} to="/">
                            Tatvasoft
                        </Link>
                    </Typography>
                    <Typography variant="subtitle2" className={classes.root}>
                        logged in as Harsh
                    </Typography>
                    {state.auth._id ?
                        (
                            <>
                                <Button color="inherit" className={classes.linkStyle} onClick={() => handleCreateProduct()}>
                                    create product
                                </Button>
                                <Button color="inherit"  >
                                    <Link className={classes.linkStyle1} to="/products">
                                        Product Setting
                                    </Link>
                                </Button>
                                <Button color="inherit" className={classes.linkStyle} onClick={() => handleSignout()}>
                                    Logout
                                </Button>
                                <Button color="inherit" className={classes.cartStyle} >
                                    <i class="fas fa-shopping-cart" />
                                    <Link className={classes.textStyle} to="/signup">
                                        Cart
                                    </Link>
                                </Button>
                            </>
                        )
                        :
                        (
                            <><Button color="inherit" >
                                <Link className={classes.linkStyle} to="/signin">
                                    LogIn
                                </Link>
                            </Button>
                                <Button color="inherit" >
                                    <Link className={classes.linkStyle} to="/signup">
                                        Register
                                    </Link>
                                </Button>
                            </>)
                    }

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;