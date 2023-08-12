import React from "react";

export const ProductCard = ({
  id,
  title,
  description,
  thumbnail,
  price,
  addToCart,
}) => {
  return (
    <li>
      <img src={thumbnail} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <span>{price}</span>
        <button onClick={() => addToCart({ id, title, thumbnail, price })}>
          Add to card
        </button>
      </div>
    </li>
  );
};
