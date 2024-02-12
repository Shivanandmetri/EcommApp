import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";

const combineReducer = combineReducers({
    product:ProductReducer
});

export default combineReducer;