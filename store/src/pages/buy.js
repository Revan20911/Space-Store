import React from "react";
import Header from "../components/header";
import ItemPage from "../components/itemPage";
import { useParams } from "react-router-dom";
import storeItems from "../states/storeItems";
import cartItems from "../states/cartItems";

import "../styles/buy.css";

function Buy(){

    let {id, itemName} = useParams();
    
    const getIMG = () => {

        var img='';

        storeItems.forEach((item) => {
            if(item.id == id){
                img = item.img;
            }
        })
        return img;
    }

    function addItemsToCart(){

        cartItems.push([{

            id: id,
            itemName: itemName,
            img: getIMG(),

        }]);

        console.log(cartItems);
    }

    return(
        <>
        <Header/>
        <main>
            <ItemPage
            id={id}
            itemName={itemName}
            img={getIMG()}
            onClick={addItemsToCart}
            />
        </main>
        </>
    );
}
export default Buy;
