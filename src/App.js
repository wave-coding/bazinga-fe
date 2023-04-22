import ProductListApp from "./components/template/productList/ProductListApp";

import ProductDetails from "./components/template/product/ProductDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AsusLaptopSuggest from "./views/Suggest/AsusLaptopSuggest";

import CheckoutApp from "./views/Checkout/CheckoutApp";

import AllProducts from "./views/Products/AllProducts";

import ErrorPageApp from "./views/Error/ErrorPageApp";

import SignupApp from "./views/Signup/SignupApp";

import LoginApp from "./views/Login/LoginApp";

import Ps5Game from "./views/Suggest/Ps5Game";

import OrderApp from "./views/Order/OrderApp";

import Home from "./views/Home/Home";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/suggest/laptop/asus/:id" element={<AsusLaptopSuggest />}></Route>
                    <Route path="/suggest/video-games/ps5/:id" element={<Ps5Game />}></Route>
                    <Route path="/suggest/video-games/ps5/:id" element={<Ps5Game />}></Route>
                    <Route path="/product/:path/:id" element={<AllProducts />}></Route>
                    <Route path="/product/:id" element={<ProductDetails />}></Route>
                    <Route path="/today-deals" element={<ProductListApp />}></Route>
                    <Route path="/checkout" element={<CheckoutApp />}></Route>
                    <Route path="/signup" element={<SignupApp />}></Route>
                    <Route path="/orders" element={<OrderApp />}></Route>
                    <Route path="/login" element={<LoginApp />}></Route>
                    <Route path="*" element={<ErrorPageApp />}></Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;