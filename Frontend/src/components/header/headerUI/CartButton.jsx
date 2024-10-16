import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
function CartButton() {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartItemsCount(totalItems);
  }, []);
  return (
    <div className="border flex items-center float-right  gap-2  h-10 rounded-lg row-start-2 md:row-start-auto bottom-10 left-2 right-2  fixed md:static">
      <div>
        <div>
          <AiOutlineShoppingCart />
        </div>
      </div>
      <p>{cartItemsCount === 0 ? "View Cart" : cartItemsCount}</p>
    </div>
  );
}

export default CartButton;
