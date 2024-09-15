import React, { useContext } from "react";
import Cartitem from "./Cartitem";
import CartContext from "../context/CartContext";
export default function Cart(props) {
  const context = useContext(CartContext);
  const { addedtocart } = context;


  return (
    <div className="container">
      corerearer
      {/* {addedtocart.length > 0 ? (
        addedtocart.map((item) => (<Cartitem title={item.name} />)
        )
      ) : (
        <p>not cart found</p>
      )} */}
    </div>
  );
}
