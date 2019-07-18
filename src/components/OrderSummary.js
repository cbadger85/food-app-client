import React from 'react';

const OrderSummary = ({ orders = [] }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return orders.map((order, i) => (
    <div key={order.id}>
      <h3>order {i + 1}</h3>
      <ul>
        {order.sandwich.map(ingredient => (
          <li key={ingredient.id}> {ingredient.ingredientName}</li>
        ))}
      </ul>
      <div>
        sandwich total:{' '}
        {formatter.format(
          order.sandwich.reduce(
            (acc, ingredient) => ingredient.ingredientPrice + acc,
            0
          )
        )}
      </div>
    </div>
  ));
};

export default OrderSummary;
