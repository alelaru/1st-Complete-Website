import React from "react";

import "./cart-icon.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";

function CartIcon() {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
