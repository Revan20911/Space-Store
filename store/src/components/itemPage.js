import React from "react";
import Button from "./utils/button";


const ItemPage = ({id, img, itemName, onClick}) => {

    return(
        <>
        <div className="item-container">
            <img src={img} alt={img}/>
            <div className="item-description">{itemName}</div>
        </div>
        <div className="checkout-container">
            <Button
            onClick={() => onClick(id)}
            text={"Add to Cart"}
            />
        </div>
        </>
    )
}

export default ItemPage;