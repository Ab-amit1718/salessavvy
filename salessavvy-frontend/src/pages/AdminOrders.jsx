import { useEffect, useState } from "react";
import { apiFetch } from "../api/api";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  // =========================
  // FETCH ALL ORDERS (ADMIN)
  // =========================
  useEffect(() => {
    apiFetch("/api/admin/orders")
      .then((data) => {
        if (Array.isArray(data)) {
          setOrders(data);
        } else if (Array.isArray(data.orders)) {
          setOrders(data.orders);
        } else {
          setOrders([]);
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  // =========================
  // UPDATE ORDER STATUS
  // =========================
  async function updateStatus(orderId, status) {
    setError(null);

    try {
      await apiFetch(
        `/api/admin/orders/${orderId}/status?status=${status}`,
        { method: "PATCH" }
      );

      // update UI locally (no refetch needed)
      setOrders((prev) =>
        prev.map((o) =>
          o.orderId === orderId ? { ...o, status } : o
        )
      );
    } catch (err) {
      setError(err.message);
    }
  }

  // =========================
  // UI
  // =========================
  return (
    <div style={{ marginTop: 30 }}>
      <h2>Admin – All Orders</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {orders.length === 0 && <p>No orders found</p>}

      {orders.map((order) => (
        <div
          key={order.orderId}
          style={{
            border: "2px solid #444",
            padding: 10,
            marginBottom: 15,
          }}
        >
          <p><strong>Order ID:</strong> {order.orderId}</p>
          <p><strong>User:</strong> {order.username || order.userId}</p>
          <p>
  <strong>Status:</strong>{" "}
  {order.status === "SUCCESS" && "✅ Completed"}
  {order.status === "FAILED" && "❌ Rejected"}
  {order.status === "PENDING" && "⏳ Pending"}
</p>

          <p><strong>Total:</strong> ₹{order.totalAmount}</p>

          <ul>
            {(order.items || []).map((item) => (
              <li key={item.productId}>
                {item.name} × {item.quantity} = ₹{item.total}
              </li>
            ))}
          </ul>

          {/* ADMIN ACTIONS */}
          {order.status === "PENDING" && (
            <div style={{ marginTop: 10 }}>
              <button
                onClick={() => updateStatus(order.orderId, "SUCCESS")}
                style={{ marginRight: 10 }}
              >
                Approve
              </button>

              <button
                onClick={() => updateStatus(order.orderId, "FAILED")}
                style={{ color: "red" }}
              >
                Reject
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
