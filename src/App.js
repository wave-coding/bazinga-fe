import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./views/Home/Home";
import ProductDetails from "./components/template/product/ProductDetails";
import ProductListApp from './components/template/productList/ProductListApp';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/product" element={<ProductDetails />}></Route>
                    <Route path="/shop" element={<ProductListApp />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;