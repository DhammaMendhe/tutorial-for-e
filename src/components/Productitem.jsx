import React, { useState, useContext } from "react";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function (props) {
  const context = useContext(CartContext);
  const { showproduct } = context;
  const navigate = useNavigate();

  const addtoshowproduct = (id) => {
    showproduct(id);
    console.log("this is id in productitems", id);
    navigate("/ShowProduct");
  };

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">title:{props.title}</h5>
          <p className="card-text">desc:{props.description}</p>
          <div className="price-container ">
            <p className="cart-text">oldPrice : {props.oldprice}</p>
            <p className="cart-text">newPrice : {props.price}</p>
          </div>
          <button
            onClick={() => addtoshowproduct(props.id)}
            className="btn-black "
          >
            show more
          </button>
        </div>
      </div>
    </div>
  );
}
