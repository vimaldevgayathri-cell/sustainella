import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="topbar">
        <div className="container topbar__inner">
          <div className="logo" onClick={() => navigate("/")}>
            Sustainella
          </div>

          <nav className="nav">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}>
              Home
            </NavLink>
            <NavLink to="/catalog" className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}>
              Categories
            </NavLink>
            <a className="nav__link" href="#about">About</a>
            <a className="nav__link" href="#contact">Contact</a>
          </nav>

          <div className="actions">
            <button className="iconbtn" title="Cart">🛒</button>
            <button className="iconbtn" title="Account">👤</button>
            <button className="pillbtn" onClick={() => alert("Sell page later")}>Sell</button>
            <button className="iconbtn" title="Logout">⎋</button>
          </div>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}
