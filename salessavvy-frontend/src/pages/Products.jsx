import { useEffect, useState } from "react";
import { apiFetch } from "../api/api";
import PaymentModal from "../components/PaymentModal";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    apiFetch("/api/products")
      .then((data) => {
        if (Array.isArray(data)) setProducts(data);
        else setProducts([]);
      })
      .catch((err) => setError(err.message));
  }, []);

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((p) => p.productId === product.productId);
      if (found) {
        return prev.map((p) =>
          p.productId === product.productId
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function cartTotal() {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  async function placeOrder() {
    setError(null);
    setMessage(null);

    try {
      const payload = {
        items: cart.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      };

      const data = await apiFetch("/api/orders", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      setMessage(`Order placed! Status: ${data.status}`);
      setCart([]);
      setShowPayment(false);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <h2>Products</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}

      <ul>
        {products.map((p) => (
          <li key={p.productId}>
            <strong>{p.name}</strong> – ₹{p.price}
            <br />
            <small>{p.description}</small>
            <br />
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <hr />

      <h3>Cart</h3>
      {cart.length === 0 && <p>Cart is empty</p>}

      <ul>
        {cart.map((item) => (
          <li key={item.productId}>
            {item.name} × {item.quantity}
          </li>
        ))}
      </ul>

      {cart.length > 0 && (
        <>
          <p>
            <strong>Total:</strong> ₹{cartTotal().toFixed(2)}
          </p>

          <button onClick={() => setShowPayment(true)}>
            Checkout
          </button>
        </>
      )}

      {showPayment && (
        <PaymentModal
          total={cartTotal()}
          onCancel={() => setShowPayment(false)}
          onConfirm={placeOrder}
        />
      )}
    </div>
  );
}
