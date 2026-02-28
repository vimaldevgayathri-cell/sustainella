import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  const total = cart.reduce((sum, i) => sum + (i.price || 0) * (i.qty || 1), 0);

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((i, idx) => (
            <div key={idx} style={{ borderBottom: "1px solid #eee", padding: "8px 0" }}>
              <b>{i.name}</b> — ₹{i.price} × {i.qty}
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button
            onClick={() => {
              localStorage.removeItem("cart");
              setCart([]);
            }}
          >
            Clear cart
          </button>
        </>
      )}
    </div>
  );
}