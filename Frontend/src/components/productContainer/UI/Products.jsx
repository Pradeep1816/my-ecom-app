import React from "react";
import { Link, NavLink } from "react-router-dom";
function Products({ data }) {
  return (
    <NavLink to={`/product/${data.id}`}>
      <div className="border p-2 rounded-lg">
        <div className="">
          <figure>
            <img src={data.img} alt="" />
          </figure>
          <p className="text-sm">{data.name}</p>
          <div className="flex items-center justify-between">
            <p>{data.price}</p>
            <select name="" id="">
              {data.sizes.map((item, ind) => (
                <option value="">{item.size}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Products;
