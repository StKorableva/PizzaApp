import React from 'react';
import ReactDOM from 'react-dom';
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";

import {cleanCart} from "../../store/actions/cartAction";

import './modal.scss';

const Modal = ({ isShowing, hide }) => {
    const {items, total } = useSelector(state => ({
        items: state.addedItems,
        total: state.total,
    }));

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        localStorage.setItem(`myCart ${Math.floor(Math.random() * 1000)}`, JSON.stringify({
            data: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
            orderSum: total,
            addedItems: items,
        }));
        alert('Thank you for order');
        dispatch(cleanCart());
        history.push("/PizzaApp/");
    };

    return (isShowing ? ReactDOM.createPortal(
        <React.Fragment>
            <div className="modal-overlay"/>
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modal">
                    <div className="modal-header">
                        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <h3>Address Details</h3>
                    <form className='form' onSubmit={handleSubmit}>
                        <label className='form__field-title'>
                            First name:<br/>
                            <input
                                className='form__field'
                                name="firstName"
                                type="text"
                                required />
                        </label>

                        <label className='form__field-title'>
                            Last name:<br/>
                            <input
                                className='form__field'
                                name="lastName"
                                type="text"
                                required />
                        </label>

                        <label className='form__field-title'>
                            Address:<br/>
                            <input
                                className='form__field'
                                name="address"
                                type="text"
                                required />
                        </label>

                        <label className='form__field-title'>
                            Phone number:<br/>
                            <input
                                className='form__field'
                                name="phone"
                                type="text"
                                required />
                        </label>

                        <label className='form__field-title'>
                            Email:<br/>
                            <input
                                className='form__field'
                                name="email"
                                type="email"
                                required />
                        </label>
                        <div>
                            <button className='form__submit-button'>Confirm the order</button>
                            <button className='form__cancel-button' onClick={hide}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>, document.body
    ) : null )}

export default Modal;