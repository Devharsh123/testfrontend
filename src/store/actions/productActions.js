import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from 'react-toastify';

export const createProduct = (product) => {
    return (dispatch) => {
        axios.post(`${url}/create`, product, setHeaders())
            .then((product) => {
                dispatch({
                    type: "CREATE_PRODUCT",
                    product
                })
            })
            .catch(error => {
                console.log(error.response)

                toast.response(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
    }
};

export const editProduct = (id, updatedProduct) => {
    return (dispatch) => {
        axios.put(`${url}/edit/${id}`, updatedProduct, setHeaders())
            .then((product) => {
                dispatch({
                    type: "EDIT_PRODUCT",
                    product
                })
            })
    };
}

export const getProduct = (id) => {
    return (dispatch) => {
        if (id) {
            axios.get(`${url}/getProducts?userId=${id}`)
                .then((products) => {
                    dispatch({
                        type: "GET_PRODUCTS",
                        products
                    })
                })
                .catch(error => {
                    console.log(error.response)
                })
        }
        else {
            axios.get(`${url}/getProducts`)
                .then((products) => {
                    dispatch({
                        type: "GET_PRODUCTS",
                        products
                    })
                })
                .catch(error => {
                    console.log(error.response)
                })
        }
    }
};

export const deleteProduct = (id) => {
    return (dispatch) => {
        axios.delete(`${url}/delete/${id}`, setHeaders())
            .then(() => {
                dispatch({
                    type: "DELETE_PRODUCT",
                    id
                })
            })
    }
}