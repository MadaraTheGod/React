import React from 'react'
import './modal.css'

function Modal(props) {
    return(
        <div className='Modal'>
            esto es un Modal
            {props.children}
            <button onClick={props.handleCloseCLick}>Cerrar<button>
        </div>
    )
}

export default Modal
