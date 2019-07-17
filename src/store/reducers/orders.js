import {
  ADD_ORDER_TO_CART,
  REMOVE_ORDER_FROM_CART,
  UPDATE_ITEM_IN_CART,
} from '../actions';

export default (state = [], { type, payload }) => {
  switch (type) {
    case ADD_ORDER_TO_CART:
      return [...state, payload];
    case REMOVE_ORDER_FROM_CART:
      return state.filter(order => order.id !== payload.id);
    case UPDATE_ITEM_IN_CART:
      return state.map(order => {
        if (order.id === payload.id) {
          console.log('equal');
          return payload;
        }

        return order;
      });
    default:
      return state;
  }
};
