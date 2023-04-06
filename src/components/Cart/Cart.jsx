import React, { Children } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = ({cart, handleClearCart, children}) => {
    // console.log(cart);
    // const {cart}=props;
    let totalPrice=0;
    let shippingTotal=0;
    let quantity=0;
    for(const product of cart){
        if(product.quantity==0){
            product.quantity=1;
        }
        // product.quantity=product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        shippingTotal=shippingTotal + product.shipping;
        quantity=quantity + product.quantity;
    }
    const tax=totalPrice*(5/100);
    const grandTotal=totalPrice + shippingTotal +tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: {totalPrice}</p>
            <p>Total Shipping Charge: {shippingTotal}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h6>Grand Total:  {grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='clear-btn'>
                <span>Clear Cart</span> 
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;