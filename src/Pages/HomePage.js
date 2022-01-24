import React from "react";
import Slider from "../Components/Slider";
import "../App.css";
import ProductList from "../Components/ProductList";

function HomePage() {
  return (
    <section className="flex-grow-1 d-flex flex-column">
      <Slider />
      <ProductList />
    </section>
  );
}

export default HomePage;
