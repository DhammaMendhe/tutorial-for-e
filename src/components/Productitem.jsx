import React, { useState,useContext } from "react";
import CartContext from '../context/CartContext'

export default function (props) {
  // const [add, setadd] = useState(0);
  const context  = useContext(CartContext);
  const {findId} = context;
  const handleCart = (id) => {
    console.log("this is id for ading to cart",id);
    
    findId(id);
    // setadd(id);


  };



  return (
    <div>
      <div className="border pt-4 ">
        {/* <img src={props.img} alt="" /> */}

        <div className="card " style={{ width: "18rem" }}>
          <div className="card-body border">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.features}</h6>
            <p className="card-text">{props.description}</p>
            <a
              onClick={() => {
                handleCart(props.id);
              }}
              href="#"
              className="card-link"
            >
              add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
