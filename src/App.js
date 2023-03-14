import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./views/Home/Home";
import ProductDetails from "./components/template/product/ProductDetails";
import ProductListApp from './components/template/productList/ProductListApp';
import LoginApp from './views/Login/LoginApp';
import SignupApp from './views/Signup/SignupApp';

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