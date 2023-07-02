import { combineReducers } from "redux";
import bookReducer from "./booksReducer";

const rooReducer = combineReducers({
    books: bookReducer
})

export default rooReducer;