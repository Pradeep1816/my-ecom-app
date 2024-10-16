import React, { useEffect, useState } from "react";
import productData from "../../products.json";
import Products from "./UI/Products";
function ProductContainer() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <div className="grid grid grid-cols-4 gap-5">
        {productData.map((data, ind) => {
          return <Products key={ind} data={data} />;
        })}
      </div>
    </div>
  );
}

export default ProductContainer;
