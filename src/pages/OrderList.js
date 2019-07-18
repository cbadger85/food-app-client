import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeOrderFromCart } from '../store/actions';

const OrderList = () => {
  const orders = useSelector(state => state.orders);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Orders</h1>
      {orders.map((order, i) => (
        <div key={order.id}>
          <Link to={`/order/${order.id}`}>Order {i + 1}</Link>
          <button
            type="button"
            onClick={() => dispatch(removeOrderFromCart(order.id))}
          >
            Delete
          </button>
        </div>
      ))}
      <div>
        <Link to="/order">Make a new order!</Link>
      </div>
      <div>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default OrderList;
