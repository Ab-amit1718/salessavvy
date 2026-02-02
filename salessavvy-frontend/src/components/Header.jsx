export default function Header({ current, onChange, onLogout }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        marginBottom: 20,
        borderBottom: "1px solid #ddd",
        paddingBottom: 10,
      }}
    >
      <button
        onClick={() => onChange("products")}
        style={{
          fontWeight: current === "products" ? "bold" : "normal",
        }}
      >
        Products
      </button>

      <button
        onClick={() => onChange("orders")}
        style={{
          fontWeight: current === "orders" ? "bold" : "normal",
        }}
      >
        My Orders
      </button>

      <div style={{ flex: 1 }} />

      <button onClick={onLogout} style={{ color: "red" }}>
        Logout
      </button>
    </div>
  );
}
