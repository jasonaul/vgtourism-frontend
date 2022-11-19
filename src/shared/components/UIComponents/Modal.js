import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'
import { CSSTransition } from 'react-transition-group'

import Backdrop from './Backdrop'

const Overlay = props => {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
        <header className={`modal-header ${props.headerClass}`}>
            <h2>{props.header}</h2>
        </header>
        <form onSubmit={props.onSubmit ? props.OnSubmit : (event) => event.preventDefaul()}>
            <div className={`modal-content ${props.contentClass}`}>
                {props.children}
                {/* Props children renders whatever is between tags of the jsx element. Yay! */}
            </div>
            <footer className={`modal-footer ${props.footerClass}`}>

            </footer>        
            </form>
        </div>
    )
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
};

const Modal = props => {
    return <React.Fragment>
        {props.show && <Backdrop onClick={props.onCancel} />}
        <CSSTransition 
            in={props.show} 
            mountOnEnter 
            unmountOnExit 
            timeout={200} 
            classNames="modal"
            >
        <Overlay {...props}/> 
        {/* //taking the props we passed to modal and forwards them to Modal Overlay (the internal overlay) and allows us to set various classes on the exported modal component */}
        </CSSTransition>
    </React.Fragment>
};

export default Modal