import { useState } from "react";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import AdminOrders from "./pages/AdminOrders";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { isLoggedIn, logout } from "./auth/auth";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [showRegister, setShowRegister] = useState(false);
  const [view, setView] = useState("products");

  function handleLogout() {
    logout();
    setLoggedIn(false);
    setView("products");
  }

  if (!loggedIn) {
    return showRegister ? (
      <Register onSwitchToLogin={() => setShowRegister(false)} />
    ) : (
      <Login
        onSwitchToRegister={() => setShowRegister(true)}
        onAuthSuccess={() => setLoggedIn(true)}
      />
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>SalesSavvy</h1>

      <Header
        current={view}
        onChange={setView}
        onLogout={handleLogout}
      />

      {view === "products" && <Products />}
      {view === "orders" && <Orders />}

      {localStorage.getItem("role") === "ADMIN" && (
        <>
          <hr />
          <AdminOrders />
        </>
      )}
    </div>
  );
}
