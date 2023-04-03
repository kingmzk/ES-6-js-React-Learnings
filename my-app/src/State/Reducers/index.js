import { combineReducers } from "redux";
import Reducer from "./AmountReducer";


 const reducers = combineReducers({
    amount: Reducer
})

export default reducers;