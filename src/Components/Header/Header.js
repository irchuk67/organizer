import React from "react";
import './Header.scss';
import {connect} from "react-redux";
import {openAuthorisationModal, openRegistrationModal} from "../../Redux/actions";
import Logo from "../Logo/Logo";

const Header = props => {
    const renderAdmin = () => {
        return(
            <div className={'header--buttons'}>
                <button className={'header--button'} onClick={() => props.openRegistrationModal()}>Sign up</button>
                <button className={'header--button'} onClick={() => props.openAuthorisationModal()}>Sign in</button>
            </div>
        )
    }
    return(
        <div className={'header'}>
            <Logo/>
            <div className={'header--admin'}>
                {renderAdmin()}
            </div>
        </div>
    )
}



export default connect(null, {openAuthorisationModal, openRegistrationModal})(Header);