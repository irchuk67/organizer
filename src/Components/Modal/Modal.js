import {Dialog} from "@mui/material";
import React from "react";
import './Modal.scss';

const ModalWindow = (props) => {
    return (
        <Dialog open={props.open}  onClose={props.onClose}>
            <div className={'modal'} >
                <div className="modal__content">
                    <h1 className={'modal__content--heading logo'}>{props.heading}</h1>
                    {props.children}
                    <p onClick={props.onClose} className={'modal__content--cancel'}>
                        Cancel {props.heading}
                    </p>
                </div>
            </div>
        </Dialog>
    )
}

export default ModalWindow;