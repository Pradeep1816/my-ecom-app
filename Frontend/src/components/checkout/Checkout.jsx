import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);

    const total = cartData.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, []);

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    navigate("/");
  };

  if (cart.length === 0) {
    return <div>Your cart is empty. Please add items to proceed.</div>;
  }

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="grid gap-4">
        {cart.map((item) => (
          <div key={`${item.id}-${item.size}`} className="border p-4">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p>Size: {item.size}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold">Total Price: ${totalPrice}</h3>
      </div>

      <div className="mt-10">
        <h3 className="text-xl mb-4">Payment Method:</h3>
        <p>Cash on Delivery (COD)</p>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="mt-6 bg-green-500 text-white p-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
