import {CLOSE_REGISTRATION_MODAL, CLOSE_AUTHORISATION_MODAL, OPEN_REGISTRATION_MODAL, OPEN_AUTHORISATION_MODAL} from "../types";

export default (state = {openAUTH: false, openREG: false}, action) => {
   switch (action.type) {
       case OPEN_AUTHORISATION_MODAL:
           return {...state, ...action.payload}
       case CLOSE_AUTHORISATION_MODAL:
           return {...state, ...action.payload}
       case OPEN_REGISTRATION_MODAL:
           return {...state, ...action.payload}
       case CLOSE_REGISTRATION_MODAL:
           return {...state, ...action.payload}
       default:
           return state;
   }
}