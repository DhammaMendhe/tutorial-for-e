import React, { useContext } from "react";
import Cartitem from "./Cartitem";
import CartContext from "../context/CartContext";
export default function Cart(props) {
  const context = useContext(CartContext);
  const { findId, cartitem } = context;
  // const {array} = cartitem;
  // console.log("this is in cart", cartitem);
  // console.log(typeof cartitem, "this is cart");

  return (
    <div className="container">
      {cartitem.length > 0 ? (
        cartitem.map(
          (item) => <Cartitem title={item.name} />
          // console.log(item.name, "into the array");
        )
      ) : (
        <p>not cart founde</p>
      )}
    </div>
  );
}
