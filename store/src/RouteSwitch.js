import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import Cart from "./pages/cart";
import Catalog from "./pages/catalog";


const RouteSwitch = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/Catalog" element={<Catalog/>}/>
            <Route path="/Cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
    );

};

export default RouteSwitch;