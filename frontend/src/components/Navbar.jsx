import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header style={styles.header}>
      <Link to="/products" style={styles.brand}>Sustained</Link>

      <nav style={styles.nav}>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/cart" style={styles.link}>Cart</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 16px",
    borderBottom: "1px solid #ddd",
  },
  brand: { textDecoration: "none", fontWeight: 700, fontSize: 18, color: "inherit" },
  nav: { display: "flex", gap: 12 },
  link: { textDecoration: "none", color: "inherit" },
};
