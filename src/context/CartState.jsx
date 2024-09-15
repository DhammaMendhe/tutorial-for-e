import React, { useState } from "react";
import CartContext from "./CartContext";

const CartState = (props) => {
  // const cartProduct = file.products.data.items;
  const initialarray = [];
  const addtocarta = [];
  // const showProduct = [];

  const [cartitem, setCartitem] = useState(initialarray);
  const [addedtocart, setaddedtocart] = useState(addtocarta);
  const [addtoshowproduct, setaddtoshowproduct] = useState(null);

  const fetchdata = async () => {
    const url = "http://localhost:3000/data";

    const response = await fetch(url);
    const json = await response.json();

    setCartitem(json);
    // console.log("this is in state", cartitem);
  };

  const addtocartitems = (id) => {
    // console.log("this is id in state", id);
    if (id) {
      const value = cartitem.products?.data?.items?.[0];
      // console.log("into add to cart", value);

      const cartproduct = value.find((product) => product._id === id);
      console.log("before use", cartproduct);
      if (cartproduct) {
        setaddedtocart((prevcart) => [...prevcart, cartproduct]);
      }
      console.log("after use", addedtocart);
    }
  };

  const showproduct = (id) => {
    if (id) {
      // const value = cartitem.products?.data?.items?.[0];
      // const cartproduct = value.find((product) => product._id === id);
      // console.log("this is cart state id ", id);
      // console.log("cartproduct....",cartproduct);
      // return cartproduct;
      // return id;

      setaddtoshowproduct(id);
      // console.log("this is state object",cartproduct);
      console.log("this is state 11",addtoshowproduct);
    }
  };

  return (
    <CartContext.Provider
      value={{ fetchdata, cartitem, addtocartitems, addedtocart, showproduct ,addtoshowproduct}}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
