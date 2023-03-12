import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<Register/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/ProductList" element={<ProductList/>} />
        <Route path="/Product" element={<Product/>} />
        </Routes>
        
         
       
     
    </BrowserRouter>
  )
};

export default App;