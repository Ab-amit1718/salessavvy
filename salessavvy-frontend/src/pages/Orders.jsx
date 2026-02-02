import { useEffect, useState } from "react";
import { apiFetch } from "../api/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiFetch("/api/orders")
      .then((data) => {
        if (Array.isArray(data.orders)) setOrders(data.orders);
        else setOrders([]);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Orders</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {orders.length === 0 && <p>No orders found</p>}

      {orders.map(order => (
        <div key={order.orderId} style={{ border: "1px solid #ccc", marginBottom: 10 }}>
          <p>
  <strong>Status:</strong>{" "}
  {order.status === "SUCCESS" && "✅ Completed"}
  {order.status === "FAILED" && "❌ Rejected"}
  {order.status === "PENDING" && "⏳ Pending"}
</p>

          <p><strong>Total:</strong> ₹{order.totalAmount}</p>
        </div>
      ))}
    </div>
  );
}
