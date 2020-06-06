import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../store/actions/cartAction";
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';

import '../pizza/item.scss';

export default function DrinkPage() {
    const drinks = useSelector(state => state.drinks);
    const dispatch = useDispatch();

    let drinksList = drinks.map(drink => {
        return(
            <div className="card" key={drink.id}>
                <div className="card__content">
                    <img src={drink.img} alt={drink.title}/>
                    <b><span className="card__title">{drink.title}</span></b>
                    <div className='card__bottom-container'>
                        <p className="card__price"><b>{drink.price}$</b></p>
                        <PlusIcon to="/" className="card__button" onClick={() => {dispatch(addToCart(drink.id))}}/>
                    </div>
                </div>
            </div>
        )
    });

    return(
        <div className="itemPage">
            <div className="itemPage__container">
                {drinksList}
            </div>
        </div>
    )
}