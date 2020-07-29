import React from "react";

import "./cart-icon.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

function CartIcon({ toggleCartHidden, cartItems }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{cartItems.length}</span>
    </div>
  );
}

// Access the state from the reducer
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

const mapDispatchTheProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchTheProps)(CartIcon);
