import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';
const ReviewItem = ({product, handleRemoveFromCart}) => {
    const{id, name, img, price, quantity}=product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='review-title'>{name}</p>
                <p>Price: <span className='Orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='Orange-text'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='delete-btn'>
            <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;