import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../store/actions/cartAction";
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';

import './item.scss';

export default function PizzaPage() {
    const pizzas = useSelector(state => state.pizzas);
    const dispatch = useDispatch();

    let pizzaList = pizzas.map(pizza => {
        return(
            <div className="card" key={pizza.id}>
                <div className="card__content">
                    <img src={pizza.img} alt={pizza.title}/>
                    <b><span className="card__title">{pizza.title}</span></b>
                    <p className='card__description'>{pizza.desc}</p>
                    <div className='card__bottom-container'>
                        <p className="card__price"><b>{pizza.price}$</b></p>
                        <PlusIcon to="/" className="card__button" onClick={() => {dispatch(addToCart(pizza.id))}}/>
                    </div>
                </div>
            </div>
        )
    });

    return(
        <div className="itemPage">
            <div className="itemPage__container">
                {pizzaList}
            </div>
        </div>
    )
}