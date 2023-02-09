import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10=fakeData.slice(0,10);
    console.log(first10);
    const [products,setproducts]=useState(first10)
 
    
    return (
        <div className='shop-container'>
            
           <div className="product-container">

               
                {
                 products.map(product => <Product key={product.key} product={product}  ></Product>)
                }
                

           </div>


           <div className="cart-container">

                <h1>this is cart</h1>

           </div>
        </div>
    );
};

export default Shop;