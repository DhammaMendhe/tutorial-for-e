import React, { useContext, useEffect } from "react";
import CartContext from "../context/CartContext";

function ShowProductitems(props) {
  // const context = useContext(CartContext);
  // const { addtocartitems,addedtocart } = context;

  
  // useEffect(() => {
  //   addedtocart()
  // }, [])

  
  return (
    <div className="d-flex justify-content-center">
      {" "}
      <div className="photocontainer">
        <img src={props.img} alt="" />
      </div>
      <div className="photocontainer">
        <p>{props.title}</p>
        <p>{props.description}</p>
        <div className="pricecontainer">
          <p className="cart-text">oldPrice : {props.oldPrice}</p>
          <p className="cart-text">newPrice : {props.price}</p>
        </div>

        <div className="addtocart">
          <button onClick={()=>addedtocart(props.id)} className="btn"> add to cart </button>
        </div>
      </div>
    </div>
  );
}

export default ShowProductitems;
