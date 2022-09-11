import React from "react";
import Item from "./item";
import uniqid from "uniqid";



const Rows = ({items, onClick}) => {
   
        return(
            <div className="item-row">
                {items.map((item) => {
                    return <Item
                    id={uniqid()}
                    key={uniqid()}
                    itemName={item.itemName}
                    img={item.img}
                    onClick={onClick}
                    />
                })}
            </div>
        );
    };

export default Rows;