import React from "react";

const CartItem = ({

    id,
    itemName,
    img,

}) => {

    return(
        <div className="cart-item" 
            id={id}>
            <img src={img}/>
            <div className="cart-item-info">{itemName}</div>
        </div>
    );
};

export default CartItem;

