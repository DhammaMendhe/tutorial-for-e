import React, { useContext, useEffect } from "react";
import Productitem from "./Productitem";
import CartContext from "../context/CartContext";

export default function Products() {
  const context = useContext(CartContext);

  const { fetchdata, cartitem } = context;

  useEffect(() => {
    fetchdata;
  }, [1]);

  // const handledata = async () => {
  //   fetchdata();
  // };
  return (
    <div className="d-flex flex-wrap">
      {/* <h3>this is cart store</h3> */}
      {/* <button onClick={handleda            features={item.features}
ta}></button> */}
      {Object.values(cartitem).map((item) => {
        console.log(item.quantity)
        // return (
        //   <Productitem
        //     key={item.id}
        //     title={item.title}
        //     description={item.description}
        //     quantity={item.quantity}
        //   />
        // );
      })}
    </div>
  );
}
