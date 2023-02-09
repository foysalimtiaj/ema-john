import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css"

const Product = (props) => {

    const {name,img ,stock,seller, price}=props.product
    return (
        <div className='product'>
            <div className="product-image">

                <img src={img} alt="" />

            </div>
            <div className='product-data'>
                <h4 className='product-name'> {name}</h4>
                <p><small>by: {seller}</small></p>
                <p>price is ${price}</p>
                <h5> <small>only {stock} left is stock - order soon</small></h5>
                <button 
                onClick={()=>{props.handleAppProduct(props.product)}}               
                className='add-cart-button' 
                
                ><FontAwesomeIcon icon={faShoppingCart}/>  add to cart</button>
               

            </div>
        </div>
    );
};

export default Product;