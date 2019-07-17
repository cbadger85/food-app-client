import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const OrderList = () => {
  const orders = useSelector(state => state.orders);
  return (
    <div>
      <h1>Orders</h1>
      {orders.map((order, i) => (
        <Link to={`/order/${order.id}`} key={order.id}>
          Order {i + 1}
        </Link>
      ))}
      <Link to="/order">Make a new order!</Link>
    </div>
  );
};

export default OrderList;
