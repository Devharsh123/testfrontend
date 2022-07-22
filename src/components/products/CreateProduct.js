import React, { useState } from "react";

import { Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../store/actions/productActions";
import { useNavigate } from "react-router-dom";
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
    contentStyle: {
        margin: "30px auto"
    },
    spacing: {
        marginTop: "20px",
        marginBottom: "20px"
    },
    submitStyle: {
        marginTop: "20px",
        backgroundColor: "#f14d54",
        color: "#FFFFFF",
    }
});

const CreateProduct = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const state = useSelector(state => state);
    const [value, setValue] = useState("");

    const [product, setProduct] = useState({
        name: "",
        categories: "",
        description: "",
        price:""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(product));
        setProduct({
            name: "",
            categories: "",
            description: "",
            price:""
        })
    navigate("/products")
    }

    const handleChange = (e) => {
        setValue(e.target.value);
        setProduct({ ...product, categories: e.target.value })
    }
    return (
        <>
            <Container maxWidth="md">
                <Container className={classes.contentStyle} maxWidth="sd">
                    <form
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <Typography variant="h7"> Edit Product </Typography>
                        <TextField
                            className={classes.spacing}
                            id="enter-product-name"
                            label="Product name"
                            variant="outlined"
                            fullWidth
                            value={product.name}
                            onChange={(e) => setProduct({ ...product, name: e.target.value })}
                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={product.categories}
                                onChange={handleChange}>
                                <MenuItem value={"BEVERAGE"}>BEVERAGE</MenuItem>
                                <MenuItem value={"CROCKERY"}>CROCKERY</MenuItem>
                                <MenuItem value={"FOOD"}>FOOD</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            className={classes.spacing}
                            id="enter-product-description"
                            label="Description"
                            variant="outlined"
                            fullWidth
                            value={product.description}
                            onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        />

                        <TextField
                            className={classes.spacing}
                            id="enter-product-price"
                            label="Price"
                            variant="outlined"
                            fullWidth
                            value={product.price}
                            onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        />
                        <Button
                            className={classes.submitStyle}
                            variant="contained"
                            type="submit">
                            Save
                        </Button>
                    </form>
                </Container>
            </Container>
        </>
    );
};

export default CreateProduct;