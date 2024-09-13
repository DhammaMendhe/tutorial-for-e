import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartState from "./context/CartState";
function App() {
  return (
    <>
    <CartState>
      
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Products />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path='/price' element={<Price />} />


          {/* <Route exact path='/home' element={<Home  />} />
            <Route exact path='/signup' element={<Signup />}/>
            <Route exact path='/loginUser' element={<LoginUser />}/> */}
        </Routes>
      </Router>
      </CartState>
    </>
  );
}

export default App;
