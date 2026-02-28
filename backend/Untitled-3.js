import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
    color: "black",
  });

  return (
    <nav style={{ padding: 20, display: "flex", gap: 20 }}>
      <NavLink to="/" end style={linkStyle}>Home</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
    </nav>
  );
}