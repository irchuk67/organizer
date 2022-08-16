import React from "react";
import './Authorisation.scss';
import ModalWindow from "../../Components/Modal/Modal";
import {connect} from "react-redux";
import {closeAuthorisationModal, openRegistrationModal} from "../../Redux/actions";
import {Field, reduxForm} from "redux-form";
import {authorize} from "../../API/organizer";

const Authorisation = props => {
    function createEmailInput({label, input, meta}) {
        return(
            <div className={'field'}>
                <label className={'field--label'}>{label}</label>
                <input {...input} type={'email'} className={'field--input'}/>
                <div>{meta.error}</div>
            </div>
        )
    }

    function createPasswordInput ({label, input, meta}){
        return(
            <div className={'field'}>
                <label className={'field--label'}>{label}</label>
                <input {...input}
                       type={'password'}
                       className={'field--input'}
                />
                <div>{meta.error}</div>
            </div>
        )
    }

    const onSubmit = (formValues) => {
        authorize(formValues)
    }

    const dontRegistratedClick = () => {
        props.closeAuthorisationModal();
        props.openRegistrationModal()
    }

    return (
        <ModalWindow open={props.open}
                     onClose={() => props.closeAuthorisationModal(onSubmit)} heading={'sign in'}>
            <form className={'form'}
                  onSubmit={props.handleSubmit(onSubmit)}
            >
                <Field
                    name={'email'}
                    component={createEmailInput}
                    label={'Email'}
                />
                <Field
                    name={'password'}
                    component={createPasswordInput}
                    label={'Password'}
                />
                <button className={'form--button'}>Sign in</button>
                <p onClick={dontRegistratedClick} className={'form--question'}>Don`t have an account yet?</p>
            </form>

        </ModalWindow>
    )
}


const validEmail = new RegExp(
    '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$'
);

const validate = (formValues) => {
    const errors = {};
    if(!formValues.email){
        errors.email = 'Please, enter your email'
    }else if(!validEmail.test(formValues.email)){
        errors.email = 'Your email is unappropriated'
    }
    if(!formValues.password) {
        errors.password = 'Please, enter your password'
    }

    return errors

}

const mapStateToProps = state => {
    return{
        open: state.open.openAUTH
    }
}


export default reduxForm({
    form: 'authorize',
    validate,
})(connect(mapStateToProps, {closeAuthorisationModal, openRegistrationModal})(Authorisation))