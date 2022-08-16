import {OPEN_AUTHORISATION_MODAL, CLOSE_AUTHORISATION_MODAL, OPEN_REGISTRATION_MODAL, CLOSE_REGISTRATION_MODAL} from "../types";

const openAuthorisationModal = () => {
    return{
        type: OPEN_AUTHORISATION_MODAL,
        payload: {openAUTH: true}
    }
}

const closeAuthorisationModal = () => {
    return{
        type: CLOSE_AUTHORISATION_MODAL,
        payload: {openAUTH: false}
    }
}

const openRegistrationModal = () => {
    return{
        type: OPEN_REGISTRATION_MODAL,
        payload: {openREG: true}
    }
}

const closeRegistrationModal = () => {
    return{
        type: CLOSE_REGISTRATION_MODAL,
        payload: {openREG: false}
    }
}


export {openAuthorisationModal, closeAuthorisationModal, closeRegistrationModal, openRegistrationModal}