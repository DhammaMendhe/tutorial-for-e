import React, { useContext, useEffect } from "react";
import Productitem from "./Productitem";
import CartContext from "../context/CartContext";

export default function Products() {
  const context = useContext(CartContext);

  const { fetchdata, cartitem } = context;

  useEffect(() => {
    fetchdata();
  }, []);

  const allItems = cartitem?.products?.data?.items?.[0];
  // const value = cartitem?.products?.data?.items;
  // console.log("this in products value", allItems);

  return (
    <div className="d-flex flex-wrap justfy-content-center">
      {allItems ? (
        allItems.map((item, index) => (
          <Productitem
            key={index}
            id={item._id}
            title={item.title}
            price={item.price}
            oldprice={item.oldPrice}
            description={item.description && item.description.slice(0, 60)}
            img={item.image}
          />
        ))
      ) : (
        <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
      )}
    </div>
  );
}
