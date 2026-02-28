import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    { id: 1, name: "Eco T-shirt" },
    { id: 2, name: "Organic Hoodie" },
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id}>
          <Link to={`/product/${p.id}`}>{p.name}</Link>
        </div>
      ))}
    </div>
  );
}