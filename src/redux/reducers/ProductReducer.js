import { Product } from "../action/ProductAction";


const initialState = [];
const ProductReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case Product:
        return payload;
        default :
        return state;

    }
};

export default ProductReducer;