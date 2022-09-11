import React from "react";
import Header from "../components/header";
import CatalogContents from "../components/catalogContents";
import { useNavigate } from "react-router-dom";


const Catalog = () => {

    let navigate = useNavigate();

    function itemClick(id, itemName){

        navigate("/Buy/" + id + "/" + itemName);
    }

    return(
        <>
        <Header/>
        <main>
            <CatalogContents
            onClick={itemClick}/>
        </main>
        </>
    );
};

export default Catalog;