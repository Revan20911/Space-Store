import React from "react";
import { withRouter} from "react-router-dom"
import Button from "./button";


const homeButton = withRouter(({history}) => (
    <Button onClick={() => {history.push('/')}}/>
))

const storeButton = withRouter(({history}) => (
    <Button onClick={() => {history.push('/Catalog')}}/>
))


export {homeButton, storeButton};