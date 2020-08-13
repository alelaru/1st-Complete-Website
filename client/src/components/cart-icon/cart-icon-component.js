import React from "react";

import "./cart-icon.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

function CartIcon({ toggleCartHidden, itemsCount }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{itemsCount}</span>
    </div>
  );
}

// Access the state from the reducer
const mapStateToProps = (state) => ({
  itemsCount: selectCartItemsCount(state),
});

const mapDispatchTheProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchTheProps)(CartIcon);
