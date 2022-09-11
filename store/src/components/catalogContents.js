import React from "react";
import Rows from "./utils/rows";
import storeItems from "../states/storeItems";

const CatalogContents = ({onClick}) => {

    return(
        <div className="row-container">
        <Rows items={storeItems} 
        onClick={onClick}
        />
        </div>
    )
}

export default CatalogContents;