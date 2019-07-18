import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import OrderSummary from '../components/OrderSummary';

const Checkout = () => {
  const orders = useSelector(state => state.orders);

  const subTotal = orders.reduce((acc, order) => {
    const subTotal = order.sandwich.reduce((acc, sandwich) => {
      return acc + sandwich.ingredientPrice;
    }, 0);
    return acc + subTotal;
  }, 0);

  const total = subTotal * 1.09;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const handlePlaceOrder = () => {
    const newOrders = orders.map(order => {
      const { sandwich, id } = order;
      return { order: sandwich, id };
    });
    axios
      .post('/orders/checkout', { sandwiches: newOrders })
      .then(res => console.log(res.data))
      .catch(console.error);
  };

  return (
    <div>
      <OrderSummary orders={orders} />
      <div>sub total: {formatter.format(subTotal)}</div>
      <div>total: {formatter.format(total)}</div>
      {!!orders.length && (
        <button type="button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      )}
    </div>
  );
};

export default Checkout;
