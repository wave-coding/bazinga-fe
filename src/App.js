import ProductListApp from './components/template/productList/ProductListApp';
import ProductDetails from "./components/template/product/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupApp from './views/Signup/SignupApp';
import LoginApp from './views/Login/LoginApp';
import Home from "./views/Home/Home";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/product" element={<ProductDetails />}></Route>
                    <Route path="/shop" element={<ProductListApp />}></Route>
                    <Route path="/login" element={<LoginApp />}></Route>
                    <Route path="/signup" element={<SignupApp />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;