import React from "react";
import Header from "../components/header";
import CatalogContents from "../components/catalogContents";

const Catalog = () => {
    return(
        <>
        <Header/>
        <main>
            <CatalogContents/>
        </main>
        </>
    );
};

export default Catalog;