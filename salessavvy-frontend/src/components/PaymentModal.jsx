export default function PaymentModal({ total, onCancel, onConfirm }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: 20,
          borderRadius: 6,
          width: 320,
        }}
      >
        <h3>Payment</h3>

        <p>
          <strong>Total:</strong> ₹{total.toFixed(2)}
        </p>

        <p style={{ fontSize: 14, color: "#666" }}>
          This is a demo payment. No real money is charged.
        </p>

        <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
          <button onClick={onCancel} style={{ flex: 1 }}>
            Cancel
          </button>

          <button
            onClick={onConfirm}
            style={{ flex: 1, background: "#4caf50", color: "#fff" }}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
