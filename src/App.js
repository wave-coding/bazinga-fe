import ProductListApp from './components/template/productList/ProductListApp';

import ProductDetails from "./components/template/product/ProductDetails";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AsusLaptopSuggest from './views/Suggest/AsusLaptopSuggest';

import CheckoutApp from './views/Checkout/CheckoutApp';

import SmartWatch from './views/Products/SmartWatch';

import SignupApp from './views/Signup/SignupApp';

import BackPack from './views/Products/BackPack';

import LoginApp from './views/Login/LoginApp';

import Ps5Game from './views/Suggest/Ps5Game';

import Books from './views/Products/Books';

import Home from "./views/Home/Home";



function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/product/:id" element={<ProductDetails />}></Route>
                    <Route path="/shop" element={<ProductListApp />}></Route>
                    <Route path="/login" element={<LoginApp />}></Route>
                    <Route path="/signup" element={<SignupApp />}></Route>
                    <Route path="/checkout" element={<CheckoutApp />}></Route>
                    <Route path="/suggest/laptop/asus/:id" element={<AsusLaptopSuggest />}></Route>
                    <Route path="/suggest/video-games/ps5/:id" element={<Ps5Game />}></Route>
                    <Route path="/suggest/video-games/ps5/:id" element={<Ps5Game />}></Route>
                    <Route path="/product/books/:id" element={<Books />}></Route>
                    <Route path="/product/smartwatch/:id" element={<SmartWatch />}></Route>
                    <Route path="/product/backpack/:id" element={<BackPack />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;