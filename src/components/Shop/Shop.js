import React from 'react';
import fakeData from '../../fakeData'
import { useState } from 'react' ;
import './Shop.css'
import '../Product/Product'
import Product from '../Product/Product';
import Cart from '../Cart/Cart'

const Shop = () => {
    const first10= fakeData.slice(0,10);
    const [product, setPorduct]= useState(first10);
    const[cart, setCart]= useState([]);
    const handleAddProduct =(product)=>{
        const newCart= [...cart, product];
        setCart(newCart);
    }
 

    return (
        <div className='shop-container'>
            <div className='product-container'>
                <ul >
                    {
                        product.map(item=> <Product 

                            handleAddProduct={handleAddProduct}
                            pd={item}>

                            </Product>)
                    }
                </ul>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
                
            </div>
            

        </div>
    );
};

export default Shop;