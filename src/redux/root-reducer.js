import { combineReducers } from "redux";
import { userReducer, productReducer, totalReducer } from "./reducer";


const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    total: totalReducer,
})

export default rootReducer;