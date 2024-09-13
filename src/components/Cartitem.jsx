import React, { useState } from "react";

export default function Cartitem(props) {
  

  const [quant,setquant] = useState(0);
  const handleplus = () => {
    setquant(quant + 1);
    };


    const handleminus = () => {
      if (quant > 0) {
        setquant(quant - 1);
      }
    };
  return (
    <div>
      <h1>this si </h1>{console.log(props.title)}
      <div className="tableContainer border border-primary">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">sr.no</th>
              <th scope="col">product </th>
              <th scope="col">Handle </th>
              <th scope="col">your choice</th>
              <th scope="col">price </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
               {props.name}
              </td>
              <td>
              {props.description}

              </td>
              <td className="d-flex mx-3">
                <button onClick={handleplus} className="btn">+</button>{quant}
                <button onClick={handleminus} className="btn">-</button>
              </td>
              <td>
              {props.price}

              </td>
           
            </tr>
          </tbody>
        </table>
      </div>
      <h1>{props.title}</h1>
    </div>
  );
}
