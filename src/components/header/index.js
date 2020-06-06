import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.jpg';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';

import './header.scss';

export default function Header() {
    return (
        <div className='header'>
            <img className="header__logo" src={Logo} alt='Holy Pizza'/>
            <ul className='header__list'>
                <li className='header__list-item'>
                    <Link className='header__link' to="/PizzaApp/">Pizza</Link>
                </li>
                <li className='header__list-item'>
                    <Link className='header__link' to="/PizzaApp/drink">Drink</Link>
                </li>
                <li className='header__list-item'>
                    <Link className='header__link' to="/PizzaApp/cart"><ShoppingCart className='header__link-cart'/></Link>
                </li>
                <li className='header__list-item'>
                    <Link className='header__link' to="/PizzaApp/history">Order history</Link>
                </li>
            </ul>
        </div>
    );
}