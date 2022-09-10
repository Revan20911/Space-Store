import React, { useState } from "react";
import Item from "./item";


class Rows  extends React.Component{
    constructor(props){
        super(props);

        this.state = useState(props);
    }
    render(){

        const {items} = this.state;

        return(
            <div className="item-row">
                {items.map( item => 
                    <Item
                    itemName={item.itemName}
                    img={item.img}
                    />
                )}
            </div>
        );
    };
};

export default Rows;