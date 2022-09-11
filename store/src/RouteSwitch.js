import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import Cart from "./pages/cart";
import Catalog from "./pages/catalog";
import Buy from "./pages/buy";


const RouteSwitch = () => {

    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/Catalog" element={<Catalog/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/Buy/:id/:itemName" element={<Buy />}/>
        </Routes>
        </BrowserRouter>
    );

};

export default RouteSwitch;