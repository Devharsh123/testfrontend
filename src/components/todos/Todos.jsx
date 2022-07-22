import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux";
import { Container } from '@material-ui/core';
import { useEffect } from "react";
import { getProduct } from "../../store/actions/productActions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
   root: {
      width:"100vw",
      height:"100vh"
   },
   cardStyle:{
      borderRadius:"5px"
   },
   buttonStyle:{
      marginTop: "20px",
      backgroundColor:"#f14d54",
      color: "#FFFFFF",
   }
})
function Todos() {
   const classes = useStyles();
   const products = useSelector((state) => state.products)
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getProduct())
   }, [dispatch])
   return (
      <>
         <Container className={classes.root}>
         <h2>Home page</h2>
            <Grid container spacing={3}>
            {products.map((product) => (
               <>
               <Grid item sm={3}>
                  <Card classes={classes.cardStyle}>
                     <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                     />
                     <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           {product.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           {product.price}
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button  variant="contained" className={classes.buttonStyle}>Add to cart</Button>
                     </CardActions>

                  </Card>
                  </Grid>
               </>
               ))}
               </Grid>
               </Container>
      </>
   );
}

export default Todos;
