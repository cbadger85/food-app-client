import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import IngredientsForm from '../components/IngredientsForm';
import { addOrderToCart, updatItemInCart } from '../store/actions';

const Order = ({ history, match }) => {
  const [ingredients, setIngredients] = useState([]);
  const dispatch = useDispatch();
  const { sandwich } =
    useSelector(state =>
      state.orders.find(foundOrder => foundOrder.id === match.params.id)
    ) || [];

  useEffect(() => {
    axios.get('/ingredients').then(res => setIngredients(res.data));
  }, []);

  const handleAddToOrder = order => {
    dispatch(addOrderToCart(order));

    history.push('/');
  };

  const handleEditOrder = order => {
    dispatch(updatItemInCart({ id: match.params.id, sandwich: order }));
    history.push('/');
  };

  return (
    <div>
      <IngredientsForm
        ingredients={ingredients}
        addToOrder={handleAddToOrder}
        editOrder={handleEditOrder}
        foundOrder={sandwich}
        isEditingOrder={!!match.params.id}
      />
      <Link to="/">Cancel</Link>
    </div>
  );
};

export default withRouter(Order);
