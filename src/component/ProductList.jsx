import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ products = [], addToCart }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
};
