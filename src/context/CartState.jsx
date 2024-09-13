import React, { useState } from "react";
import CartContext from "./CartContext";

const CartState = (props) => {
  // const cartProduct = file.products.data.items;
  const [cartitem, setCartitem] = useState({});

  const fetchdata = async () => {
    const url = " http://localhost:3000/data";

    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    setCartitem(json);
  };

  const findId = (id) => {
    console.log(id)
  }

  // const initialcart = [];

  // const findId = (id) => {
  //   const value = cartProduct.find((product) => product.id === id);

  //   // setcartitem((itmecart)=>itmecart.concat(value))
  //   try {
  //     if (value && !cartitem.some((item) => item.id === id)) {
  //       setCartitem((prevCart) => [...prevCart, value]);
  //     }
  //   } catch (error) {
  //     console.log(error);
  // }
  // };
  return (
    <CartContext.Provider value={{ findId, cartitem, fetchdata }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
