import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    const totalPrice= cart.reduce((total,prd)=>total+prd.price,0);

    let shipping= 0;
    if(totalPrice>35){
        shipping=0;
    }
    else if(totalPrice>0){
        shipping= 12;
    }
    else if(totalPrice>15){
        shipping= 4;
    }

    const tax= totalPrice / 10;
    

    return (
        <div>
            <h1>Review Summmary</h1>
            <p>Items Ordered : {cart.length}</p>
            <p>Product Price {totalPrice}</p>
            <p><small>Shipping cost {shipping}</small></p>
             <p><small>tax {tax}</small></p>
            <p>Total Price : {totalPrice+ shipping+tax}</p>


        </div>
    );
};

export default Cart;