import React from "react";

const Item = ({itemName, img}) => {
    return(
        <div className="item">
            <div className="item-info">
                {itemName}
            </div>
            <img src={img}/>
        </div>   
    )
}

export default Item;