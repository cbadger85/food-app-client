import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const OrderList = () => {
  const orders = useSelector(state => state.orders);
  console.log(orders);
  return (
    <div>
      <Link to="/order">Make a new order!</Link>
    </div>
  );
};

export default OrderList;
