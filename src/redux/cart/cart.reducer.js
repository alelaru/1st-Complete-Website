import { cartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TODDLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case cartActionTypes.ADD_ITEM_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    default:
      return state;
  }
};

export default cartReducer;
