import React, { useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import ShowProductitems from "./ShowProductitems";

function ShowProduct(props) {
  const context = useContext(CartContext);

  const { cartitem, showproduct, addtoshowproduct } = context;
  const allItems = cartitem?.products?.data?.items?.[0];

  useEffect(() => {
    showproduct();
  }, []);

  const value = addtoshowproduct;
  console.log("this is value in shwof;sfsk;a", value);
  return (
    <div>
      <div className="d-flex flex-wrap justfy-content-center">
        
        {allItems ? (
          allItems.map((item, index) =>
            item._id === value ? (
              <ShowProductitems
                key={item._id}
                id={item._id}
                title={item.title}
                price={item.price}
                oldprice={item.oldPrice}
                description={item.description && item.description.slice(0, 60)}
                img={item.image}
              />
            ) : (
              null
              // <p>{" "}</p>
            )
          )
        ) : (
          <p>loading....</p>
        )}
      </div>
    </div>
  );
}

export default ShowProduct;
