import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {

  return (
    <div>
      <div className="product">
        <div>
          <img src={props.pd.img} alt="" />
        </div>

        <div>
          <h2 className="product-name">{props.pd.name}</h2>
          <br />
          <p>by: {props.pd.seller}</p>
          <p> ${props.pd.price}</p>
          <p>
            <small> Only {props.pd.stock} are left in stock</small>
          </p>
          <button className="main-button" onClick={()=>props.handleAddProduct(props.pd)}> <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
