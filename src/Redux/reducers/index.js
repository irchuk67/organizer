import {combineReducers} from "redux";
import modalReducer from "./modalReducer";
import {reducer  as formReducer} from "redux-form";

export default combineReducers(
    {
        open: modalReducer,
        form: formReducer
    }
)