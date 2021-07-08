import { createStore, combineReducers } from "redux"
import todoReducer from "./todo";
const reducer = combineReducers({
    todoReducer: todoReducer
})
export default createStore(reducer);