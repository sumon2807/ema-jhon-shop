import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import './Order.css';

const Orders = () => {
    const saveCart=useLoaderData();
    const [cart, setCart]=useState(saveCart)
    const handleRemoveFromCart=(id)=>{
       const remaining=cart.filter(product=> product.id !==id);
       setCart(remaining);
       removeFromDb(id);
    }

    const handleClearCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'> 
            <div className='reviewItem-container'>
                {
                    cart.map(product=> <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='card-container'>
            <Cart 
            cart={cart}
            handleClearCart={handleClearCart}
            >
                <Link to="/checkout">
                    <button>Prossed Order</button>
                </Link>
            </Cart>
            </div>
        </div>
    );
};

export default Orders;