import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProduct, editProduct, deleteProduct } from "../../store/actions/productActions";

import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Paper } from "@mui/material";
import { Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
    contentStyle: {
        margin: "30px auto"
      },
    spacing: {
        marginBottom: "20px"
    },
    editStyle: {
        backgroundColor: "#4CAF50", /* Green */
        border: "none",
        color: "white",
        textDecoration: "none",
        display: "inline-block",
        margin: "4px 2px",
        cursor: "pointer"
    },
    deleteStyle: {
        backgroundColor: "#f14d54", /* Green */
        border: "none",
        color: "white",
        textDecoration: "none",
        display: "inline-block",
        margin: "4px 2px",
        cursor: "pointer"
    }
});

const GetProduct = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => state.products);
    const auth = useSelector((state)=>state.auth);

    const handleEdit = () => {
        navigate("/create")
    };
    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
    }

    useEffect(() => {
        dispatch(getProduct(auth._id));
    }, [dispatch])
    return (
        <>
        <Container maxWidth="md">
          <Container className={classes.contentStyle} maxWidth="sd">
            <Typography variant="h5" className={classes.spacing}>Product page</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell align="right">Product_id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product, id = 0) => (
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {id}
                                </TableCell>
                                <TableCell align="right">{'#' + product._id}</TableCell>
                                <TableCell align="right">{product.name}</TableCell>
                                <TableCell align="right">{product.categories}</TableCell>
                                <TableCell align="right">{product.description}</TableCell>
                                <TableCell align="right">{product.price}</TableCell>
                                <TableCell align="right">{<Button variant="inherit" className={classes.editStyle} onClick={() => handleEdit(product._id, product)}>Edit</Button>}</TableCell>
                                <TableCell align="right">{<Button variant="inherit" className={classes.deleteStyle} onClick={() => handleDelete(product._id)}>Delete</Button>}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            {/* <TablePagination
                align="right"
                rowsPerPageOptions={[10, 25, 100]}
            // component="div"
            // count={rows.length}
            // rowsPerPage={rowsPerPage}
            // page={page}
            // onPageChange={handleChangePage}
            // onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
            </Container>
            </Container>
        </>
    );
};

export default GetProduct;
