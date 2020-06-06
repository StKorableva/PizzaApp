import React, {useState} from 'react';

import '../order-history/orderHistory.scss';

export default function OrderHistory() {
    const [orderHistory, setOrderHistory] = useState((!localStorage.length
        ? []
        : Object.values(localStorage)));
    const orderHistoryParse = orderHistory.map(order => JSON.parse(order));

    const showOrderItems = order => {
        return order.addedItems.map((item, i)=> {
            return (
                <li key={i*10} className='cart__order-history__order-items' >
                    {item.title}
                </li>
            )
        })
    };

    return (
        <div className='cart__order-history'>
            <p className='cart__order-history__title'>Your order history</p>
            <ul>{orderHistoryParse.length ? orderHistoryParse.map((order, i) => {return (
                <li className='cart__order-history__card' key={i}>
                    <span className='cart__order-history__order'><b>Date of order:</b> {order.data}</span>
                    <span className='cart__order-history__order'><b>Order price:</b> {order.orderSum}$</span>
                    <span className='cart__order-history__order'><b>Your order:</b></span>
                    {showOrderItems(order)}
                </li>
            )}): <span>You haven't placed an order on our website</span>}</ul>
        </div>
    )
}