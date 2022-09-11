import React from "react";

const Item = ({id,itemName, img, onClick}) => {
    return(
        <div className="item-container" 
        id={id}
        onClick={() => onClick(id, itemName)}>

            <div className="item-info">
                {itemName}
            </div>
            <img src={img}/>
        </div>   
    )
}

export default Item;