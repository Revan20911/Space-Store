import React from "react";
import Header from "../components/header";
import catalogContents from "../components/catalogContents";


const Catalog = () => {
    return(

        <>
        <Header/>
        <main>
            <catalogContents/>
        </main>
        </>
    );
};

export default Catalog;