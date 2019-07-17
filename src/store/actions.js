import uuid from 'uuid/v4';

export const ADD_ORDER_TO_CART = 'ADD_ORDER_TO_CART';
export const REMOVE_ORDER_FROM_CART = 'REMOVE_ORDER_FROM_CART';
export const UPDATE_ITEM_IN_CART = 'UPDATE_ITEM_IN_CART';

export const addOrderToCart = order => ({
  type: ADD_ORDER_TO_CART,
  payload: { sandwich: order, id: uuid() },
});

export const removeOrderFromCart = id => ({
  type: REMOVE_ORDER_FROM_CART,
  payload: { id },
});

export const updatItemInCart = order => ({
  type: UPDATE_ITEM_IN_CART,
  payload: order,
});
