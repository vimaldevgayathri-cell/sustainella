import React, { useEffect, useMemo, useState } from "react";
import { API_BASE } from "../config";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setErr("");
        setLoading(true);

        const res = await fetch(`${API_BASE}/api/products`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (e) {
        setErr("Could not load products. Check backend IP / CORS / Wi-Fi.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return products;
    return products.filter((p) =>
      String(p.name || "").toLowerCase().includes(s) ||
      String(p.description || "").toLowerCase().includes(s)
    );
  }, [products, q]);

  return (
    <section className="catalog">
      <div className="catalog__head">
        <h2 className="catalog__title">Catalog</h2>
        <div className="search">
          <span className="search__icon">⌕</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products..."
          />
        </div>
      </div>

      {loading && <p className="muted">Loading…</p>}
      {err && <p className="error">{err}</p>}

      {!loading && !err && (
        <div className="grid">
          {filtered.map((p) => (
            <article className="card" key={p._id}>
              <div className="card__imgwrap">
                <img
                  src={p.image || "https://via.placeholder.com/600x400?text=No+Image"}
                  alt={p.name}
                  onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/600x400?text=No+Image")}
                />
              </div>

              <div className="card__body">
                <h3 className="card__name">{p.name}</h3>
                <p className="card__desc">{p.description || "No description yet."}</p>

                <div className="card__bottom">
                  <span className="price">₹{p.price ?? 0}</span>
                  <button className="add" onClick={() => alert(`Added: ${p.name}`)}>
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}