import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import EmptyCart from '../../assets/images/empty_cart.jpg';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg';
import { ReactComponent as ArrowUp } from '../../assets/icons/arrow-up.svg';
import { ReactComponent as CloseButton } from '../../assets/icons/close-button.svg';
import Modal from "../modal/index";
import useModal from '../modal/useModal';

import './cart.scss';
import {removeItem, addQuantity, minusQuantity} from "../../store/actions/cartAction";

export default function Cart() {
    const {items, total } = useSelector(state => ({
        items: state.addedItems,
        total: state.total,
    }));
    const dispatch = useDispatch();

    const {isShowing, toggle} = useModal();

    let addedItems = items.length ?
        (
            items.map(item => {
                return (
                    <li className="item" key={item.id}>
                        <div className="item__card">
                            <img className="item__img" src={item.img} alt={item.img}/>
                            <div className="item__desc">
                                <span className="item__title">{item.title}</span>
                                <p><b>Price: {item.quantity * item.price}$</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                            </div>
                        </div>
                        <div className="item__button-control-panel">
                            <ArrowDown onClick={() => dispatch(minusQuantity(item.id))} to="/cart" className="item__button-control-panel__arrow"/>
                            <ArrowUp onClick={() => dispatch(addQuantity(item.id))} to="/cart" className="item__button-control-panel__arrow"/>
                            <CloseButton onClick={() =>  dispatch(removeItem(item.id))} to="/cart" className="item__button-control-panel__close-button"/>
                        </div>
                    </li>
                )
            })
        ) :
        (
            <img className="cart_empty" src={EmptyCart} alt='Empty Cart'/>
        )

    return(
        <div className="cart__wrapper">
            <div className="cart__container">
                <ul className="cart__collection">
                    {addedItems}
                </ul>
            </div>
            {items.length ?  (
                <div>
                    <p className='cart__total'><b>Order price: {total}$</b></p>
                    <button type='submit' className='cart__confirm-button' onClick={toggle}>Confirm the order</button>
                    <Modal
                        isShowing={isShowing}
                        hide={toggle}
                    />
                </div>) : null
            }
        </div>
    )

}