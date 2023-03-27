import React from 'react';
import './Product.css';

const Product = (props) => {
    const {id, img, name, price, seller,ratings}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings} Star</p>
            </div>
            <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;