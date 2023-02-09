import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
   
    // const total = cart.reduce((total, prd) => total+prd.price,0)
    let total = 0;
    
for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total+ product.price;
}
    total =total.toFixed(2);
    let shipping=0;
            if (total > 999){
            shipping=0;
        }
        else if (total>400) {
            shipping = 8.89;
            
        }
        else if (total>0){
            shipping=  12.65;

        }
        const tax =Math.round( total/10);
        shipping=Math.round(shipping)
        const grandtotal=Math.round(total+shipping + tax);

    return (
        <div>
            <h4>order summary</h4>
            <p>Items ordered : {cart.length}</p>
            <p>  product price : {total}</p>
            <p>tax : {tax}</p>
            <p><small>shipping cost: {shipping}</small></p>
            <p>{grandtotal}</p>
        </div>
    );
};

export default Cart;