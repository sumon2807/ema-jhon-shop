import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch(`products.json`)
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])

  useEffect(()=>{
    const storedCart=getShoppingCart();
    // step-4 addedProduct is added in empty array
    const saveCart=[];
    // step-1 get id from the storedCart
    for(const id in storedCart){
        // step-2 find product from the products by using id
        const addedProduct=products.find(product => product.id===id)
        // step-3 if addedProduct is available then give the quantity
        if(addedProduct){
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            // step-4 push the addedProduct to the empty saveCart array
            saveCart.push(addedProduct);
        }
    }
    // step-5 set the saveCart 
    setCart(saveCart);
  }, [products])

    const handleAddToCart=(product)=>{
        const newCart=[...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='card-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
