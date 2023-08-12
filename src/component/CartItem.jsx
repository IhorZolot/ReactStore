import React from "react";

export const CartItem = ({ id, title, thumbnail, price }) => {
  return (
    <li>
      <img src={thumbnail} />
      <span>{title}</span>
      <span>{price}</span>
      <button>Delete</button>
    </li>
  );
};
