import { toast } from "react-toastify";

const productReducers = (products = [], action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return action.products.data;

        case "CREATE_PRODUCT":
            toast("Product created succesfully...", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            break;

        case "EDIT_PRODUCT":
            toast("Product edited succesfully...", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return products.map((product) =>
                product._id === action.product.data._id ? action.product.data : product
            );

        case "DELETE_PRODUCT":
            toast("Product deleted succesfully...", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return products.filter((product) =>
                product._id !== action.id
            );
        default:
            return products;
    }
};

export default productReducers;