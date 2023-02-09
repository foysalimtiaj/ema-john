import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10=fakeData.slice(3,16);
   
    const [products,setproducts]=useState(first10);

    const [cart , setcart ]= useState([]);


    const handleAppProduct = (addedProduct)=>{
       
        const newcart = [...cart , addedProduct];
        setcart(newcart);
    }
 
    
    return (
        <div className='shop-container'>
            
           <div className="product-container">

               
                {
                 products.map(product => <Product handleAppProduct={handleAppProduct} key={product.key} product={product}  ></Product>)
                }
                

           </div>


           <div className="cart-container">
                
                <Cart cart={cart}></Cart>

                {/* <h1>this is cart</h1>
                <h5>order sammary : {cart.length}</h5> */}

           </div>
        </div>
    );
};

export default Shop;