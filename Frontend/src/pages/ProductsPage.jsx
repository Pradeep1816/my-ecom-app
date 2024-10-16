import React, { useEffect, useState } from "react";
import productData from "../products.json";
import { useParams } from "react-router-dom";
function ProductsPage() {
  const [product, setProduct] = useState(null);
  const [selectSize, setSelectedSize] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const data = productData.find((item) => item.id === id);
    console.log(data);
    setProduct(data);
  }, [id]);

  const handleAddToCart = () => {
    if (!selectSize) {
      alert("select Size");
      return;
    }
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectSize,
      quantity: 1,
    };

    const isExist = cart.findIndex(
      (item) => item.id === product.id && item.size === selectSize
    );
    if (isExist >= 0) {
      cart[isExist].quantity += 1;
    } else {
      cart.push(productItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
  };

  const handleBuyNow = () => {
    const isLogin = localStorage.getItem("user");
    if (isLogin) {
      window.location.href = "/checkout";
    } else {
      alert("please login to proceed to checkout");
      window.location.href = "/login";
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-5 ">
          <div>
            <figure>
              <img src={product.img} alt="" />
            </figure>
          </div>
          <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <div>
              <label htmlFor="">Size:</label>
              <select
                name=""
                value={selectSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {product.sizes.map((size) => (
                  <option value={size.size}>{size.size}</option>
                ))}
              </select>
            </div>
            <div className="mt-10 flex gap-10">
              <button
                onClick={handleAddToCart}
                className="border p-2 rounded bg-stone-700 text-white"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="border p-2 rounded bg-green-500"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
