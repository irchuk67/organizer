import React from "react";
import './Registration.scss';
import ModalWindow from "../../Components/Modal/Modal";
import {connect} from "react-redux";
import {closeRegistrationModal, openAuthorisationModal} from "../../Redux/actions";
import {Field, reduxForm} from "redux-form";
import {registrate} from "../../API/organizer";

const Registration = props => {
    function createInput({label, input, meta, type}) {
        return(
            <div className={'field'}>
                <label className={'field--label'}>{label}</label>
                <input {...input} type={type} className={'field--input'}/>
                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
            </div>
        )
    }

    const onSubmit = (formValues) => {
        registrate(formValues).then().catch(
            response => console.log(response)
        );
    }

    const alreadyHaveClicked = () => {
        props.closeRegistrationModal();
        props.openAuthorisationModal()
    }

    return (
        <ModalWindow open={props.open}
                     onClose={() => props.closeRegistrationModal(onSubmit)} heading={'sign up'}>
            <form className={'form'}
                  onSubmit={props.handleSubmit(onSubmit)}
            >
                <Field
                    name={'firstName'}
                    type={'text'}
                    label={'First name'}
                    component={createInput}
                />
                <Field
                    name={'lastName'}
                    type={'text'}
                    label={'Last name'}
                    component={createInput}
                />
                <Field
                    name={'phoneNumber'}
                    type={'tel'}
                    label={'Phone'}
                    component={createInput}
                    value={'+38(0'}
                />
                <Field
                    name={'email'}
                    component={createInput}
                    type={'email'}
                    label={'Email'}
                />
                <Field
                    name={'password'}
                    type={'password'}
                    component={createInput}
                    label={'Password'}
                />
                <button className={'form--button'}>Sign up</button>
                <p onClick={alreadyHaveClicked} className={'form--question'}>Already have an account?</p>
            </form>

        </ModalWindow>
    )
}


const validEmail = new RegExp(
    '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$'
);

const validPhone = new RegExp('^(?:\\+38)?(0[5-9][0-9]\\d{7})$');

const validate = (formValues) => {
    const errors = {};

    if(!formValues.phoneNumber){
        errors.phoneNumber = 'Please, enter your phone number'
    }else if(!validPhone.test(formValues.phoneNumber)){
        errors.phoneNumber = 'Your phone number is unappropriated'
    }

    if(!formValues.email){
        errors.email = 'Please, enter your email'
    }else if(!validEmail.test(formValues.email)){
        errors.email = 'Your email is unappropriated'
    }

    if(!formValues.password) {
        errors.password = 'Please, enter your password'
    }

    if(!formValues.firstName) {
        errors.firstName = 'Please, enter your first name'
    }

    if(!formValues.lastName) {
        errors.lastName = 'Please, enter your last name'
    }

    return errors

}

const mapStateToProps = state => {
    return{
        open: state.open.openREG
    }
}


export default reduxForm({
    form: 'registration',
    validate,
})(connect(mapStateToProps, {closeRegistrationModal, openAuthorisationModal})(Registration))