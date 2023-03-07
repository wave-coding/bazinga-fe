import Home from "./views/Home/Home";
import ProductDetails from "./components/template/product/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/product" element={<ProductDetails />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;