import React from "react";
import { CartItem } from "./CartItem";

export const Cart = ({ cart = [] }) => {
  return (
    <div>
      <h1>CART</h1>
      <ul>
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
      <hr />
    </div>
  );
};
