import React, { useEffect } from 'react';

const Checkout = () => {
  useEffect(() => {
    //TODO make post request to get price total
    // /orders/total => total price
  }, []);

  //TODO send checkout to server
  // /orders/checkout => orders

  return <div>Checkout Screen</div>;
};

export default Checkout;
