import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero__wrap">
        <h1 className="hero__title">
          Ethical Shopping.<br />
          Sustainable Living.
        </h1>

        <p className="hero__sub">
          Discover a curated marketplace connecting conscious consumers with ethical startups.
          Every purchase makes a positive impact on our planet.
        </p>

        <button className="cta" onClick={() => navigate("/catalog")}>
          Shop Now <span className="cta__arrow">→</span>
        </button>
      </div>
    </section>
  );
}
