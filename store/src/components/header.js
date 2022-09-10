import React from "react";
import "../styles/main.css"
import Button from "../components/utils/button"
import { useNavigate } from "react-router-dom";

const Header = () => {

    let navigate = useNavigate();

    function clickHome(){
        navigate('/')
    }

    function clickStore(){
        navigate('/Catalog')
    }

    function clickCart(){
        navigate('/Cart')
    }

    return(
        <header>
            <div className="button-box">
                <Button onClick={clickHome} text={"Home"}/>
                <Button onClick={clickStore} text={"Store"}/>
                
            </div>
            <div className="button-box">
            <Button onClick={clickCart} text={"Cart"}/>
            </div>
            
        </header>
    )
}

export default Header;