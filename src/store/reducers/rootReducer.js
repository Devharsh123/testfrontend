import { combineReducers } from "redux";
import authReducer from "./authReducers";
import productReducers from "./productReducers";

const rootReducer = combineReducers({
    auth: authReducer,
    products:productReducers
});

export default rootReducer;